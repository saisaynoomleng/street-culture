import * as t from 'drizzle-orm/pg-core';
import { ProductVariantsTable } from './product-variants.schema';
import { InvoicesTable } from './invoices.schema';
import { timestamp } from './schema-helper';
import { relations, sql } from 'drizzle-orm';

export const InvoiceLinesTable = t.pgTable(
  'invoice_lines',
  {
    id: t.uuid('id').primaryKey().defaultRandom(),
    productVariantId: t
      .uuid('product_variant_id')
      .references(() => ProductVariantsTable.id, { onDelete: 'set null' }),
    quantity: t.integer('quantity').notNull().default(1),
    priceSnapshot: t.integer('price_snapshot').notNull(),
    totalSnapshot: t.integer('total_snapshot').notNull(),
    invoiceId: t
      .uuid('invoice_id')
      .references(() => InvoicesTable.id, { onDelete: 'cascade' })
      .notNull(),
    ...timestamp,
  },
  (table) => [
    t.check('price_check', sql`${table.priceSnapshot} > 0`),
    t.check('total_check', sql`${table.totalSnapshot} > 0`),
  ],
);

export const InvoiceLinesTableRelations = relations(
  InvoiceLinesTable,
  ({ one }) => ({
    productVariant: one(ProductVariantsTable, {
      fields: [InvoiceLinesTable.productVariantId],
      references: [ProductVariantsTable.id],
    }),
    invoice: one(InvoicesTable, {
      fields: [InvoiceLinesTable.invoiceId],
      references: [InvoicesTable.id],
    }),
  }),
);
