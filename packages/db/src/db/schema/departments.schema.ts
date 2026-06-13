import { relations } from 'drizzle-orm';
import * as t from 'drizzle-orm/pg-core';
import { timestamp } from './schema-helper';
import { JobsTable } from './jobs.schema';

export const DepartmentsTable = t.pgTable('departments', {
  id: t.uuid('id').primaryKey().defaultRandom(),
  name: t.varchar('name', { length: 255 }).notNull().unique(),
  ...timestamp,
});

export const DepartmentsTableRelations = relations(
  DepartmentsTable,
  ({ many }) => ({
    jobs: many(JobsTable),
  }),
);
