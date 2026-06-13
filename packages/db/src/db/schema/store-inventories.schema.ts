import * as t from 'drizzle-orm/pg-core';
import { ProductVariantsTable } from './product-variants.schema';
import { StoresTable } from './stores.schema';
import { timestamp } from './schema-helper';
import { relations, sql } from 'drizzle-orm';

export const StoreInventoriesTable = t.pgTable(
  'store_inventories',
  {
    id: t.uuid('id').primaryKey().defaultRandom(),
    productVariantId: t
      .uuid('product_variant_id')
      .references(() => ProductVariantsTable.id, { onDelete: 'cascade' })
      .notNull(),
    storeId: t
      .uuid('store_id')
      .references(() => StoresTable.id, { onDelete: 'cascade' })
      .notNull(),
    numberInStocks: t.integer('number_in_stocks').notNull(),
    ...timestamp,
  },
  (table) => [t.check('stock_check', sql`${table.numberInStocks} >= 0`)],
);

export const StoreInventoriesTableRelations = relations(
  StoreInventoriesTable,
  ({ one }) => ({
    productVariant: one(ProductVariantsTable, {
      fields: [StoreInventoriesTable.productVariantId],
      references: [ProductVariantsTable.id],
    }),
    store: one(StoresTable, {
      fields: [StoreInventoriesTable.storeId],
      references: [StoresTable.id],
    }),
  }),
);
