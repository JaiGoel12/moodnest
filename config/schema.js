import { integer, pgTable, varchar, serial } from "drizzle-orm/pg-core";

export const usersTable = pgTable("users", {
  id: integer("id").primaryKey(),
  name: varchar("name").notNull(),
  email: varchar("email").notNull(),
  imageurl: varchar("imageUrl").notNull(),
  credits: integer("credits").default(3),
});
