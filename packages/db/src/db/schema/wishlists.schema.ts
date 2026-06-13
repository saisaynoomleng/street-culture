import * as t from 'drizzle-orm/pg-core';
import { UsersTable } from './users.schema';
import { ProductsTable } from './products.schema';
import { timestamp } from './schema-helper';
import { relations } from 'drizzle-orm';

export const WishlistsTable = t.pgTable('wishlists', {
  id: t.uuid('id').primaryKey().defaultRandom(),
  userId: t
    .uuid('user_id')
    .references(() => UsersTable.id, { onDelete: 'cascade' })
    .notNull(),
  productId: t
    .uuid('product_id')
    .references(() => ProductsTable.id, { onDelete: 'cascade' })
    .notNull(),
  addedOn: t
    .timestamp('added_on', { withTimezone: true })
    .notNull()
    .defaultNow(),
  ...timestamp,
});

export const WishlistsTableRelations = relations(WishlistsTable, ({ one }) => ({
  user: one(UsersTable, {
    fields: [WishlistsTable.userId],
    references: [UsersTable.id],
  }),
  product: one(ProductsTable, {
    fields: [WishlistsTable.productId],
    references: [ProductsTable.id],
  }),
}));
