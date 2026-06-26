import { env } from '@/lib/env/client';
import { env as ServerEnv } from '@/lib/env/server';
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
  app: {
    organizationId: ServerEnv.SANITY_ORGANIZATION_ID,
    entry: './src/components/SanityProvider.tsx',
  },
  deployment: {
    appId: 'cn3jnsny2qrrk5uz74jeegvd',
  },
});
