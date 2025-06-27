import { date, integer, pgTable, varchar } from "drizzle-orm/pg-core";

export const urlsTable = pgTable("urls", {
  id: integer().primaryKey().generatedAlwaysAsIdentity(),
  originalUrl: varchar({ length: 2048 }).notNull().unique(),
  shortenedUrlPathname: varchar({ length: 255 }).notNull().unique(),
  createdAt: date().notNull().defaultNow(),
  updatedAt: date().notNull().defaultNow(),
});
