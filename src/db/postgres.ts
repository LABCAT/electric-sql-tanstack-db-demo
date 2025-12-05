import { drizzle } from 'drizzle-orm/node-postgres'
import { Pool } from 'pg'

// Database connection string from environment variables
// Format: postgresql://user:password@host:port/database
const connectionString = process.env.DATABASE_URL || ''

if (!connectionString) {
  console.warn('DATABASE_URL environment variable is not set. Database operations will fail.')
}

// Create pg pool
export const pool = new Pool({
  connectionString,
  ssl: { rejectUnauthorized: false },
})

// Create Drizzle instance
export const db = drizzle(pool)
