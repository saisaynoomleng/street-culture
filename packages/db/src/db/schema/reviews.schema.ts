import * as t from 'drizzle-orm/pg-core';
import { ProductsTable } from './products.schema';
import { UsersTable } from './users.schema';
import { reviewStatus, timestamp } from './schema-helper';
import { relations, sql } from 'drizzle-orm';

export const ReviewsTable = t.pgTable(
  'reviews',
  {
    id: t.uuid('id').defaultRandom().primaryKey(),
    productId: t
      .uuid('product_id')
      .references(() => ProductsTable.id, { onDelete: 'cascade' })
      .notNull(),
    userId: t
      .uuid('user_id')
      .references(() => UsersTable.id, { onDelete: 'cascade' })
      .notNull(),
    title: t.varchar('title', { length: 255 }).notNull(),
    rating: t.integer('rating').notNull(),
    body: t.text('body').notNull(),
    imageUrl: t.varchar('image_url', { length: 255 }),
    status: reviewStatus('status').notNull().default('active'),
    ...timestamp,
  },
  (table) => [
    t.check('rating_check', sql`${table.rating} BETWEEN 1 AND 5`),
    t.uniqueIndex('user_product_idx').on(table.userId, table.productId),
  ],
);

export const ReviewsTableRelations = relations(ReviewsTable, ({ one }) => ({
  user: one(UsersTable, {
    fields: [ReviewsTable.userId],
    references: [UsersTable.id],
  }),
  product: one(ProductsTable, {
    fields: [ReviewsTable.productId],
    references: [ProductsTable.id],
  }),
}));
