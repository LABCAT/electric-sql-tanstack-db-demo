import { drizzle } from 'drizzle-orm/node-postgres'
import { Pool } from 'pg'

// Database connection string from environment variables
// Format: postgresql://user:password@host:port/database
function getConnectionString() {
  const url = process.env.DATABASE_URL
  if (!url) {
    throw new Error('DATABASE_URL environment variable is not set. Please set it in your .env file.')
  }
  return url
}

// Create pg pool - tsx automatically loads .env files
export const pool = new Pool({
  connectionString: getConnectionString(),
  ssl: { rejectUnauthorized: false },
})

// Create Drizzle instance
export const db = drizzle(pool)
