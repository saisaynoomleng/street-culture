import { relations, sql } from 'drizzle-orm';
import { timestamp } from 'drizzle-orm/gel-core';
import * as t from 'drizzle-orm/pg-core';
import { UserMembershipsTable } from './userMemberships.schema';

export const MembershipsTable = t.pgTable(
  'memberships',
  {
    id: t.uuid('id').primaryKey().defaultRandom(),
    pricePerMonthInUsd: t.integer('price_per_month_in_usd').notNull(),
    pricePerMonthInKrw: t.integer('price_per_month_in_krw').notNull(),
    allowDiscountPercent: t.integer('allow_discount_percent').notNull(),
    ...timestamp,
  },
  (table) => [
    t.check('usd_price_check', sql`${table.pricePerMonthInUsd} >= 0`),
    t.check('krw_price_check', sql`${table.pricePerMonthInKrw} >= 0`),
    t.check('discount_check', sql`${table.allowDiscountPercent} >= 0`),
  ],
);

export const MembershipsTableRelations = relations(
  MembershipsTable,
  ({ many }) => ({ userSubscription: many(UserMembershipsTable) }),
);
