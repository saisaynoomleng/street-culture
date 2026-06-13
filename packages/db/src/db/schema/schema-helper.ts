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

export const addressType = t.pgEnum('addressType', [
  'billing',
  'shipping',
  'both',
]);

export const contactStatus = t.pgEnum('contactStatus', ['new', 'old', 'spam']);

export const userMembershipsStatus = t.pgEnum('userMembershipsStatus', [
  'active',
  'incomplete',
  'incomplete_expired',
  'trailing',
  'past_due',
  'canceled',
  'unpaid',
  'paused',
]);

export const jobStatus = t.pgEnum('jobStatus', [
  'published',
  'no longer available',
]);

export const applicationStatus = t.pgEnum('applicationStatus', [
  'new',
  'accepted',
  'rejected',
]);

export const productStatus = t.pgEnum('productStatus', [
  'published',
  'no longer available',
]);

export const productVariantStatus = t.pgEnum('productVariantStatus', [
  'draft',
  'published',
  'out of stock',
]);

export const productSizes = t.pgEnum('productSizes', [
  '2xs',
  'xs',
  's',
  'md',
  'l',
  'xl',
  '2xl',
  'n/a',
]);

export const reviewStatus = t.pgEnum('reviewStatus', ['active', 'deleted']);

export const invoiceStatus = t.pgEnum('invoiceStatus', [
  'pending',
  'paid',
  'canceled',
]);
