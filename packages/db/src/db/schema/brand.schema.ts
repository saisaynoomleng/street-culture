import * as t from 'drizzle-orm/pg-core';
import { timestamp } from './schema-helper';
import { relations } from 'drizzle-orm';
import { ProductsTable } from './products.schema';

export const BrandsTable = t.pgTable('brands', {
  id: t.uuid('id').defaultRandom().primaryKey(),
  name: t.varchar('name', { length: 255 }).notNull(),
  imageUrl: t.varchar('image_url', { length: 255 }).notNull(),
  ...timestamp,
});

export const BrandsTableRelations = relations(BrandsTable, ({ many }) => ({
  products: many(ProductsTable),
}));
