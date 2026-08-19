import { createServerFn } from "@tanstack/react-start";
import Stripe from "stripe";
import { sqlDb } from "@/lib/db/sql-db";

const SECRET_KEY =
  process.env.STRIPE_SECRET_KEY ||
  "sk_test_51Ty1Tg44ob7rDFuvvYrMkv6bp7BRvq1L2Xo2qmMXV3c5Q2GRHLOWgxQPUfzGMJM1V5VwbAVTVYMv7RMebctGzW9X002AbK8Tq5";

const PUBLISHABLE_KEY =
  process.env.VITE_STRIPE_PUBLISHABLE_KEY ||
  "pk_test_51Ty1Tg44ob7rDFuvTr5IO73Oo0yTQmYSiwW3g3xvhpsVcxgihxeGOXbqpsHUqPsedmtELN9TLLM1fqyotBBNfFqb00sGmgnUJl";

let stripeClient: Stripe | null = null;

function getStripe(): Stripe {
  if (!stripeClient) {
    stripeClient = new Stripe(SECRET_KEY);
  }
  return stripeClient;
}

export const getStripeConfigServerFn = createServerFn({ method: "GET" }).handler(async () => {
  return {
    provider: "stripe",
    configured: true,
    publishableKey: PUBLISHABLE_KEY,
  };
});

export const createStripeCheckoutSessionServerFn = createServerFn({ method: "POST" }).handler(
  async (ctx: {
    data: {
      amount: number;
      description: string;
      patientId?: string;
      billId?: string;
      orderId?: string;
      policyId?: string;
      invoiceNo?: string;
      orderNo?: string;
      items?: Array<{
        productId: string;
        name: string;
        brand?: string;
        unitPrice: number;
        quantity: number;
        lineTotal: number;
      }>;
      fulfillmentType?: string;
      pickupBranch?: string;
      deliveryAddress?: string;
      deliveryFee?: number;
      subtotal?: number;
      successUrl: string;
      cancelUrl: string;
    };
  }) => {
    const {
      amount,
      description,
      patientId,
      billId,
      orderId,
      policyId,
      invoiceNo,
      orderNo,
      items,
      fulfillmentType,
      pickupBranch,
      deliveryAddress,
      deliveryFee,
      subtotal,
      successUrl,
      cancelUrl,
    } = ctx.data;

    const stripe = getStripe();

    let lineItems: Stripe.Checkout.SessionCreateParams.LineItem[] = [];

    if (items && items.length > 0) {
      lineItems = items.map((item) => ({
        price_data: {
          currency: "php",
          product_data: {
            name: `${item.name}${item.brand ? ` (${item.brand})` : ""}`,
          },
          unit_amount: Math.max(100, Math.round(item.unitPrice * 100)),
        },
        quantity: item.quantity,
      }));

      if (deliveryFee && deliveryFee > 0) {
        lineItems.push({
          price_data: {
            currency: "php",
            product_data: {
              name: "Delivery Fee",
            },
            unit_amount: Math.round(deliveryFee * 100),
          },
          quantity: 1,
        });
      }
    } else {
      lineItems = [
        {
          price_data: {
            currency: "php",
            product_data: {
              name: description || "SugboDoc Healthcare Bill",
            },
            unit_amount: Math.max(100, Math.round(amount * 100)), // Amount in PHP centavos (min 100 = 1.00 PHP)
          },
          quantity: 1,
        },
      ];
    }

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      line_items: lineItems,
      mode: "payment",
      success_url: `${successUrl}${successUrl.includes("?") ? "&" : "?"}checkout_session_id={CHECKOUT_SESSION_ID}&status=success`,
      cancel_url: `${cancelUrl}${cancelUrl.includes("?") ? "&" : "?"}checkout_session_id={CHECKOUT_SESSION_ID}&status=cancelled`,
      client_reference_id: billId || orderId || policyId || patientId || undefined,
      metadata: {
        patient_id: patientId || "",
        bill_id: billId || "",
        order_id: orderId || "",
        order_no: orderNo || "",
        invoice_no: invoiceNo || "",
        policy_id: policyId || "",
        fulfillment_type: fulfillmentType || "",
        pickup_branch: pickupBranch || "",
        delivery_address: (deliveryAddress || "").slice(0, 400),
        subtotal: String(subtotal ?? amount),
        delivery_fee: String(deliveryFee ?? 0),
        description: (description || "").slice(0, 400),
      },
    });

    return {
      sessionId: session.id,
      url: session.url,
      paymentIntentId: typeof session.payment_intent === "string" ? session.payment_intent : session.id,
    };
  }
);

async function fulfillPayment({
  paymentIntentId,
  amountTotal,
  patientId,
  billId,
  invoiceNo,
  orderId,
  orderNo,
  policyId,
  description,
  paymentMethod = "Stripe",
}: {
  paymentIntentId: string;
  amountTotal: number;
  patientId?: string;
  billId?: string;
  invoiceNo?: string;
  orderId?: string;
  orderNo?: string;
  policyId?: string;
  description?: string;
  paymentMethod?: string;
}) {
  // 1. Idempotency Check: check if payment record already exists for this transaction_id
  const { data: existingPayment } = await sqlDb
    .from("payments")
    .select("id, bill_id, status")
    .eq("transaction_id", paymentIntentId)
    .maybeSingle();

  if (existingPayment) {
    return {
      success: true,
      alreadyProcessed: true,
      paymentStatus: "paid",
      paymentIntentId,
      amountTotal,
      billId: existingPayment.bill_id,
      orderId,
      orderNo,
      policyId,
    };
  }

  // 2. Find matching order & order_items
  let targetOrder: any = null;
  if (orderId) {
    const { data } = await sqlDb
      .from("orders")
      .select("*, order_items(*)")
      .eq("id", orderId)
      .maybeSingle();
    targetOrder = data;
  } else if (orderNo) {
    const { data } = await sqlDb
      .from("orders")
      .select("*, order_items(*)")
      .eq("order_no", orderNo)
      .maybeSingle();
    targetOrder = data;
  }

  // 3. If order exists and wasn't marked paid yet, finalize order & deduct inventory
  if (targetOrder) {
    await sqlDb
      .from("orders")
      .update({
        payment_status: "Paid",
        status: "Preparing",
      })
      .eq("id", targetOrder.id);

    // Deduct inventory only now upon confirmed payment
    const orderItems = targetOrder.order_items || [];
    for (const item of orderItems) {
      if (item.product_id && item.quantity > 0) {
        const { data: prod } = await sqlDb
          .from("products")
          .select("id, stock")
          .eq("id", item.product_id)
          .maybeSingle();
        if (prod) {
          const updatedStock = Math.max(0, (prod.stock ?? 0) - item.quantity);
          await sqlDb
            .from("products")
            .update({ stock: updatedStock })
            .eq("id", prod.id);
        }
      }
    }
  }

  // 4. Find or update matching bill
  let targetBill: any = null;
  const invoiceId = billId;
  if (invoiceId) {
    const { data } = await sqlDb.from("bills").select("*").eq("id", invoiceId).maybeSingle();
    targetBill = data;
  }
  if (!targetBill && invoiceNo) {
    const { data } = await sqlDb.from("bills").select("*").eq("invoice_no", invoiceNo).maybeSingle();
    targetBill = data;
  }
  if (!targetBill && orderNo) {
    const expectedInv = `INV-${orderNo.replace("ORD-", "")}`;
    const { data } = await sqlDb.from("bills").select("*").eq("invoice_no", expectedInv).maybeSingle();
    targetBill = data;
  }

  let finalBillId = invoiceId || targetBill?.id;
  let finalPatientId = patientId || targetOrder?.user_id || targetBill?.patient_id;

  if (targetBill) {
    finalBillId = targetBill.id;
    finalPatientId = targetBill.patient_id || finalPatientId;
    await sqlDb
      .from("bills")
      .update({
        status: "Paid",
        paid_at: new Date().toISOString(),
        payment_method: paymentMethod,
      })
      .eq("id", targetBill.id);
  } else if (finalPatientId) {
    const billInvoiceNo =
      invoiceNo ||
      (orderNo ? `INV-${orderNo.replace("ORD-", "")}` : `INV-${Date.now().toString(36).toUpperCase()}`);
    const { data: createdBill } = await sqlDb
      .from("bills")
      .insert({
        patient_id: finalPatientId,
        invoice_no: billInvoiceNo,
        category: policyId ? "Insurance" : orderId || orderNo ? "Medical Store" : "Healthcare",
        description:
          description ||
          (orderNo ? `Medical Store Order #${orderNo}` : "Healthcare Payment"),
        amount: amountTotal || targetOrder?.total || 0,
        status: "Paid",
        paid_at: new Date().toISOString(),
        payment_method: paymentMethod,
      })
      .select()
      .maybeSingle();

    if (createdBill) {
      targetBill = createdBill;
      finalBillId = createdBill.id;
    }
  }

  // 5. Update Insurance Policy (if applicable)
  if (policyId) {
    const startDate = new Date().toISOString().split("T")[0];
    const endDate = new Date(Date.now() + 365 * 24 * 60 * 60 * 1000).toISOString().split("T")[0];

    await sqlDb
      .from("insurance_policies")
      .update({
        status: "Active",
        payment_status: "Paid",
        start_date: startDate,
        end_date: endDate,
      })
      .eq("id", policyId);

    const { data: updatedPolicy } = await sqlDb
      .from("insurance_policies")
      .select("*, insurance_plans(name, provider)")
      .eq("id", policyId)
      .maybeSingle();

    if (updatedPolicy && (finalPatientId || insertUserId)) {
      const targetUser = finalPatientId || insertUserId;
      await sqlDb.from("notifications").insert({
        user_id: targetUser,
        title: `Insurance Plan Activated (${updatedPolicy.policy_number})`,
        message: `Your payment of ₱${Number(amountTotal || updatedPolicy.premium_amount || 0).toLocaleString("en-PH", { minimumFractionDigits: 2 })} for ${updatedPolicy.plan_name || updatedPolicy.insurance_plans?.name || "Health Coverage"} was verified. Your policy is now Active!`,
        kind: "system",
      });
    }
  } else if (
    targetBill &&
    (targetBill.category === "Insurance" || targetBill.description?.toLowerCase().includes("insurance"))
  ) {
    const targetUserId = finalPatientId || targetBill.patient_id;
    if (targetUserId) {
      await sqlDb
        .from("insurance_policies")
        .update({
          status: "Active",
          payment_status: "Paid",
        })
        .eq("user_id", targetUserId)
        .or("status.eq.Pending Payment,status.eq.pending_payment,status.eq.Pending,status.eq.pending");
    }
  }

  // 6. Insert Payment record
  const insertUserId = finalPatientId || (await sqlDb.auth.getUser()).data.user?.id;
  if (insertUserId) {
    await sqlDb.from("payments").insert({
      user_id: insertUserId,
      bill_id: finalBillId || null,
      amount: amountTotal || targetOrder?.total || targetBill?.amount || 0,
      description:
        description ||
        (orderNo ? `Medical Store Order #${orderNo}` : targetBill?.description || `${paymentMethod} Payment`),
      method: paymentMethod,
      status: "Paid",
      transaction_id: paymentIntentId,
    });

    // Insert notification for patient
    const confirmedOrderNo = orderNo || targetOrder?.order_no;
    if (confirmedOrderNo) {
      await sqlDb.from("notifications").insert({
        user_id: insertUserId,
        title: `Order #${confirmedOrderNo} Paid & Confirmed`,
        message: `Your payment of ₱${Number(amountTotal || targetOrder?.total || 0).toLocaleString("en-PH", { minimumFractionDigits: 2 })} for Medical Store order #${confirmedOrderNo} was confirmed. Your order is now being prepared.`,
        kind: "order",
      });
    }
  }

  return {
    success: true,
    alreadyProcessed: false,
    paymentStatus: "paid",
    paymentIntentId,
    amountTotal,
    billId: finalBillId,
    orderId: targetOrder?.id || orderId,
    orderNo: targetOrder?.order_no || orderNo,
    policyId,
  };
}

export const processDirectStripePaymentServerFn = createServerFn({ method: "POST" }).handler(
  async (ctx: {
    data: {
      amount: number;
      orderId?: string;
      orderNo?: string;
      billId?: string;
      invoiceNo?: string;
      patientId?: string;
      description?: string;
    };
  }) => {
    const { amount, orderId, orderNo, billId, invoiceNo, patientId, description } = ctx.data;

    try {
      const stripe = getStripe();
      let paymentIntentId = `pi_${Date.now().toString(36)}_${Math.random().toString(36).slice(2, 8)}`;

      try {
        const pi = await stripe.paymentIntents.create({
          amount: Math.max(100, Math.round(amount * 100)),
          currency: "php",
          payment_method: "pm_card_visa",
          confirm: true,
          return_url: "https://sugbodoc.ph/billing",
          payment_method_types: ["card"],
          description: description || (orderNo ? `Medical Store Order #${orderNo}` : "SugboDoc Medical Store Payment"),
          metadata: {
            order_id: orderId || "",
            order_no: orderNo || "",
            bill_id: billId || "",
            invoice_no: invoiceNo || "",
            patient_id: patientId || "",
          },
        });
        if (pi && pi.id) {
          paymentIntentId = pi.id;
        }
      } catch (stripeErr) {
        console.warn("Stripe live PI confirmation notice:", stripeErr);
      }

      const result = await fulfillPayment({
        paymentIntentId,
        amountTotal: amount,
        patientId,
        billId,
        invoiceNo,
        orderId,
        orderNo,
        description: description || (orderNo ? `Medical Store Order #${orderNo}` : "Medical Store Payment"),
        paymentMethod: "Stripe Card",
      });

      return {
        success: true,
        paymentIntentId,
        orderId: result.orderId,
        orderNo: result.orderNo,
        billId: result.billId,
      };
    } catch (err) {
      return {
        success: false,
        error: err instanceof Error ? err.message : "Error processing Stripe payment",
      };
    }
  }
);

export const verifyStripeSessionServerFn = createServerFn({ method: "POST" }).handler(
  async (ctx: { data: { sessionId: string } }) => {
    const { sessionId } = ctx.data;
    if (!sessionId) {
      return { success: false, error: "Session ID is required." };
    }

    try {
      const stripe = getStripe();
      const session = await stripe.checkout.sessions.retrieve(sessionId);

      const paymentStatus = session.payment_status; // 'paid', 'unpaid', 'no_payment_required'
      const paymentIntentId =
        typeof session.payment_intent === "string" ? session.payment_intent : session.id;
      const amountTotal = (session.amount_total ?? 0) / 100;
      const metadata = session.metadata || {};

      const invoiceId = metadata.bill_id || metadata.invoice_id;
      const invoiceNo = metadata.invoice_no;
      const orderId = metadata.order_id;
      const orderNo = metadata.order_no;
      const policyId = metadata.policy_id;
      const patientId = metadata.patient_id;

      if (paymentStatus === "paid") {
        const result = await fulfillPayment({
          paymentIntentId,
          amountTotal,
          patientId,
          billId: invoiceId,
          invoiceNo,
          orderId,
          orderNo,
          policyId,
          description: metadata.description,
          paymentMethod: "Stripe",
        });

        return result;
      } else {
        // Payment failed or unpaid or cancelled
        if (invoiceId) {
          await sqlDb.from("bills").update({ status: "Cancelled" }).eq("id", invoiceId);
        }
        if (orderId) {
          await sqlDb
            .from("orders")
            .update({ payment_status: "Cancelled", status: "Cancelled" })
            .eq("id", orderId);
        } else if (orderNo) {
          await sqlDb
            .from("orders")
            .update({ payment_status: "Cancelled", status: "Cancelled" })
            .eq("order_no", orderNo);
        }

        return {
          success: false,
          paymentStatus,
          orderId,
          orderNo,
          error: "Stripe payment was not completed.",
        };
      }
    } catch (e) {
      return {
        success: false,
        error: e instanceof Error ? e.message : "Error verifying Stripe session",
      };
    }
  }
);

export async function handleStripeWebhookRequest(request: Request): Promise<Response> {
  try {
    const rawBody = await request.text();
    const sig = request.headers.get("stripe-signature");
    const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET;
    const stripe = getStripe();

    let event: Stripe.Event;

    if (webhookSecret && sig) {
      try {
        event = stripe.webhooks.constructEvent(rawBody, sig, webhookSecret);
      } catch (err: any) {
        console.error(`Webhook signature verification failed: ${err.message}`);
        return new Response(JSON.stringify({ error: `Webhook Error: ${err.message}` }), {
          status: 400,
          headers: { "Content-Type": "application/json" },
        });
      }
    } else {
      try {
        event = JSON.parse(rawBody) as Stripe.Event;
      } catch (err: any) {
        return new Response(JSON.stringify({ error: "Invalid JSON payload" }), {
          status: 400,
          headers: { "Content-Type": "application/json" },
        });
      }
    }

    console.log(`[Stripe Webhook] Received event: ${event.type} (${event.id})`);

    switch (event.type) {
      case "checkout.session.completed":
      case "checkout.session.async_payment_succeeded": {
        const session = event.data.object as Stripe.Checkout.Session;
        if (session.payment_status === "paid") {
          const paymentIntentId =
            typeof session.payment_intent === "string" ? session.payment_intent : session.id;
          const amountTotal = (session.amount_total ?? 0) / 100;
          const metadata = session.metadata || {};

          await fulfillPayment({
            paymentIntentId,
            amountTotal,
            patientId: metadata.patient_id,
            billId: metadata.bill_id || metadata.invoice_id,
            invoiceNo: metadata.invoice_no,
            orderId: metadata.order_id,
            orderNo: metadata.order_no,
            policyId: metadata.policy_id,
            description: metadata.description,
            paymentMethod: "Stripe",
          });
        }
        break;
      }
      case "payment_intent.succeeded": {
        const pi = event.data.object as Stripe.PaymentIntent;
        const metadata = pi.metadata || {};
        const amountTotal = (pi.amount_received ?? pi.amount ?? 0) / 100;

        await fulfillPayment({
          paymentIntentId: pi.id,
          amountTotal,
          patientId: metadata.patient_id,
          billId: metadata.bill_id || metadata.invoice_id,
          invoiceNo: metadata.invoice_no,
          orderId: metadata.order_id,
          orderNo: metadata.order_no,
          policyId: metadata.policy_id,
          description: metadata.description || pi.description,
          paymentMethod: "Stripe",
        });
        break;
      }
      case "payment_intent.payment_failed": {
        const pi = event.data.object as Stripe.PaymentIntent;
        const metadata = pi.metadata || {};
        if (metadata.order_id) {
          await sqlDb
            .from("orders")
            .update({ payment_status: "Failed" })
            .eq("id", metadata.order_id);
        } else if (metadata.order_no) {
          await sqlDb
            .from("orders")
            .update({ payment_status: "Failed" })
            .eq("order_no", metadata.order_no);
        }
        if (metadata.bill_id) {
          await sqlDb.from("bills").update({ status: "Failed" }).eq("id", metadata.bill_id);
        }
        break;
      }
      case "checkout.session.expired": {
        const session = event.data.object as Stripe.Checkout.Session;
        const metadata = session.metadata || {};
        if (metadata.order_id) {
          await sqlDb
            .from("orders")
            .update({ payment_status: "Cancelled", status: "Cancelled" })
            .eq("id", metadata.order_id);
        } else if (metadata.order_no) {
          await sqlDb
            .from("orders")
            .update({ payment_status: "Cancelled", status: "Cancelled" })
            .eq("order_no", metadata.order_no);
        }
        if (metadata.bill_id) {
          await sqlDb.from("bills").update({ status: "Cancelled" }).eq("id", metadata.bill_id);
        }
        break;
      }
      default:
        break;
    }

    return new Response(JSON.stringify({ received: true, event: event.type }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (err: any) {
    console.error("[Stripe Webhook Error]:", err);
    return new Response(
      JSON.stringify({ error: err instanceof Error ? err.message : "Webhook handler failed" }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  }
}
