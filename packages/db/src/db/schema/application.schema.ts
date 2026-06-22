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

  address1: t.varchar('address_1', { length: 255 }).notNull(),
  address2: t.varchar('address_2', { length: 255 }),
  city: t.varchar('city', { length: 255 }).notNull(),
  state: t.varchar('state', { length: 255 }).notNull(),
  zip: t.varchar('zip', { length: 255 }).notNull(),
  country: t.varchar('country', { length: 255 }).notNull(),
  isAuthorizedToWorkInUS: t
    .boolean('is_authorized_to_work_in_us')
    .notNull()
    .default(false),
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
