import * as t from 'drizzle-orm/pg-core';
import { timestamp } from './schema-helper';
import { relations } from 'drizzle-orm';
import { ProductsTable } from './products.schema';

export const ProductCategoriesTable = t.pgTable('product_categories', {
  id: t.uuid('id').primaryKey().defaultRandom(),
  name: t.varchar('name', { length: 255 }).notNull(),
  imageUrl: t.varchar('image_url', { length: 255 }).notNull(),
  ...timestamp,
});

export const ProductCategoriesTableRelations = relations(
  ProductCategoriesTable,
  ({ many }) => ({
    products: many(ProductsTable),
  }),
);
