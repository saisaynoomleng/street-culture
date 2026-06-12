import * as t from 'drizzle-orm/pg-core';

export const timestamp = {
  updatedAt: t
    .timestamp('updated_at', { withTimezone: true })
    .notNull()
    .defaultNow()
    .$onUpdate(() => new Date()),
  createdAt: t
    .timestamp('created_at', { withTimezone: true })
    .notNull()
    .defaultNow(),
};

export const userStatus = t.pgEnum('userStatus', ['admin', 'user']);
