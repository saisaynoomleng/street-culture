import * as t from 'drizzle-orm/pg-core';
import { timestamp } from './schema-helper';
import { relations } from 'drizzle-orm';
import { StoreInventoriesTable } from './store-inventories.schema';

export const StoresTable = t.pgTable('stores', {
  id: t.uuid('id').primaryKey().defaultRandom(),
  name: t.varchar('name', { length: 255 }).notNull(),
  ...timestamp,
});

export const StoresTableRelations = relations(StoresTable, ({ many }) => ({
  inventories: many(StoreInventoriesTable),
}));
