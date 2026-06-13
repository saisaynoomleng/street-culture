import * as t from 'drizzle-orm/pg-core';
import { UsersTable } from './users.schema';
import { MembershipsTable } from './memberships.schema';
import { timestamp, userMembershipsStatus } from './schema-helper';
import { relations, sql } from 'drizzle-orm';

export const UserMembershipsTable = t.pgTable(
  'user_memberships',
  {
    id: t.uuid('id').primaryKey().notNull(),
    userId: t
      .uuid('user_id')
      .references(() => UsersTable.id, { onDelete: 'set null' }),
    memebershipId: t
      .uuid('membership_id')
      .references(() => MembershipsTable.id, { onDelete: 'set null' }),
    currentPeriodStart: t
      .timestamp('current_period_start', { withTimezone: true })
      .notNull()
      .defaultNow(),
    currentPeriodEnd: t
      .timestamp('current_period_end', { withTimezone: true })
      .notNull(),
    stripeSubscriptionId: t
      .varchar('stripe_subscription_id', { length: 255 })
      .unique(),
    billingIntervalSnapshot: t
      .varchar('billing_interval_snapshot', { length: 100 })
      .notNull(),
    planNameSnapshot: t
      .varchar('plan_name_snapshot', { length: 255 })
      .notNull(),
    totalSnapshot: t.integer('total_snapshot').notNull(),
    status: userMembershipsStatus('status').notNull().default('incomplete'),
    ...timestamp,
  },
  (table) => [t.check('total_check', sql`${table.totalSnapshot} > 0`)],
);

export const UserMembershipsTableRelations = relations(
  UserMembershipsTable,
  ({ one }) => ({
    users: one(UsersTable, {
      fields: [UserMembershipsTable.userId],
      references: [UsersTable.id],
    }),
    membership: one(MembershipsTable, {
      fields: [UserMembershipsTable.memebershipId],
      references: [MembershipsTable.id],
    }),
  }),
);
