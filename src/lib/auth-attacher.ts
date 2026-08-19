import { createMiddleware } from "@tanstack/react-start";
import { sqlDb } from "./db/sql-db";

export const attachSqlAuth = createMiddleware({ type: "function" }).client(
  async ({ next }) => {
    const { data } = await sqlDb.auth.getSession();
    const token = data.session?.access_token;
    return next({
      headers: token ? { Authorization: `Bearer ${token}` } : {},
    });
  },
);
