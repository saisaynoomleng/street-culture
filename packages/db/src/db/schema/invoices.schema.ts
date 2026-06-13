import * as t from 'drizzle-orm/pg-core';
import { UsersTable } from './users.schema';
import { AddressesTable } from './addresses.schema';
import { invoiceStatus, timestamp } from './schema-helper';
import { relations, sql } from 'drizzle-orm';
import { InvoiceLinesTable } from './invoice-lines.schema';

export const InvoicesTable = t.pgTable(
  'invoices',
  {
    id: t.uuid('id').primaryKey().defaultRandom(),
    userId: t
      .uuid('user_id')
      .references(() => UsersTable.id, { onDelete: 'set null' }),
    shippingId: t
      .uuid('shipping_id')
      .references(() => AddressesTable.id, { onDelete: 'set null' }),
    shippingAddressSnapshot: t
      .varchar('shipping_address_snapshot', {
        length: 255,
      })
      .notNull(),
    stripePaymentIntentId: t
      .varchar('stripe_payment_intent_id', { length: 255 })
      .unique(),
    stripeCheckoutSessionId: t
      .varchar('stripe_checkout_session_id', { length: 255 })
      .unique(),
    currency: t.varchar('currency').notNull(),
    totalSnapshot: t.integer('total_snapshot').notNull(),
    trackingNumber: t.varchar('trackgin_number').notNull(),
    status: invoiceStatus('status').notNull().default('pending'),
    ...timestamp,
  },
  (table) => [t.check('total_check', sql`${table.totalSnapshot} > 0`)],
);

export const InvoicesTableRelations = relations(
  InvoicesTable,
  ({ one, many }) => ({
    user: one(UsersTable, {
      fields: [InvoicesTable.userId],
      references: [UsersTable.id],
    }),
    invoiceLines: many(InvoiceLinesTable),
    shippingAddress: one(AddressesTable, {
      fields: [InvoicesTable.shippingId],
      references: [AddressesTable.id],
    }),
  }),
);
