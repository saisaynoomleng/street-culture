import { defineLive } from 'next-sanity/live';
import { client } from '@/sanity/lib/client';
import { env } from '@/lib/env/server';

const token = env.SANTIY_READ_TOKEN;

if (!token) {
  throw new Error('Missing Sanity Read Token');
}

export const { sanityFetch, SanityLive } = defineLive({
  client,
  browserToken: token,
  serverToken: token,
});
