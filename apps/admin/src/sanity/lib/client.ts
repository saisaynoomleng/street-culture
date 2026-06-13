import { env } from '@/lib/env/client';
import { env as serverEnv } from '@/lib/env/server';
import { createClient } from 'next-sanity';

const token = serverEnv.SANITY_WRITE_TOKEN;

if (!token) {
  throw new Error('MISSING SANITY WRITE TOKEN');
}

export const client = createClient({
  projectId: env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: env.NEXT_PUBLIC_SANITY_DATASET,
  apiVersion: env.NEXT_PUBLIC_SANITY_API_VERSION,
  useCdn: false,
  token,
});
