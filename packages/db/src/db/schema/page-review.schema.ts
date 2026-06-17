import * as t from 'drizzle-orm/pg-core';
import { pageReviewStatus, timestamp } from './schema-helper';

export const PageReviewsTable = t.pgTable('page_reviews', {
  id: t.uuid('id').primaryKey().defaultRandom(),
  fullName: t.varchar('fullName', { length: 255 }).notNull(),
  role: t.varchar('role', { length: 255 }).notNull(),
  body: t.text('body').notNull(),
  status: pageReviewStatus('status').notNull().default('new'),
  imageUrl: t.varchar('image_url', { length: 255 }).notNull(),
  ...timestamp,
});
