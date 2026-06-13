import 'dotenv/config';
import { drizzle } from 'drizzle-orm/node-postgres';
import { Pool } from 'pg';
import env from './env';
import * as schema from './db/schema';

const globalForDb = globalThis as {
  pool?: Pool;
};

const pool =
  globalForDb.pool ?? new Pool({ connectionString: env.DATABASE_URL, max: 20 });

if (process.env.NODE_ENV !== 'production') {
  globalForDb.pool = pool;
}

export const db = drizzle({ client: pool, schema, logger: true });
export * from './db/schema';
