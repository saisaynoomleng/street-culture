import { createEnv } from '@t3-oss/env-nextjs';
import * as z from 'zod';

export const env = createEnv({
  emptyStringAsUndefined: true,
  client: {
    NEXT_PUBLIC_SANITY_PROJECT_ID: z
      .string()
      .min(1, 'Sanity Project ID must have at least 1 character'),
    NEXT_PUBLIC_SANITY_DATASET: z
      .string()
      .min(1, 'Sanity dataset must have at least 1 character'),
    NEXT_PUBLIC_SANITY_API_VERSION: z
      .string()
      .min(1, 'Sanity api version must have at least 1 character'),
    NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY: z
      .string()
      .startsWith('pk')
      .min(1, 'Clerk Publishable key must have at least 1 character'),
  },
  runtimeEnv: {
    NEXT_PUBLIC_SANITY_PROJECT_ID: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
    NEXT_PUBLIC_SANITY_DATASET: process.env.NEXT_PUBLIC_SANITY_DATASET,
    NEXT_PUBLIC_SANITY_API_VERSION: process.env.NEXT_PUBLIC_SANITY_API_VERSION,
    NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY:
      process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY,
  },
});
