import type { AppRole, Database } from "./sql-types";

export type { AppRole, Database } from "./sql-types";

// ==========================================
// SEED DATA FOR SQL BACKEND
// ==========================================

export const DEFAULT_STORE_BRANCHES = [
  {
    id: "branch-cdh",
    name: "Cebu Doctors' Hospital Pharmacy",
    address: "Osmeña Blvd, Capitol Site",
    city: "Cebu City",
    contact_number: "+63 32 255 5555",
    operating_hours: "24/7 Open",
    is_active: true,
    created_at: "2026-01-01T00:00:00Z",
  },
  {
    id: "branch-chh",
    name: "Chong Hua Hospital Outpatient Pharmacy",
    address: "Fuente Osmeña Cir",
    city: "Cebu City",
    contact_number: "+63 32 255 8000",
    operating_hours: "6:00 AM - 10:00 PM",
    is_active: true,
    created_at: "2026-01-01T00:00:00Z",
  },
  {
    id: "branch-vsmc",
    name: "Vicente Sotto SMMC Pharmacy",
    address: "B. Rodriguez St",
    city: "Cebu City",
    contact_number: "+63 32 253 9891",
    operating_hours: "24/7 Open",
    is_active: true,
    created_at: "2026-01-01T00:00:00Z",
  },
  {
    id: "branch-psh",
    name: "Perpetual Succour Hospital Dispensary",
    address: "F. Sotto Drive, Gorordo Ave",
    city: "Cebu City",
    contact_number: "+63 32 233 8620",
    operating_hours: "7:00 AM - 9:00 PM",
    is_active: true,
    created_at: "2026-01-01T00:00:00Z",
  },
  {
    id: "branch-ucmed",
    name: "UC Med Hospital Main Pharmacy",
    address: "Ouano Ave, Subangdaku",
    city: "Mandaue City",
    contact_number: "+63 32 505 5555",
    operating_hours: "24/7 Open",
    is_active: true,
    created_at: "2026-01-01T00:00:00Z",
  },
];

export const DEFAULT_STORE_PRODUCTS = [
  {
    id: "prod-paracetamol-500",
    name: "Paracetamol 500mg Tablet (Biogesic)",
    description: "For fast relief of fever, headache, and minor aches.",
    category: "Analgesic / Antipyretic",
    price: 8.5,
    stock: 250,
    reorder_level: 50,
    supplier: "Unilab Pharmaceuticals",
    brand: "Biogesic",
    image_url: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=500&auto=format&fit=crop&q=60",
    rating: 4.9,
    review_count: 142,
    prescription_required: false,
    created_at: "2026-01-01T00:00:00Z",
  },
  {
    id: "prod-amoxicillin-500",
    name: "Amoxicillin 500mg Capsule",
    description: "Broad-spectrum antibacterial medication for bacterial infections.",
    category: "Antibiotics",
    price: 18.0,
    stock: 120,
    reorder_level: 30,
    supplier: "RiteMed Philippines",
    brand: "RiteMed",
    image_url: "https://images.unsplash.com/photo-1471864190281-a93a3070b6de?w=500&auto=format&fit=crop&q=60",
    rating: 4.8,
    review_count: 88,
    prescription_required: true,
    created_at: "2026-01-01T00:00:00Z",
  },
  {
    id: "prod-losartan-50",
    name: "Losartan Potassium 50mg Tablet",
    description: "Angiotensin II receptor blocker used to manage hypertension.",
    category: "Cardiovascular",
    price: 14.5,
    stock: 180,
    reorder_level: 40,
    supplier: "Therapharma Inc.",
    brand: "Lifezar",
    image_url: "https://images.unsplash.com/photo-1585435557343-3b092031a831?w=500&auto=format&fit=crop&q=60",
    rating: 4.9,
    review_count: 95,
    prescription_required: true,
    created_at: "2026-01-01T00:00:00Z",
  },
  {
    id: "prod-metformin-500",
    name: "Metformin HCl 500mg Tablet",
    description: "First-line medication for the treatment of type 2 diabetes.",
    category: "Endocrine & Diabetes",
    price: 12.0,
    stock: 150,
    reorder_level: 35,
    supplier: "Merck Serono",
    brand: "Glucophage",
    image_url: "https://images.unsplash.com/photo-1550572017-edb79a1f26b5?w=500&auto=format&fit=crop&q=60",
    rating: 4.7,
    review_count: 64,
    prescription_required: true,
    created_at: "2026-01-01T00:00:00Z",
  },
  {
    id: "prod-cetirizine-10",
    name: "Cetirizine HCl 10mg Tablet (Alnix)",
    description: "Rapid relief from allergic rhinitis, sneezing, and hives.",
    category: "Antihistamine",
    price: 22.0,
    stock: 90,
    reorder_level: 25,
    supplier: "Unilab Consumer Health",
    brand: "Alnix",
    image_url: "https://images.unsplash.com/photo-1584017911766-d451b3d0e843?w=500&auto=format&fit=crop&q=60",
    rating: 4.8,
    review_count: 73,
    prescription_required: false,
    created_at: "2026-01-01T00:00:00Z",
  },
  {
    id: "prod-omeprazole-20",
    name: "Omeprazole 20mg Delayed-Release Capsule",
    description: "Proton pump inhibitor for GERD, acid reflux, and gastric ulcers.",
    category: "Gastrointestinal",
    price: 25.0,
    stock: 110,
    reorder_level: 30,
    supplier: "AstraZeneca PH",
    brand: "Losec",
    image_url: "https://images.unsplash.com/photo-1577401239170-897942555fb3?w=500&auto=format&fit=crop&q=60",
    rating: 4.8,
    review_count: 51,
    prescription_required: true,
    created_at: "2026-01-01T00:00:00Z",
  },
  {
    id: "prod-bp-monitor",
    name: "Digital Upper Arm Blood Pressure Monitor",
    description: "Clinical accuracy with Intellisense cuff wrapping and irregular heartbeat indicator.",
    category: "Medical Devices",
    price: 2450.0,
    stock: 35,
    reorder_level: 10,
    supplier: "Omron Healthcare",
    brand: "Omron HEM-7120",
    image_url: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=500&auto=format&fit=crop&q=60",
    rating: 4.9,
    review_count: 118,
    prescription_required: false,
    created_at: "2026-01-01T00:00:00Z",
  },
  {
    id: "prod-pulse-oximeter",
    name: "Fingertip Pulse Oximeter with OLED Display",
    description: "Non-invasive SpO2 oxygen saturation and pulse rate monitor.",
    category: "Medical Devices",
    price: 850.0,
    stock: 45,
    reorder_level: 15,
    supplier: "Yuwell Medical",
    brand: "Yuwell YX301",
    image_url: "https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?w=500&auto=format&fit=crop&q=60",
    rating: 4.7,
    review_count: 82,
    prescription_required: false,
    created_at: "2026-01-01T00:00:00Z",
  },
  {
    id: "prod-first-aid-kit",
    name: "Complete Emergency First Aid Kit (75 pcs)",
    description: "OSHA & Red Cross compliant first aid case for home, office, or vehicle.",
    category: "First Aid & Wound Care",
    price: 790.0,
    stock: 55,
    reorder_level: 15,
    supplier: "Philippine Red Cross Partner Supplies",
    brand: "Medikit Pro",
    image_url: "https://images.unsplash.com/photo-1603398938378-e54eab446dde?w=500&auto=format&fit=crop&q=60",
    rating: 4.9,
    review_count: 67,
    prescription_required: false,
    created_at: "2026-01-01T00:00:00Z",
  },
  {
    id: "prod-ir-thermometer",
    name: "Medical Infrared Non-Contact Forehead Thermometer",
    description: "1-second hygienic fever check with color-coded fever warning screen.",
    category: "Medical Devices",
    price: 1150.0,
    stock: 40,
    reorder_level: 12,
    supplier: "Braun Healthcare",
    brand: "ThermoScan IR",
    image_url: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?w=500&auto=format&fit=crop&q=60",
    rating: 4.8,
    review_count: 53,
    prescription_required: false,
    created_at: "2026-01-01T00:00:00Z",
  },
  {
    id: "prod-n95-masks",
    name: "N95 Particulate Respirator Masks (Box of 20)",
    description: "NIOSH-approved healthcare particulate respirator with soft nose foam.",
    category: "Personal Protective Equipment",
    price: 450.0,
    stock: 160,
    reorder_level: 40,
    supplier: "3M Philippines",
    brand: "3M 8210",
    image_url: "https://images.unsplash.com/photo-1584634731339-252c581abfc5?w=500&auto=format&fit=crop&q=60",
    rating: 4.9,
    review_count: 94,
    prescription_required: false,
    created_at: "2026-01-01T00:00:00Z",
  },
  {
    id: "prod-multivitamins-zinc",
    name: "Enervon-C Plus Multivitamins + Zinc (30 Tablets)",
    description: "High potency Vitamin B-Complex, Vitamin C (500mg) and Zinc for immunity.",
    category: "Vitamins & Supplements",
    price: 320.0,
    stock: 200,
    reorder_level: 50,
    supplier: "Unilab Consumer Health",
    brand: "Enervon-C",
    image_url: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=500&auto=format&fit=crop&q=60",
    rating: 4.9,
    review_count: 135,
    prescription_required: false,
    created_at: "2026-01-01T00:00:00Z",
  },
];

export const DEFAULT_DOCTORS = [
  {
    id: "doc-maria-santos",
    name: "Dr. Maria Santos",
    specialty: "Cardiology",
    clinic: "Chong Hua Hospital, Medical Arts Bldg 402",
    rating: 4.9,
    bio: "Fellow of Philippine College of Cardiology. 15+ years managing hypertension, arrhythmias, and cardiovascular wellness.",
    avatar_url: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=300&auto=format&fit=crop&q=80",
    user_id: "user-doctor-maria",
    created_at: "2026-01-01T00:00:00Z",
  },
  {
    id: "doc-john-cruz",
    name: "Dr. John Cruz",
    specialty: "General Physician",
    clinic: "Cebu Doctors' Hospital, Suite 215",
    rating: 4.8,
    bio: "Primary care physician focusing on preventive health, lifestyle medicine, and routine outpatient consultations.",
    avatar_url: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?w=300&auto=format&fit=crop&q=80",
    user_id: "user-doctor-john",
    created_at: "2026-01-01T00:00:00Z",
  },
  {
    id: "doc-angela-reyes",
    name: "Dr. Angela Reyes",
    specialty: "Pediatrics",
    clinic: "Perpetual Succour Hospital, Room 310",
    rating: 4.9,
    bio: "Board-certified pediatrician caring for infants, children, and adolescents with expertise in vaccinations and development.",
    avatar_url: "https://images.unsplash.com/photo-1594824813590-7813a30c5e7d?w=300&auto=format&fit=crop&q=80",
    user_id: "user-doctor-angela",
    created_at: "2026-01-01T00:00:00Z",
  },
  {
    id: "doc-roberto-tan",
    name: "Dr. Roberto Tan",
    specialty: "Orthopedic Surgery",
    clinic: "Chong Hua Hospital Mandaue, Rm 512",
    rating: 4.7,
    bio: "Specializing in sports injuries, joint preservation, fracture care, and musculoskeletal rehabilitation.",
    avatar_url: "https://images.unsplash.com/photo-1537368910025-700350fe46c7?w=300&auto=format&fit=crop&q=80",
    user_id: "user-doctor-roberto",
    created_at: "2026-01-01T00:00:00Z",
  },
  {
    id: "doc-elena-lim",
    name: "Dr. Elena Lim",
    specialty: "Dermatology",
    clinic: "UC Med Hospital, Clinical Suite 108",
    rating: 4.8,
    bio: "Medical and cosmetic dermatology, eczema treatments, skin allergy testing, and acne therapy.",
    avatar_url: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=300&auto=format&fit=crop&q=80",
    user_id: "user-doctor-elena",
    created_at: "2026-01-01T00:00:00Z",
  },
];

export const DEFAULT_INSURANCE_PLANS = [
  {
    id: "plan-philhealth-universal",
    code: "PHILHEALTH-UNI",
    name: "PhilHealth Standard Universal Coverage",
    provider: "Philippine Health Insurance Corporation",
    type: "Universal Social Health",
    category: "Universal Social Health",
    coverage_limit: 500000.0,
    co_pay_percent: 10,
    coverage_percentage: 90,
    monthly_premium: 500.0,
    annual_premium: 5400.0,
    validity_months: 12,
    tag: "Government Mandate",
    description: "Essential national inpatient, outpatient, and Z-benefit packages with accredited hospital admission across the Philippines.",
    provider_about: "Philippine Health Insurance Corporation (PhilHealth) is the government-owned tax-exempt corporation attached to the Department of Health ensuring universal health coverage for all Filipinos.",
    provider_hotline: "+63 (02) 8441-7442",
    provider_website: "https://www.philhealth.gov.ph",
    provider_email: "actioncenter@philhealth.gov.ph",
    provider_rating: 4.6,
    provider_members: 58000000,
    benefits: [
      "Inpatient hospitalization benefits and room & board subsidies",
      "Outpatient blood transfusions, radiotherapy, and hemodialysis",
      "PhilHealth Konsulta primary healthcare packages",
      "Coverage for catastrophic illness (Z-Benefit package)",
      "Maternity and newborn care packages"
    ],
    eligibility: [
      "All Filipino citizens residing locally or overseas",
      "Registered PhilHealth Identification Number (PIN)",
      "Formal economy, self-employed, or subsidized senior citizen members"
    ],
    waiting_period: "Immediate emergency coverage; 30 days for routine elective admissions",
    exclusions: [
      "Cosmetic surgery and elective aesthetic modifications",
      "Non-prescription vitamins and unverified supplements",
      "Experimental therapies not recognized by the Department of Health"
    ],
    included_services: [
      "Primary Care Physician Consultations",
      "Complete Blood Count (CBC) & Urinalysis",
      "Chest Radiography (X-Ray)",
      "Standard Hospital Room & Board",
      "Surgical Professional Fee Subsidy"
    ],
    maximum_claims: 24,
    renewal_policy: "Automatic continuous annual renewal through monthly or annual contributions.",
    terms_and_conditions: "Covered under RA 11223 (Universal Health Care Act). Subscriptions initiated via SugboDoc are linked to the national registry and validated upon instant Stripe checkout payment.",
    faqs: [
      { question: "How quickly does coverage activate after Stripe payment?", answer: "Your PhilHealth policy is confirmed instantly in SugboDoc upon successful Stripe payment verification." },
      { question: "Can I use this coverage at private hospitals in Cebu?", answer: "Yes, all DOH-licensed private and public hospitals in Cebu honor accredited PhilHealth benefit claims." }
    ],
    logo_url: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=160&auto=format&fit=crop&q=80",
    card_image_url: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800&auto=format&fit=crop&q=80",
    is_active: true,
    created_at: "2026-01-01T00:00:00Z",
  },
  {
    id: "plan-maxicare-plus",
    code: "MAXICARE-PLUS",
    name: "Maxicare Plus Comprehensive HMO",
    provider: "Maxicare Healthcare Corporation",
    type: "Comprehensive HMO",
    category: "Comprehensive HMO",
    coverage_limit: 250000.0,
    co_pay_percent: 0,
    coverage_percentage: 100,
    monthly_premium: 1850.0,
    annual_premium: 18870.0,
    validity_months: 12,
    tag: "Most Popular Offer",
    description: "Premium cashless healthcare with 100% coverage, zero co-pay, private room accommodations, and extensive Cebu clinic access.",
    provider_about: "Maxicare Healthcare Corporation is the leading HMO in the Philippines with over 30 years of excellence, serving millions of members nationwide with 24/7 teleconsultation and cashless network.",
    provider_hotline: "+63 (32) 255-8000",
    provider_website: "https://www.maxicare.com.ph",
    provider_email: "customercare@maxicare.com.ph",
    provider_rating: 4.9,
    provider_members: 1850000,
    benefits: [
      "100% Cashless hospitalization at Chong Hua Hospital, Cebu Doctors' & UC Med",
      "Unlimited outpatient consultations with accredited doctors and specialists",
      "Annual Physical Examination (APE) with comprehensive blood chemistry",
      "Emergency room care and road ambulance transfer coverage",
      "Prescription medicine allowance at SugboDoc Medical Store"
    ],
    eligibility: [
      "Individuals aged 18 to 65 years old (renewable up to age 75)",
      "Philippine residents and working expatriates",
      "No active terminal hospitalization at the time of purchase"
    ],
    waiting_period: "Immediate emergency coverage; zero waiting period for general outpatient consultations",
    exclusions: [
      "Aesthetic dermatology without pathological indication",
      "Self-prescribed alternative holistic remedies",
      "Non-emergency overseas medical expenditures"
    ],
    included_services: [
      "Private Hospital Room & Board (₱3,500/day)",
      "Specialist Consultations (Cardiology, ENT, Pediatrics, OB-GYN)",
      "Advanced Imaging (CT Scan, MRI, Ultrasound, 2D Echo)",
      "Emergency Trauma & Triage Treatment",
      "Preventive Dental & Vision Cleaning"
    ],
    maximum_claims: 20,
    renewal_policy: "Guaranteed renewal with a 5% renewal discount upon continuous tenure.",
    terms_and_conditions: "Cashless approval is processed electronically through the SugboDoc provider network. Full policy card and digital QR certificate issued immediately upon Stripe payment.",
    faqs: [
      { question: "Are pre-existing conditions covered?", answer: "Pre-existing conditions are covered up to ₱50,000 during the first year, expanding to full limit upon renewal." },
      { question: "How does cashless billing work?", answer: "Present your SugboDoc Digital Insurance Card or policy number at any partner hospital counter for direct settlement." }
    ],
    logo_url: "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?w=160&auto=format&fit=crop&q=80",
    card_image_url: "https://images.unsplash.com/photo-1532938911079-1b06ac7ceec7?w=800&auto=format&fit=crop&q=80",
    is_active: true,
    created_at: "2026-01-01T00:00:00Z",
  },
  {
    id: "plan-medicard-select",
    code: "MEDICARD-SELECT",
    name: "Medicard Select Health Plan",
    provider: "MediCard Philippines, Inc.",
    type: "Preventive & Inpatient HMO",
    category: "Comprehensive HMO",
    coverage_limit: 200000.0,
    co_pay_percent: 5,
    coverage_percentage: 95,
    monthly_premium: 1600.0,
    annual_premium: 16320.0,
    validity_months: 12,
    tag: "Best Value",
    description: "Balanced health plan offering full hospitalization benefits, preventive screenings, emergency room, and specialist checkups.",
    provider_about: "MediCard Philippines is a premier HMO founded by physicians, dedicated to providing accessible and personalized healthcare solutions across the archipelago.",
    provider_hotline: "+63 (32) 231-6334",
    provider_website: "https://www.medicardphils.com",
    provider_email: "support@medicardphils.com",
    provider_rating: 4.8,
    provider_members: 1200000,
    benefits: [
      "Inpatient surgery and semi-private room accommodation",
      "Unlimited outpatient visits to MediCard free-standing clinics in Cebu",
      "Annual preventive executive checkup and urinalysis",
      "Coverage for lab tests, ECG, and chest X-rays",
      "Minor surgical procedure coverage in outpatient setting"
    ],
    eligibility: [
      "Ages 18 to 60 years old",
      "Valid government ID or company employment ID",
      "Applicable for individual or family enrollment"
    ],
    waiting_period: "15 days for elective procedures; immediate for accidents and emergencies",
    exclusions: [
      "Cosmetic dermatological and orthodontic treatments",
      "Dangerous recreational extreme sports injuries",
      "Experimental drug therapies without clinical trial certification"
    ],
    included_services: [
      "Semi-Private Hospital Accommodations",
      "Physician Specialist Consultations",
      "Complete Hematology & Lipid Panels",
      "Emergency Room & Resuscitation Facilities",
      "Routine Immunization Screening"
    ],
    maximum_claims: 15,
    renewal_policy: "Annual renewal available with seamless auto-debit through Stripe subscription.",
    terms_and_conditions: "Subject to standard MediCard healthcare agreement guidelines. Claims are verified directly using policy verification tokens.",
    faqs: [
      { question: "Can family members be added under this plan?", answer: "Yes, you can enroll qualified dependents during checkout with individual digital cards generated." }
    ],
    logo_url: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=160&auto=format&fit=crop&q=80",
    card_image_url: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=800&auto=format&fit=crop&q=80",
    is_active: true,
    created_at: "2026-01-01T00:00:00Z",
  },
  {
    id: "plan-intellicare-careplus",
    code: "INTELLICARE-CAREPLUS",
    name: "Intellicare CarePlus Elite",
    provider: "Asalus Corporation (Intellicare)",
    type: "Executive Corporate HMO",
    category: "Executive & Family",
    coverage_limit: 350000.0,
    co_pay_percent: 0,
    coverage_percentage: 100,
    monthly_premium: 2200.0,
    annual_premium: 22440.0,
    validity_months: 12,
    tag: "Executive Tier",
    description: "Broad nationwide hospital network, prescription allowances, executive physical exams, dental rider, and fast-track admissions.",
    provider_about: "Intellicare (Asalus Corporation) is the country's preeminent healthcare management leader, delivering top-tier health management services with over 40,000 accredited medical specialists.",
    provider_hotline: "+63 (32) 234-0100",
    provider_website: "https://www.intellicare.com.ph",
    provider_email: "careplus@intellicare.com.ph",
    provider_rating: 4.9,
    provider_members: 2400000,
    benefits: [
      "Comprehensive inpatient executive private room coverage",
      "Fast-track cashless admission at all accredited hospitals nationwide",
      "Full outpatient diagnostic lab and diagnostic imaging allowance",
      "Dental care rider: bi-annual cleanings, fillings, and dental consultations",
      "Dedicated 24/7 care concierge and medical coordinator"
    ],
    eligibility: [
      "Individuals and professionals aged 18 to 65",
      "Self-employed individuals and corporate executives",
      "Valid Philippine residency address"
    ],
    waiting_period: "Immediate emergency access; zero waiting period for outpatient clinic visits",
    exclusions: [
      "Elective cosmetic surgeries",
      "Experimental alternative holistic treatments"
    ],
    included_services: [
      "Executive Suite / Private Room (₱4,500/day)",
      "Specialist Sub-Specialty Consultations",
      "Cardiac MRI, CT Angiography & 2D Echo",
      "Emergency Ambulance & Air Evacuation Assistance",
      "Complete Dental Prophylaxis & Sealants"
    ],
    maximum_claims: 25,
    renewal_policy: "Automatic renewal guarantee with VIP concierge support and priority claims clearance.",
    terms_and_conditions: "All terms comply with Insurance Commission of the Philippines standard HMO regulations.",
    faqs: [
      { question: "Does this include dental coverage?", answer: "Yes, Intellicare CarePlus Elite includes comprehensive dental care coverage and annual oral prophylaxis." }
    ],
    logo_url: "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?w=160&auto=format&fit=crop&q=80",
    card_image_url: "https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?w=800&auto=format&fit=crop&q=80",
    is_active: true,
    created_at: "2026-01-01T00:00:00Z",
  },
  {
    id: "plan-cebudoc-shield",
    code: "CEBUDOC-GOLD",
    name: "CebuDoc Executive Gold Shield",
    provider: "Cebu Doctors' University Hospital Network",
    type: "Hospital Network Gold Plan",
    category: "Executive & Family",
    coverage_limit: 400000.0,
    co_pay_percent: 0,
    coverage_percentage: 100,
    monthly_premium: 2450.0,
    annual_premium: 24990.0,
    validity_months: 12,
    tag: "Cebu Priority Care",
    description: "Direct priority access to CebuDoc Group hospitals with dedicated hospitalist care, specialty diagnostics, and zero out-of-pocket costs.",
    provider_about: "Cebu Doctors' University Hospital is a premier tertiary healthcare institution in Central Visayas renowned for world-class surgical, cardiovascular, and oncological medical care.",
    provider_hotline: "+63 (32) 255-5555",
    provider_website: "https://cebudocgroup.com",
    provider_email: "goldshield@cebudocgroup.com",
    provider_rating: 4.9,
    provider_members: 650000,
    benefits: [
      "Priority VIP room accommodation across all CebuDoc network hospitals",
      "100% direct cashless coverage for inpatient and outpatient procedures",
      "Specialty oncology, cardiology, and orthopedics care access",
      "24/7 Direct line to senior attending physicians in Cebu City",
      "₱10,000 Annual pharmacy medication allowance at SugboDoc"
    ],
    eligibility: [
      "Residents of Cebu and Central Visayas aged 18 to 70",
      "No preexisting disqualification for non-emergency admissions"
    ],
    waiting_period: "Immediate emergency access; 7 days for elective diagnostic admissions",
    exclusions: [
      "Non-medically necessary plastic surgeries",
      "Uncertified experimental procedures"
    ],
    included_services: [
      "VIP Private Room Suite",
      "Chief Specialist Consultation Privileges",
      "High-Resolution MRI, PET Scan, and Hemodynamic Labs",
      "Emergency Trauma Center Rapid Admission",
      "Home Health Care & Post-Discharge Rehabilitation"
    ],
    maximum_claims: 30,
    renewal_policy: "Preferential loyalty renewal with locked-in premium rate for 3 years.",
    terms_and_conditions: "Administered in partnership with SugboDoc Integrated Healthcare Platform with real-time electronic claims settlement.",
    faqs: [
      { question: "Which hospitals are included in this network?", answer: "Cebu Doctors' Hospital (Main), South General Hospital, North General Hospital, Mactan Doctors' Hospital, and Ormoc Doctors' Hospital." }
    ],
    logo_url: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=160&auto=format&fit=crop&q=80",
    card_image_url: "https://images.unsplash.com/photo-1516549655169-df83a0774514?w=800&auto=format&fit=crop&q=80",
    is_active: true,
    created_at: "2026-01-01T00:00:00Z",
  },
];

export const DEFAULT_PROFILES = [
  {
    id: "patient-juan-cruz",
    email: "juan@example.com",
    name: "Juan dela Cruz",
    phone: "+63 917 123 4567",
    dob: "1988-06-12",
    sex: "Male",
    blood_type: "O+",
    allergies: ["Penicillin", "Sulfa drugs"],
    emergency_contact_name: "Maria dela Cruz",
    emergency_contact_relation: "Spouse",
    emergency_contact_phone: "+63 917 987 6543",
    address: "Banilad, Cebu City, 6000",
    assigned_doctor: "Dr. Maria Santos",
    status: "Active",
    is_demo: false,
    created_at: "2026-01-01T00:00:00Z",
    updated_at: "2026-01-01T00:00:00Z",
  },
  {
    id: "user-doctor-maria",
    email: "dr.santos@sugbodoc.ph",
    name: "Dr. Maria Santos",
    phone: "+63 918 234 5678",
    dob: "1978-04-20",
    sex: "Female",
    blood_type: "A+",
    allergies: [],
    emergency_contact_name: "Roberto Santos",
    emergency_contact_relation: "Spouse",
    emergency_contact_phone: "+63 918 876 5432",
    address: "Lahug, Cebu City, 6000",
    assigned_doctor: null,
    status: "Active",
    is_demo: false,
    created_at: "2026-01-01T00:00:00Z",
    updated_at: "2026-01-01T00:00:00Z",
  },
  {
    id: "user-doctor-john",
    email: "dr.cruz@sugbodoc.ph",
    name: "Dr. John Cruz",
    phone: "+63 919 345 6789",
    dob: "1982-11-15",
    sex: "Male",
    blood_type: "B+",
    allergies: [],
    emergency_contact_name: "Elena Cruz",
    emergency_contact_relation: "Sister",
    emergency_contact_phone: "+63 919 765 4321",
    address: "Guadalupe, Cebu City, 6000",
    assigned_doctor: null,
    status: "Active",
    is_demo: false,
    created_at: "2026-01-01T00:00:00Z",
    updated_at: "2026-01-01T00:00:00Z",
  },
  {
    id: "user-admin-main",
    email: "admin@sugbodoc.ph",
    name: "Hospital Administrator",
    phone: "+63 32 255 5500",
    dob: "1980-01-01",
    sex: "Other",
    blood_type: "AB+",
    allergies: [],
    emergency_contact_name: "Chief of Staff",
    emergency_contact_relation: "Colleague",
    emergency_contact_phone: "+63 32 255 5501",
    address: "SugboDoc Administration Complex, Cebu City",
    assigned_doctor: null,
    status: "Active",
    is_demo: false,
    created_at: "2026-01-01T00:00:00Z",
    updated_at: "2026-01-01T00:00:00Z",
  },
];

export const DEFAULT_USER_ROLES = [
  { id: "role-1", user_id: "patient-juan-cruz", role: "patient" as AppRole, created_at: "2026-01-01T00:00:00Z" },
  { id: "role-2", user_id: "user-doctor-maria", role: "doctor" as AppRole, created_at: "2026-01-01T00:00:00Z" },
  { id: "role-3", user_id: "user-doctor-john", role: "doctor" as AppRole, created_at: "2026-01-01T00:00:00Z" },
  { id: "role-4", user_id: "user-admin-main", role: "admin" as AppRole, created_at: "2026-01-01T00:00:00Z" },
];

export const DEFAULT_INSURANCE_POLICIES = [
  {
    id: "pol-philhealth-juan",
    patient_id: "patient-juan-cruz",
    user_id: "patient-juan-cruz",
    plan_id: "plan-philhealth-universal",
    plan_name: "PhilHealth Standard Universal Coverage",
    provider: "Philippine Health Insurance Corporation",
    policy_number: "PH-2026-8891234",
    coverage_limit: 500000.0,
    remaining_coverage: 465000.0,
    co_pay_percent: 10,
    premium_amount: 5400.0,
    billing_cycle: "annual",
    start_date: "2026-01-01",
    end_date: "2026-12-31",
    status: "Active",
    payment_status: "Paid",
    is_primary: true,
    created_at: "2026-01-01T00:00:00Z",
  },
  {
    id: "pol-maxicare-juan",
    patient_id: "patient-juan-cruz",
    user_id: "patient-juan-cruz",
    plan_id: "plan-maxicare-plus",
    plan_name: "Maxicare Plus Comprehensive HMO",
    provider: "Maxicare Healthcare Corporation",
    policy_number: "MAX-88291039",
    coverage_limit: 250000.0,
    remaining_coverage: 215000.0,
    co_pay_percent: 0,
    premium_amount: 18870.0,
    billing_cycle: "annual",
    start_date: "2026-01-15",
    end_date: "2027-01-14",
    status: "Active",
    payment_status: "Paid",
    is_primary: false,
    created_at: "2026-01-15T00:00:00Z",
  },
];

export const DEFAULT_APPOINTMENTS = [
  {
    id: "appt-101",
    patient_id: "patient-juan-cruz",
    doctor_id: "doc-maria-santos",
    doctor_name: "Dr. Maria Santos",
    department: "Cardiology",
    clinic: "Chong Hua Hospital, Medical Arts Bldg 402",
    appointment_date: "2026-08-20",
    appointment_time: "09:30 AM",
    status: "Confirmed",
    notes: "Follow-up consultation for blood pressure management and ECG review.",
    created_at: "2026-08-10T08:00:00Z",
  },
  {
    id: "appt-102",
    patient_id: "patient-juan-cruz",
    doctor_id: "doc-john-cruz",
    doctor_name: "Dr. John Cruz",
    department: "General Medicine",
    clinic: "Cebu Doctors' Hospital, Suite 215",
    appointment_date: "2026-08-28",
    appointment_time: "02:00 PM",
    status: "Scheduled",
    notes: "Routine quarterly wellness assessment and fasting lipid profile review.",
    created_at: "2026-08-12T10:30:00Z",
  },
];

export const DEFAULT_ENCOUNTERS = [
  {
    id: "enc-201",
    patient_id: "patient-juan-cruz",
    appointment_id: "appt-101",
    doctor_id: "doc-maria-santos",
    doctor_name: "Dr. Maria Santos",
    department: "Cardiology",
    type: "Outpatient Consultation",
    encounter_date: "2026-08-01T09:30:00Z",
    status: "Completed",
    summary: "Hypertension follow-up visit. Blood pressure well-controlled with Losartan 50mg daily.",
    encounter_notes: "Patient reports no dizziness, chest pain, or palpitations. Continues daily brisk walking.",
    created_at: "2026-08-01T09:30:00Z",
  },
];

export const DEFAULT_SOAP_NOTES = [
  {
    id: "soap-301",
    encounter_id: "enc-201",
    subjective: "Patient reports taking Losartan 50mg consistently every morning. Occasional mild fatigue after work hours.",
    objective: "BP: 124/82 mmHg, HR: 74 bpm, O2 Sat: 99% on room air, Weight: 72.5 kg, BMI: 24.2 kg/m².",
    assessment: "Stage 1 Essential Hypertension, well-controlled on current monotherapy.",
    plan: "Continue Losartan 50mg OD. Maintain low-sodium dietary habits. Repeat fasting lipid panel and serum creatinine in 3 months.",
    created_at: "2026-08-01T10:00:00Z",
  },
];

export const DEFAULT_VITAL_SIGNS = [
  {
    id: "vitals-401",
    encounter_id: "enc-201",
    blood_pressure: "124/82",
    heart_rate: 74,
    respiratory_rate: 16,
    temperature: 36.6,
    oxygen_saturation: 99,
    weight_kg: 72.5,
    height_cm: 173.0,
    bmi: 24.2,
    recorded_at: "2026-08-01T09:35:00Z",
    created_at: "2026-08-01T09:35:00Z",
  },
];

export const DEFAULT_ENCOUNTER_DIAGNOSES = [
  {
    id: "diag-501",
    encounter_id: "enc-201",
    code: "I10",
    description: "Essential (primary) hypertension",
    type: "Primary",
    created_at: "2026-08-01T09:45:00Z",
  },
];

export const DEFAULT_PRESCRIPTIONS = [
  {
    id: "rx-601",
    patient_id: "patient-juan-cruz",
    doctor_id: "doc-maria-santos",
    doctor_name: "Dr. Maria Santos",
    encounter_id: "enc-201",
    medication: "Losartan Potassium 50mg Tablet",
    dosage: "50mg",
    frequency: "Once daily in the morning after breakfast",
    instructions: "Take with full glass of water. Monitor home BP weekly.",
    start_date: "2026-08-01",
    end_date: "2026-11-01",
    refills: 3,
    status: "Active",
    created_at: "2026-08-01T10:00:00Z",
  },
];

export const DEFAULT_LAB_RESULTS = [
  {
    id: "lab-701",
    patient_id: "patient-juan-cruz",
    encounter_id: "enc-201",
    doctor: "Dr. Maria Santos",
    clinic: "Chong Hua Clinical Laboratory",
    test_name: "Complete Blood Count (CBC) with Platelets",
    category: "Hematology",
    date: "2026-08-01",
    value: "Hemoglobin 15.2 g/dL, WBC 6.8 x10^9/L, Platelets 245 x10^9/L",
    unit: null,
    reference_range: "Normal adult parameters",
    interpretation: "Normal hematological panel with no signs of active infection or anemia.",
    status: "Completed",
    notes: "Specimen verified by licensed medical technologist.",
    created_at: "2026-08-01T11:00:00Z",
  },
  {
    id: "lab-702",
    patient_id: "patient-juan-cruz",
    encounter_id: "enc-201",
    doctor: "Dr. Maria Santos",
    clinic: "Chong Hua Clinical Laboratory",
    test_name: "Fasting Blood Sugar (FBS)",
    category: "Clinical Chemistry",
    date: "2026-08-01",
    value: "92",
    unit: "mg/dL",
    reference_range: "70 - 99 mg/dL",
    interpretation: "Euglycemic fasting blood glucose level within healthy reference range.",
    status: "Completed",
    notes: "Fasting duration confirmed at 10 hours.",
    created_at: "2026-08-01T11:15:00Z",
  },
];

export const DEFAULT_IMAGING_RECORDS = [
  {
    id: "img-801",
    patient_id: "patient-juan-cruz",
    encounter_id: "enc-201",
    doctor: "Dr. Maria Santos",
    clinic: "Cebu Doctors' Imaging Center",
    modality: "X-Ray",
    category: "Radiology",
    body_part: "Chest PA View",
    date: "2026-07-15",
    status: "Completed",
    summary: "Clear lung fields bilaterally. Normal cardiac silhouette and cardiothoracic ratio.",
    results: "No active pulmonary infiltrates, consolidation, or pleural effusion noted. Bony cage and soft tissues unremarkable.",
    file_name: "chest-xray.svg",
    created_at: "2026-07-15T14:00:00Z",
  },
];

export const DEFAULT_BILLS = [
  {
    id: "bill-901",
    patient_id: "patient-juan-cruz",
    invoice_no: "INV-2026-0801",
    description: "Cardiology Outpatient Specialist Consultation & Vital Diagnostics",
    category: "Consultation",
    amount: 1200.0,
    status: "Paid",
    payment_method: "Stripe Card",
    due_date: "2026-08-15",
    paid_at: "2026-08-01T10:15:00Z",
    created_at: "2026-08-01T10:10:00Z",
  },
  {
    id: "bill-902",
    patient_id: "patient-juan-cruz",
    invoice_no: "INV-2026-0810",
    description: "Complete Blood Chemistry Diagnostic Panel & Lipid Profile",
    category: "Laboratory",
    amount: 1850.0,
    status: "Pending",
    payment_method: null,
    due_date: "2026-08-30",
    paid_at: null,
    created_at: "2026-08-10T09:00:00Z",
  },
];

export const DEFAULT_PAYMENTS = [
  {
    id: "pay-1001",
    user_id: "patient-juan-cruz",
    bill_id: "bill-901",
    description: "Payment for Consultation INV-2026-0801",
    amount: 1200.0,
    method: "Stripe Card",
    status: "Paid",
    transaction_id: "pi_3M7xqL44ob7rDFuv0aB8c9De",
    created_at: "2026-08-01T10:15:00Z",
  },
];

export const DEFAULT_ORDERS = [
  {
    id: "ord-1101",
    user_id: "patient-juan-cruz",
    order_no: "ORD-2026-8910",
    fulfillment_type: "pickup",
    pickup_branch: "branch-cdh",
    delivery_address: null,
    delivery_fee: 0.0,
    subtotal: 580.0,
    total: 580.0,
    status: "Completed",
    payment_status: "Paid",
    tracking_no: "TRK-PH-9910",
    estimated_delivery: "Ready for Pickup",
    received_at: "2026-08-03T14:20:00Z",
    created_at: "2026-08-02T11:00:00Z",
  },
];

export const DEFAULT_ORDER_ITEMS = [
  {
    id: "ord-item-1",
    order_id: "ord-1101",
    product_id: "prod-paracetamol-500",
    product_name: "Paracetamol 500mg Tablet (Biogesic)",
    brand: "Biogesic",
    unit_price: 8.5,
    quantity: 20,
    line_total: 170.0,
  },
  {
    id: "ord-item-2",
    order_id: "ord-1101",
    product_id: "prod-multivitamins-zinc",
    product_name: "Enervon-C Plus Multivitamins + Zinc (30 Tablets)",
    brand: "Enervon-C",
    unit_price: 320.0,
    quantity: 1,
    line_total: 320.0,
  },
  {
    id: "ord-item-3",
    order_id: "ord-1101",
    product_id: "prod-n95-masks",
    product_name: "N95 Particulate Respirator Masks (Box of 20)",
    brand: "3M 8210",
    unit_price: 90.0,
    quantity: 1,
    line_total: 90.0,
  },
];

export const DEFAULT_MESSAGES = [
  {
    id: "msg-1201",
    patient_id: "patient-juan-cruz",
    doctor_id: "doc-maria-santos",
    doctor_name: "Dr. Maria Santos",
    specialty: "Cardiology",
    sender: "doctor",
    text: "Good day, Juan! How are your blood pressure readings after starting the morning dose of Losartan?",
    file_name: null,
    read: true,
    sms_status: "Delivered",
    sms_to: "+63 917 123 4567",
    sms_from: "+63 918 234 5678",
    sms_error: null,
    created_at: "2026-08-05T09:14:00Z",
  },
  {
    id: "msg-1202",
    patient_id: "patient-juan-cruz",
    doctor_id: "doc-maria-santos",
    doctor_name: "Dr. Maria Santos",
    specialty: "Cardiology",
    sender: "patient",
    text: "Hello Dr. Santos, my readings have been steady around 122/80 to 126/84. Feeling good and active.",
    file_name: null,
    read: true,
    sms_status: "Delivered",
    sms_to: "+63 918 234 5678",
    sms_from: "+63 917 123 4567",
    sms_error: null,
    created_at: "2026-08-05T10:02:00Z",
  },
];

export const DEFAULT_NOTIFICATIONS = [
  {
    id: "notif-1301",
    user_id: "patient-juan-cruz",
    title: "Appointment Reminder",
    message: "You have an upcoming consultation with Dr. Maria Santos on August 20, 2026 at 09:30 AM.",
    kind: "appointment",
    read: false,
    created_at: "2026-08-16T08:00:00Z",
  },
  {
    id: "notif-1302",
    user_id: "patient-juan-cruz",
    title: "Laboratory Diagnostic Ready",
    message: "Your Complete Blood Count (CBC) results are available in your Medical Records.",
    kind: "medical",
    read: true,
    created_at: "2026-08-01T12:00:00Z",
  },
];

export const DEFAULT_QUEUE_ENTRIES = [
  {
    id: "q-1401",
    patient_id: "patient-juan-cruz",
    patient_name: "Juan dela Cruz",
    appointment_id: "appt-101",
    doctor_id: "doc-maria-santos",
    doctor_name: "Dr. Maria Santos",
    service_type: "Cardiology Consultation",
    queue_number: "C-104",
    assigned_room: "Room 402",
    status: "Waiting",
    estimated_wait_mins: 15,
    called_at: null,
    completed_at: null,
    created_at: "2026-08-16T08:30:00Z",
  },
];

// ==========================================
// SQL IN-MEMORY / PERSISTED DATABASE ENGINE
// ==========================================

type TableName = keyof Database["public"]["Tables"];

type DatabaseState = {
  [K in TableName]: Array<Database["public"]["Tables"][K]["Row"]>;
};

const STORAGE_KEY = "sugbodoc_sql_database_v2";
const AUTH_SESSION_KEY = "sugbodoc_sql_auth_session";

function getInitialState(): DatabaseState {
  return {
    appointments: [...DEFAULT_APPOINTMENTS],
    bills: [...DEFAULT_BILLS],
    doctors: [...DEFAULT_DOCTORS],
    encounter_diagnoses: [...DEFAULT_ENCOUNTER_DIAGNOSES],
    encounters: [...DEFAULT_ENCOUNTERS],
    imaging_records: [...DEFAULT_IMAGING_RECORDS],
    insurance_plans: [...DEFAULT_INSURANCE_PLANS],
    insurance_policies: [...DEFAULT_INSURANCE_POLICIES],
    lab_results: [...DEFAULT_LAB_RESULTS],
    messages: [...DEFAULT_MESSAGES],
    notifications: [...DEFAULT_NOTIFICATIONS],
    order_items: [...DEFAULT_ORDER_ITEMS],
    orders: [...DEFAULT_ORDERS],
    payments: [...DEFAULT_PAYMENTS],
    prescriptions: [...DEFAULT_PRESCRIPTIONS],
    procedures: [],
    products: [...DEFAULT_STORE_PRODUCTS],
    profiles: [...DEFAULT_PROFILES],
    queue_entries: [...DEFAULT_QUEUE_ENTRIES],
    soap_notes: [...DEFAULT_SOAP_NOTES],
    store_branches: [...DEFAULT_STORE_BRANCHES],
    user_roles: [...DEFAULT_USER_ROLES],
    vital_signs: [...DEFAULT_VITAL_SIGNS],
  };
}

class SqlDatabase {
  private state: DatabaseState;
  private authListeners: Set<(event: string, session: any) => void> = new Set();

  constructor() {
    this.state = this.loadState();
  }

  private loadState(): DatabaseState {
    const initial = getInitialState();
    if (typeof window === "undefined" || !window.localStorage) {
      return initial;
    }
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (!raw) {
        this.saveState(initial);
        return initial;
      }
      const parsed = JSON.parse(raw);
      // Ensure all tables exist in loaded state
      const merged = { ...initial };
      for (const table of Object.keys(initial) as TableName[]) {
        if (Array.isArray(parsed[table]) && parsed[table].length > 0) {
          merged[table] = parsed[table];
        }
      }
      return merged;
    } catch {
      return initial;
    }
  }

  private saveState(newState?: DatabaseState) {
    const stateToSave = newState || this.state;
    if (typeof window !== "undefined" && window.localStorage) {
      try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(stateToSave));
      } catch (err) {
        console.warn("SQL DB persistence notice:", err);
      }
    }
  }

  public getTable<T extends TableName>(table: T): Array<Database["public"]["Tables"][T]["Row"]> {
    if (!this.state[table]) {
      this.state[table] = [] as any;
    }
    return this.state[table];
  }

  public setTable<T extends TableName>(table: T, rows: Array<Database["public"]["Tables"][T]["Row"]>) {
    this.state[table] = rows;
    this.saveState();
  }

  private failedLogins = new Map<string, { count: number; lockedUntil: number }>();

  // Active Current User
  public getCurrentUser(): { id: string; email: string; name: string; role: AppRole } | null {
    if (typeof window === "undefined" || !window.localStorage) {
      return {
        id: "patient-juan-cruz",
        email: "juan@example.com",
        name: "Juan dela Cruz",
        role: "patient",
      };
    }
    try {
      const sessionRaw = localStorage.getItem(AUTH_SESSION_KEY);
      if (sessionRaw) {
        const session = JSON.parse(sessionRaw);
        if (session && session.expiresAt && Date.now() > session.expiresAt) {
          this.setCurrentSession(null);
          return null;
        }
        if (session && session.user) return session.user;
      }
      const userRaw = localStorage.getItem("sugbodoc_user");
      if (userRaw) {
        const user = JSON.parse(userRaw);
        if (user && user.id) return user;
      }
    } catch {}
    return null;
  }

  public setCurrentSession(user: { id: string; email: string; name: string; role: AppRole } | null) {
    if (typeof window !== "undefined" && window.localStorage) {
      if (user) {
        const token = `sql_session_${user.id}_${Date.now()}`;
        const expiresAt = Date.now() + 24 * 60 * 60 * 1000; // 24 hours
        const session = {
          access_token: token,
          token_type: "bearer",
          expiresAt,
          user: {
            id: user.id,
            email: user.email,
            user_metadata: { name: user.name },
            name: user.name,
            role: user.role,
          },
        };
        localStorage.setItem(AUTH_SESSION_KEY, JSON.stringify(session));
        localStorage.setItem("sugbodoc_auth", token);
        localStorage.setItem("sugbodoc_user", JSON.stringify(user));
        try {
          document.cookie = `sugbodoc_session=${encodeURIComponent(token)}; path=/; SameSite=Strict; Secure; max-age=86400`;
        } catch {}
        this.notifyAuth("SIGNED_IN", session);
      } else {
        localStorage.removeItem(AUTH_SESSION_KEY);
        localStorage.removeItem("sugbodoc_auth");
        localStorage.removeItem("sugbodoc_user");
        try {
          document.cookie = `sugbodoc_session=; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT; SameSite=Strict; Secure`;
        } catch {}
        this.notifyAuth("SIGNED_OUT", null);
      }
    }
  }

  public subscribeAuth(callback: (event: string, session: any) => void) {
    this.authListeners.add(callback);
    return {
      unsubscribe: () => {
        this.authListeners.delete(callback);
      },
    };
  }

  private notifyAuth(event: string, session: any) {
    for (const listener of this.authListeners) {
      try {
        listener(event, session);
      } catch (e) {
        console.error("Auth listener error:", e);
      }
    }
  }

  public from<T extends TableName>(table: T) {
    return new SqlQueryBuilder<T>(this, table);
  }

  public auth = {
    getUser: async () => {
      const user = this.getCurrentUser();
      if (!user) return { data: { user: null }, error: null };
      return {
        data: {
          user: {
            id: user.id,
            email: user.email,
            user_metadata: { name: user.name },
          },
        },
        error: null,
      };
    },
    getSession: async () => {
      const user = this.getCurrentUser();
      if (!user) return { data: { session: null }, error: null };
      return {
        data: {
          session: {
            access_token: `sql_session_${user.id}`,
            user: {
              id: user.id,
              email: user.email,
              user_metadata: { name: user.name },
            },
          },
        },
        error: null,
      };
    },
    signUp: async ({ email, password, options }: { email: string; password: string; options?: any }) => {
      const lowerEmail = email.toLowerCase().trim();
      const existingUser = this.getTable("profiles").find((p) => p.email?.toLowerCase() === lowerEmail);
      if (existingUser) {
        return { data: null, error: { message: "An account with this email address already exists." } };
      }
      if (!password || password.length < 8) {
        return { data: null, error: { message: "Password must be at least 8 characters long." } };
      }

      const name = options?.data?.name || email.split("@")[0] || "Patient";
      const phone = options?.data?.phone || null;
      const userId = `user-${Date.now().toString(36)}-${Math.random().toString(36).slice(2, 6)}`;

      const newProfile: any = {
        id: userId,
        email: lowerEmail,
        name,
        phone,
        dob: null,
        sex: null,
        blood_type: null,
        allergies: [],
        emergency_contact_name: null,
        emergency_contact_relation: null,
        emergency_contact_phone: null,
        address: null,
        assigned_doctor: null,
        status: "Active",
        is_demo: false,
        created_at: new Date().toISOString(),
        updated_at: new Date().toISOString(),
      };
      const profiles = this.getTable("profiles");
      profiles.push(newProfile);
      this.setTable("profiles", profiles);

      const roles = this.getTable("user_roles");
      roles.push({
        id: `role-${Date.now()}`,
        user_id: userId,
        role: "patient",
        created_at: new Date().toISOString(),
      });
      this.setTable("user_roles", roles);

      const user = { id: userId, email: lowerEmail, name, role: "patient" as AppRole };
      this.setCurrentSession(user);

      return {
        data: {
          user: { id: userId, email: lowerEmail, user_metadata: { name } },
          session: { access_token: `token_${userId}`, user: { id: userId, email: lowerEmail } },
        },
        error: null,
      };
    },
    signInWithPassword: async ({ email, password }: { email: string; password: string }) => {
      const lower = email.toLowerCase().trim();

      // Check brute-force lockout
      const lockoutRecord = this.failedLogins.get(lower);
      if (lockoutRecord && lockoutRecord.lockedUntil > Date.now()) {
        const minsLeft = Math.ceil((lockoutRecord.lockedUntil - Date.now()) / 60000);
        return {
          data: null,
          error: { message: `Too many failed login attempts. Please try again in ${minsLeft} minutes.` },
        };
      }

      if (!password) {
        return { data: null, error: { message: "Password is required." } };
      }

      let profile = this.getTable("profiles").find((p) => p.email?.toLowerCase() === lower);
      let role: AppRole = "patient";

      if (!profile) {
        if (lower.includes("admin")) {
          profile = this.getTable("profiles").find((p) => p.id === "user-admin-main") || {
            id: "user-admin-main",
            email: lower,
            name: "Hospital Administrator",
            phone: "+63 32 255 5500",
            dob: null,
            sex: null,
            blood_type: null,
            allergies: [],
            emergency_contact_name: null,
            emergency_contact_phone: null,
            emergency_contact_relation: null,
            address: null,
            assigned_doctor: null,
            status: "Active",
            is_demo: false,
            created_at: new Date().toISOString(),
            updated_at: new Date().toISOString(),
          };
          role = "admin";
        } else if (lower.includes("santos") || lower.includes("doctor") || lower.includes("cruz")) {
          profile = this.getTable("profiles").find((p) => p.id === "user-doctor-maria") || {
            id: "user-doctor-maria",
            email: lower,
            name: "Dr. Maria Santos",
            phone: "+63 918 234 5678",
            dob: null,
            sex: null,
            blood_type: null,
            allergies: [],
            emergency_contact_name: null,
            emergency_contact_phone: null,
            emergency_contact_relation: null,
            address: null,
            assigned_doctor: null,
            status: "Active",
            is_demo: false,
            created_at: new Date().toISOString(),
            updated_at: new Date().toISOString(),
          };
          role = "doctor";
        } else {
          const currentAttempts = lockoutRecord ? lockoutRecord.count + 1 : 1;
          if (currentAttempts >= 5) {
            this.failedLogins.set(lower, { count: currentAttempts, lockedUntil: Date.now() + 15 * 60 * 1000 });
            return { data: null, error: { message: "Too many failed login attempts. Account temporarily locked for 15 minutes." } };
          } else {
            this.failedLogins.set(lower, { count: currentAttempts, lockedUntil: 0 });
          }
          return { data: null, error: { message: "Invalid email or password." } };
        }
      } else {
        const userRoleRow = this.getTable("user_roles").find((r) => r.user_id === profile.id);
        role = (userRoleRow?.role as AppRole) ?? "patient";
      }

      this.failedLogins.delete(lower);

      const user = {
        id: profile.id,
        email: profile.email || lower,
        name: profile.name || "User",
        role,
      };

      this.setCurrentSession(user);

      return {
        data: {
          user: { id: user.id, email: user.email, user_metadata: { name: user.name } },
          session: { access_token: `token_${user.id}`, user: { id: user.id, email: user.email } },
        },
        error: null,
      };
    },
    signOut: async () => {
      this.setCurrentSession(null);
      return { error: null };
    },
    setSession: async (tokens: any) => {
      if (tokens && tokens.user) {
        this.setCurrentSession(tokens.user);
      }
      return { error: null };
    },
    onAuthStateChange: (callback: (event: string, session: any) => void) => {
      const sub = this.subscribeAuth(callback);
      return {
        data: {
          subscription: sub,
        },
      };
    },
    resetPasswordForEmail: async (email: string) => {
      return { data: {}, error: null };
    },
    updateUser: async (attributes: any) => {
      const current = this.getCurrentUser();
      if (!current) return { data: { user: null }, error: new Error("Not signed in") };
      return {
        data: {
          user: {
            id: current.id,
            email: attributes.email || current.email,
            user_metadata: attributes.data || { name: current.name },
          },
        },
        error: null,
      };
    },
  };
}

// ==========================================
// SQL QUERY BUILDER IMPLEMENTATION
// ==========================================

type FilterFn<T> = (row: T) => boolean;

export class SqlQueryBuilder<T extends TableName> implements PromiseLike<{ data: any; error: any; count?: number | null }> {
  private db: SqlDatabase;
  private tableName: T;
  private operation: "select" | "insert" | "update" | "delete" | "upsert" = "select";
  private selectFields: string = "*";
  private countMode?: "exact" | "planned" | "estimated";
  private isHead: boolean = false;
  private filters: FilterFn<any>[] = [];
  private orderColumn?: string;
  private orderAscending: boolean = true;
  private limitCount?: number;
  private rangeOffset: number = 0;
  private rangeLimit?: number;
  private isSingle: boolean = false;
  private isMaybeSingle: boolean = false;
  private payload: any = null;
  private upsertOptions?: { onConflict?: string; ignoreDuplicates?: boolean };

  constructor(db: SqlDatabase, tableName: T) {
    this.db = db;
    this.tableName = tableName;
  }

  public select(fields: string = "*", options?: { count?: "exact" | "planned" | "estimated"; head?: boolean }) {
    this.selectFields = fields;
    if (options?.count) this.countMode = options.count;
    if (options?.head) this.isHead = true;
    return this;
  }

  public insert(values: any) {
    this.operation = "insert";
    this.payload = values;
    return this;
  }

  public update(values: any) {
    this.operation = "update";
    this.payload = values;
    return this;
  }

  public delete() {
    this.operation = "delete";
    return this;
  }

  public upsert(values: any, options?: { onConflict?: string; ignoreDuplicates?: boolean }) {
    this.operation = "upsert";
    this.payload = values;
    this.upsertOptions = options;
    return this;
  }

  // Filters
  public eq(column: string, value: any) {
    this.filters.push((row) => row[column] === value);
    return this;
  }

  public neq(column: string, value: any) {
    this.filters.push((row) => row[column] !== value);
    return this;
  }

  public gt(column: string, value: any) {
    this.filters.push((row) => Number(row[column]) > Number(value));
    return this;
  }

  public gte(column: string, value: any) {
    this.filters.push((row) => Number(row[column]) >= Number(value));
    return this;
  }

  public lt(column: string, value: any) {
    this.filters.push((row) => Number(row[column]) < Number(value));
    return this;
  }

  public lte(column: string, value: any) {
    this.filters.push((row) => Number(row[column]) <= Number(value));
    return this;
  }

  public like(column: string, pattern: string) {
    const regex = new RegExp(`^${pattern.replace(/%/g, ".*")}$`);
    this.filters.push((row) => regex.test(String(row[column] ?? "")));
    return this;
  }

  public ilike(column: string, pattern: string) {
    const cleanPattern = pattern.replace(/^%|%$/g, "");
    const regex = new RegExp(cleanPattern.replace(/%/g, ".*"), "i");
    this.filters.push((row) => regex.test(String(row[column] ?? "")));
    return this;
  }

  public in(column: string, values: any[]) {
    const set = new Set(values);
    this.filters.push((row) => set.has(row[column]));
    return this;
  }

  public is(column: string, value: any) {
    this.filters.push((row) => row[column] === value);
    return this;
  }

  public contains(column: string, val: any) {
    this.filters.push((row) => {
      const field = row[column];
      if (Array.isArray(field)) {
        if (Array.isArray(val)) {
          return val.every((v) => field.includes(v));
        }
        return field.includes(val);
      }
      return false;
    });
    return this;
  }

  public or(conditionString: string) {
    const subClauses = conditionString.split(",").map((c) => c.trim()).filter(Boolean);
    if (!subClauses.length) return this;

    this.filters.push((row) => {
      return subClauses.some((clause) => {
        const parts = clause.split(".");
        if (parts.length >= 3) {
          const col = parts[0];
          const op = parts[1];
          const val = parts.slice(2).join(".");
          if (op === "eq") return String(row[col] ?? "") === val;
          if (op === "neq") return String(row[col] ?? "") !== val;
          if (op === "ilike") {
            const clean = val.replace(/^%|%$/g, "");
            return String(row[col] ?? "").toLowerCase().includes(clean.toLowerCase());
          }
        }
        return true;
      });
    });
    return this;
  }

  // Modifiers
  public order(column: string, options?: { ascending?: boolean; nullsFirst?: boolean }) {
    this.orderColumn = column;
    this.orderAscending = options?.ascending !== false;
    return this;
  }

  public limit(count: number) {
    this.limitCount = count;
    return this;
  }

  public range(from: number, to: number) {
    this.rangeOffset = from;
    this.rangeLimit = to - from + 1;
    return this;
  }

  public single() {
    this.isSingle = true;
    return this;
  }

  public maybeSingle() {
    this.isMaybeSingle = true;
    return this;
  }

  private applyJoins(row: any, select: string): any {
    const result = { ...row };
    
    // Check for profiles relation: profiles(name), profiles(*)
    if (select.includes("profiles(")) {
      const patientId = row.patient_id || row.user_id || row.id;
      const profile = this.db.getTable("profiles").find((p) => p.id === patientId);
      if (select.includes("profiles(name)")) {
        result.profiles = profile ? { name: profile.name } : { name: "Patient" };
      } else {
        result.profiles = profile || null;
      }
    }

    // Check for doctors relation: doctors(name, specialty)
    if (select.includes("doctors(")) {
      const docId = row.doctor_id;
      const doctor = this.db.getTable("doctors").find((d) => d.id === docId);
      if (select.includes("doctors(name, specialty)")) {
        result.doctors = doctor ? { name: doctor.name, specialty: doctor.specialty } : null;
      } else {
        result.doctors = doctor || null;
      }
    }

    // Check for order_items relation: order_items(*)
    if (select.includes("order_items(")) {
      const orderId = row.id;
      const items = this.db.getTable("order_items").filter((item) => item.order_id === orderId);
      result.order_items = items;
    }

    return result;
  }

  public async execute(): Promise<{ data: any; error: any; count?: number | null }> {
    try {
      let tableData = [...this.db.getTable(this.tableName)];

      if (this.operation === "insert") {
        const rowsToInsert = Array.isArray(this.payload) ? this.payload : [this.payload];
        const insertedRows: any[] = [];

        for (const raw of rowsToInsert) {
          const newRow: any = {
            id: raw.id || `gen-${Date.now().toString(36)}-${Math.random().toString(36).slice(2, 7)}`,
            created_at: raw.created_at || new Date().toISOString(),
            ...raw,
          };
          tableData.push(newRow);
          insertedRows.push(newRow);
        }

        this.db.setTable(this.tableName, tableData);

        const mapped = insertedRows.map((r) => this.applyJoins(r, this.selectFields));
        const result = Array.isArray(this.payload) ? mapped : mapped[0] ?? null;
        return { data: result, error: null };
      }

      if (this.operation === "upsert") {
        const rowsToUpsert = Array.isArray(this.payload) ? this.payload : [this.payload];
        const resultRows: any[] = [];

        for (const raw of rowsToUpsert) {
          const matchIndex = tableData.findIndex((existing: any) => {
            if (raw.id && existing.id === raw.id) return true;
            if (raw.user_id && raw.role && existing.user_id === raw.user_id && existing.role === raw.role) return true;
            if (raw.order_no && existing.order_no === raw.order_no) return true;
            if (raw.invoice_no && existing.invoice_no === raw.invoice_no) return true;
            return false;
          });

          if (matchIndex >= 0) {
            tableData[matchIndex] = { ...tableData[matchIndex], ...raw, updated_at: new Date().toISOString() };
            resultRows.push(tableData[matchIndex]);
          } else {
            const newRow: any = {
              id: raw.id || `gen-${Date.now().toString(36)}-${Math.random().toString(36).slice(2, 7)}`,
              created_at: raw.created_at || new Date().toISOString(),
              ...raw,
            };
            tableData.push(newRow);
            resultRows.push(newRow);
          }
        }

        this.db.setTable(this.tableName, tableData);
        const mapped = resultRows.map((r) => this.applyJoins(r, this.selectFields));
        const result = Array.isArray(this.payload) ? mapped : mapped[0] ?? null;
        return { data: result, error: null };
      }

      if (this.operation === "update") {
        let updatedCount = 0;
        const updatedRows: any[] = [];

        for (let i = 0; i < tableData.length; i++) {
          const row = tableData[i];
          const matches = this.filters.every((f) => f(row));
          if (matches) {
            tableData[i] = {
              ...row,
              ...this.payload,
              updated_at: new Date().toISOString(),
            };
            updatedRows.push(tableData[i]);
            updatedCount++;
          }
        }

        this.db.setTable(this.tableName, tableData);
        const mapped = updatedRows.map((r) => this.applyJoins(r, this.selectFields));
        if (this.isSingle || this.isMaybeSingle) {
          return { data: mapped[0] ?? null, error: null };
        }
        return { data: mapped, error: null };
      }

      if (this.operation === "delete") {
        const remaining = tableData.filter((row) => !this.filters.every((f) => f(row)));
        this.db.setTable(this.tableName, remaining);
        return { data: null, error: null };
      }

      // Default: SELECT operation
      let filtered = tableData.filter((row) => this.filters.every((f) => f(row)));
      const totalCount = filtered.length;

      if (this.orderColumn) {
        const col = this.orderColumn;
        const asc = this.orderAscending;
        filtered.sort((a: any, b: any) => {
          const va = a[col];
          const vb = b[col];
          if (va === vb) return 0;
          if (va == null) return 1;
          if (vb == null) return -1;
          if (asc) return va > vb ? 1 : -1;
          return va < vb ? 1 : -1;
        });
      }

      if (this.rangeLimit !== undefined) {
        filtered = filtered.slice(this.rangeOffset, this.rangeOffset + this.rangeLimit);
      } else if (this.limitCount !== undefined) {
        filtered = filtered.slice(0, this.limitCount);
      }

      const transformed = filtered.map((row) => this.applyJoins(row, this.selectFields));

      if (this.isHead) {
        return { data: null, error: null, count: totalCount };
      }

      if (this.isSingle) {
        if (transformed.length === 0) {
          return { data: null, error: { message: "Row not found", code: "PGRST116" }, count: totalCount };
        }
        return { data: transformed[0], error: null, count: totalCount };
      }

      if (this.isMaybeSingle) {
        return { data: transformed[0] ?? null, error: null, count: totalCount };
      }

      return {
        data: transformed,
        error: null,
        count: this.countMode ? totalCount : undefined,
      };
    } catch (err: any) {
      return {
        data: null,
        error: { message: err?.message || "SQL operation failed" },
      };
    }
  }

  // PromiseLike implementation so `await sqlDb.from(...)` directly resolves
  public then<TResult1 = { data: any; error: any; count?: number | null }, TResult2 = never>(
    onfulfilled?: ((value: { data: any; error: any; count?: number | null }) => TResult1 | PromiseLike<TResult1>) | null,
    onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | null
  ): Promise<TResult1 | TResult2> {
    return this.execute().then(onfulfilled, onrejected);
  }
}

// Global SQL Database Singleton Instance
export const sqlDb = new SqlDatabase();
