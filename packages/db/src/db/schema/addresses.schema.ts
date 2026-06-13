import * as t from 'drizzle-orm/pg-core';
import { UsersTable } from './users.schema';
import { addressType } from './schema-helper';
import { timestamp } from 'drizzle-orm/gel-core';
import { relations } from 'drizzle-orm';
import { InvoicesTable } from './invoices.schema';

export const AddressesTable = t.pgTable(
  'addresses',
  {
    id: t.uuid('id').primaryKey().defaultRandom(),
    userId: t
      .uuid('user_id')
      .references(() => UsersTable.id, { onDelete: 'cascade' })
      .notNull(),
    address1: t.varchar('address_1', { length: 255 }).notNull(),
    address2: t.varchar('address_2', { length: 255 }),
    city: t.varchar('city', { length: 255 }).notNull(),
    state: t.varchar('state', { length: 255 }).notNull(),
    zip: t.varchar('zip', { length: 50 }).notNull(),
    country: t.varchar('country', { length: 100 }).notNull(),
    isDefault: t.boolean('is_default').notNull().default(false),
    type: addressType('type').notNull().default('shipping'),
    ...timestamp,
  },
  (table) => [t.index('user_address_idx').on(table.userId, table.id)],
);

export const AddressesTableRelations = relations(
  AddressesTable,
  ({ one, many }) => ({
    user: one(UsersTable, {
      fields: [AddressesTable.userId],
      references: [UsersTable.id],
    }),
    orders: many(InvoicesTable),
  }),
);
