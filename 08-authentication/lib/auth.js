import { BetterSqlite3Adapter } from "@lucia-auth/adapter-sqlite";
import { Lucia } from "lucia";

import db from "./db";

const adapter = new BetterSqlite3Adapter(db, {
  user: "users", // table in which the users are stored.
  session: "sessions", // table in which to store login session information.
});

const lucia = new Lucia(adapter, {
  sessionCookie: {
    expires: false,
    attributes: {
      secure: process.env.NODE_ENV === "production",
    },
  },
});
