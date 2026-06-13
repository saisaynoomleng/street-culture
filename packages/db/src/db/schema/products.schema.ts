import * as t from 'drizzle-orm/pg-core';
import { BrandsTable } from './brand.schema';
import { ProductCategoriesTable } from './product-categories.schema';
import { productStatus, timestamp } from './schema-helper';
import { relations } from 'drizzle-orm';
import { ProductVariantsTable } from './product-variants.schema';
import { ReviewsTable } from './reviews.schema';
import { WishlistsTable } from './wishlists.schema';

export const ProductsTable = t.pgTable('products', {
  id: t.uuid('id').defaultRandom().primaryKey(),
  nameInEn: t.varchar('name_in_en', { length: 255 }).notNull(),
  nameInKr: t.varchar('name_in_kr', { length: 255 }).notNull(),
  brandId: t
    .uuid('brand_id')
    .references(() => BrandsTable.id, { onDelete: 'set null' }),
  categoryId: t
    .uuid('category_id')
    .references(() => ProductCategoriesTable.id, { onDelete: 'set null' }),
  isFeatured: t.boolean('is_featured').default(false).notNull(),
  status: productStatus('status').notNull().default('published'),
  publishedAt: t.timestamp('published_at', { withTimezone: true }).notNull(),
  ...timestamp,
});

export const ProductsTableRelations = relations(
  ProductsTable,
  ({ one, many }) => ({
    brand: one(BrandsTable, {
      fields: [ProductsTable.brandId],
      references: [BrandsTable.id],
    }),
    category: one(ProductCategoriesTable, {
      fields: [ProductsTable.categoryId],
      references: [ProductCategoriesTable.id],
    }),
    variants: many(ProductVariantsTable),
    reviews: many(ReviewsTable),
    wishlists: many(WishlistsTable),
  }),
);
