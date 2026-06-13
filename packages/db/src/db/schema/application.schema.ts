import * as t from 'drizzle-orm/pg-core';
import { JobsTable } from './jobs.schema';
import { applicationStatus, timestamp } from './schema-helper';
import { relations } from 'drizzle-orm';
import { PreviousEmployersTable } from './previous-employers.schema';

export const ApplicationsTable = t.pgTable('applications', {
  id: t.uuid('id').defaultRandom().primaryKey(),
  jobId: t
    .uuid('job_id')
    .references(() => JobsTable.id, { onDelete: 'cascade' })
    .notNull(),
  firstName: t.varchar('first_name', { length: 255 }).notNull(),
  lastName: t.varchar('last_name', { length: 255 }).notNull(),
  email: t.varchar('email', { length: 255 }).notNull(),
  phone: t.varchar('phone', { length: 255 }).notNull(),
  body: t.text('body').notNull(),
  resumeUrl: t.varchar('resume_url', { length: 255 }).notNull(),
  status: applicationStatus('status').notNull().default('new'),
  ...timestamp,
});

export const ApplicationsTableRelations = relations(
  ApplicationsTable,
  ({ one, many }) => ({
    job: one(JobsTable, {
      fields: [ApplicationsTable.jobId],
      references: [JobsTable.id],
    }),
    previousEmployers: many(PreviousEmployersTable),
  }),
);
