import * as t from 'drizzle-orm/pg-core';
import { jobStatus, timestamp } from './schema-helper';
import { DepartmentsTable } from './departments.schema';
import { relations } from 'drizzle-orm';
import { ApplicationsTable } from './application.schema';

export const JobsTable = t.pgTable('jobs', {
  departmentId: t
    .uuid()
    .references(() => DepartmentsTable.id, { onDelete: 'cascade' })
    .notNull(),
  id: t.uuid('id').primaryKey().defaultRandom(),
  title: t.varchar('title', { length: 255 }).notNull(),
  role: t.varchar('role', { length: 255 }).notNull(),
  body: t.text('body').notNull(),
  status: jobStatus('status').notNull().default('published'),
  postedDate: t
    .timestamp('posted_date', { withTimezone: true })
    .notNull()
    .defaultNow(),
  isRemote: t.boolean('is_remote').notNull().default(false),
  ...timestamp,
});

export const JobsTableRelations = relations(JobsTable, ({ one, many }) => ({
  department: one(DepartmentsTable, {
    fields: [JobsTable.departmentId],
    references: [DepartmentsTable.id],
  }),
  applications: many(ApplicationsTable),
}));
