import * as t from 'drizzle-orm/pg-core';
import { ApplicationsTable } from './application.schema';
import { timestamp } from './schema-helper';
import { relations } from 'drizzle-orm';

export const PreviousEmployersTable = t.pgTable('previous_employers', {
  id: t.uuid('id').primaryKey().defaultRandom(),
  applicationId: t
    .uuid('application_id')
    .references(() => ApplicationsTable.id, { onDelete: 'cascade' })
    .notNull(),
  name: t.varchar('name', { length: 255 }).notNull(),
  email: t.varchar('email', { length: 255 }).notNull(),
  phone: t.varchar('phone', { length: 255 }).notNull(),
  reasonForLeaving: t.text('reason_for_leaving').notNull(),
  previousRole: t.varchar('previous_role', { length: 255 }).notNull(),
  startedDate: t.timestamp('started_date', { withTimezone: true }).notNull(),
  endedDate: t.timestamp('ended_date', { withTimezone: true }),
  ...timestamp,
});

export const PreviousEmployersTableRelations = relations(
  PreviousEmployersTable,
  ({ one }) => ({
    application: one(ApplicationsTable, {
      fields: [PreviousEmployersTable.applicationId],
      references: [ApplicationsTable.id],
    }),
  }),
);
