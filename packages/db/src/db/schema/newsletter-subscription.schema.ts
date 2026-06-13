import * as t from 'drizzle-orm/pg-core';
import { timestamp } from './schema-helper';

export const NewsletterSubscriptionsTable = t.pgTable(
  'newsletter_subscriptions',
  {
    id: t.uuid('id').primaryKey().defaultRandom(),
    email: t.varchar('email', { length: 255 }).notNull().unique(),
    ...timestamp,
  },
);
