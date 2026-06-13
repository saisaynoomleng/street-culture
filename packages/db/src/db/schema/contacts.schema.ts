import * as t from 'drizzle-orm/pg-core';
import { contactStatus } from './schema-helper';
import { timestamp } from 'drizzle-orm/gel-core';

export const ContactsTable = t.pgTable('contacts', {
  id: t.uuid('id').primaryKey().defaultRandom(),
  fullName: t.varchar('full_name', { length: 255 }).notNull(),
  email: t.varchar('email', { length: 255 }).notNull(),
  subject: t.text('subject').notNull(),
  message: t.text('message').notNull(),
  status: contactStatus('status').notNull().default('new'),
  ...timestamp,
});
