import 'dotenv/config';
import { defineConfig } from 'drizzle-kit';
import env from './src/env.ts';

export default defineConfig({
  out: './src/db/migrations',
  schema: './src/db/schema/index.ts',
  dialect: 'postgresql',
  verbose: true,
  strict: true,
  dbCredentials: {
    url: env.DATABASE_URL,
  },
});
