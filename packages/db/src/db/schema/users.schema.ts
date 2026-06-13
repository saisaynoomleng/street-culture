import * as t from 'drizzle-orm/pg-core';
import { timestamp, userStatus } from './schema-helper';
import { relations } from 'drizzle-orm';
import { PointsTable } from './points.schema';
import { AddressesTable } from './addresses.schema';
import { UserMembershipsTable } from './userMemberships.schema';
import { ReviewsTable } from './reviews.schema';
import { WishlistsTable } from './wishlists.schema';

export const UsersTable = t.pgTable('users', {
  id: t.uuid('id').defaultRandom().primaryKey(),
  firstName: t.varchar('first_name', { length: 50 }).notNull(),
  lastName: t.varchar('last_name', { length: 50 }).notNull(),
  clerkUserId: t.varchar('clerk_user_id', { length: 255 }).notNull().unique(),
  email: t.varchar('email', { length: 100 }).notNull(),
  imageUrl: t.varchar('image_url', { length: 255 }),
  status: userStatus('status').notNull().default('user'),
  isDeleted: t.boolean('is_deleted').notNull().default(false),
  ...timestamp,
});

export const UsersTableRelations = relations(UsersTable, ({ one, many }) => ({
  points: one(PointsTable),
  addresses: many(AddressesTable),
  subscription: many(UserMembershipsTable),
  reviews: many(ReviewsTable),
  wishlists: many(WishlistsTable),
}));
