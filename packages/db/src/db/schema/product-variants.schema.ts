import * as t from 'drizzle-orm/pg-core';
import { ProductsTable } from './products.schema';
import { productSizes, productVariantStatus, timestamp } from './schema-helper';
import { relations, sql } from 'drizzle-orm';
import { InvoiceLinesTable } from './invoice-lines.schema';
import { StoreInventoriesTable } from './store-inventories.schema';

export const ProductVariantsTable = t.pgTable(
  'product_variants',
  {
    id: t.uuid('id').defaultRandom().primaryKey(),
    name: t.varchar('name', { length: 255 }).notNull(),
    productId: t
      .uuid('product_id')
      .notNull()
      .references(() => ProductsTable.id, { onDelete: 'cascade' }),
    sku: t.varchar('sku', { length: 255 }).notNull(),
    size: productSizes('size').notNull().default('s'),
    priceUsdCents: t.integer('price_usd_cents').notNull(),
    priceKrw: t.integer('price_krw').notNull(),
    status: productVariantStatus('status').notNull().default('draft'),
    ...timestamp,
  },
  (table) => [
    t.check('price_usd_check', sql`${table.priceUsdCents} > 0`),
    t.check('price_krw_check', sql`${table.priceKrw} > 0`),
  ],
);

export const ProductVariantsTableRelations = relations(
  ProductVariantsTable,
  ({ one, many }) => ({
    product: one(ProductsTable, {
      fields: [ProductVariantsTable.productId],
      references: [ProductsTable.id],
    }),
    invoiceLines: many(InvoiceLinesTable),
    inventories: many(StoreInventoriesTable),
  }),
);
