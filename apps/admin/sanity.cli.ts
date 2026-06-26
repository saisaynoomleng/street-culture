import { env } from '@/lib/env/client';
import { defineCliConfig } from 'sanity/cli';

export default defineCliConfig({
  api: {
    projectId: env.NEXT_PUBLIC_SANITY_PROJECT_ID,
    dataset: env.NEXT_PUBLIC_SANITY_DATASET,
  },
  typegen: {
    path: './src/**/*.{js,ts,jsx,tsx}',
    schema: './src/sanity/schema.json',
    generates: './src/sanity/types.ts',
  },
});
