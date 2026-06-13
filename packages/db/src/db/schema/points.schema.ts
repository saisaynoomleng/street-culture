import * as t from 'drizzle-orm/pg-core';
import { UsersTable } from './users.schema';
import { relations, sql } from 'drizzle-orm';
import { timestamp } from './schema-helper';

export const PointsTable = t.pgTable(
  'points',
  {
    id: t.uuid('id').primaryKey().defaultRandom(),
    userId: t
      .uuid('user_id')
      .references(() => UsersTable.id, { onDelete: 'cascade' })
      .notNull(),
    points: t.integer('points').notNull().default(0),
    ...timestamp,
  },
  (table) => [t.check('points_check', sql`${table.points} >= 0`)],
);

export const PointsTableRelations = relations(PointsTable, ({ one }) => ({
  user: one(UsersTable, {
    fields: [PointsTable.userId],
    references: [UsersTable.id],
  }),
}));
