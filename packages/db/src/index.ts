import 'dotenv/config';
import { drizzle } from 'drizzle-orm/node-postgres';
import { Pool } from 'pg';
import env from './env';

const gloablForDb = globalThis as {
  pool?: Pool;
};

const pool =
  gloablForDb.pool ?? new Pool({ connectionString: env.DATABASE_URL, max: 20 });

if (process.env.NODE_ENV !== 'production') {
  gloablForDb.pool = pool;
}

export const db = drizzle(pool);
