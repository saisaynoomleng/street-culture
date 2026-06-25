import { createEnv } from '@t3-oss/env-nextjs';
import * as z from 'zod';

export const env = createEnv({
  emptyStringAsUndefined: true,
  server: {
    SANTIY_READ_TOKEN: z
      .string()
      .min(1, 'Sanity Token must have at least 1 character')
      .startsWith('sk'),
    SANITY_WRITE_TOKEN: z
      .string()
      .min(1, 'Sanity Token must have at least 1 character')
      .startsWith('sk'),
    SANITY_ORGANIZATION_ID: z
      .string()
      .min(1, 'Sanity Organization ID must have at least 1 character'),
  },
  runtimeEnv: {
    SANTIY_READ_TOKEN: process.env.SANTIY_READ_TOKEN,
    SANITY_WRITE_TOKEN: process.env.SANITY_WRITE_TOKEN,
    SANITY_ORGANIZATION_ID: process.env.SANITY_ORGANIZATION_ID,
  },
});
