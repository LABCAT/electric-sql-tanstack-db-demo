import { PGlite } from '@electric-sql/pglite'

/**
 * Electric SQL local database configuration
 * 
 * This initializes the local SQLite database (via PGlite) that Electric SQL
 * uses for local-first sync with Supabase PostgreSQL. The TanStack Electric
 * Collection handles the Electric client connection internally.
 */

// Initialize local SQLite database with Electric extensions
// PGlite provides a PostgreSQL-compatible SQLite database in the browser
let pglite: PGlite | null = null

/**
 * Get or create the local PGlite database instance
 * 
 * This database is used by Electric SQL for local-first operations.
 * Data is synced with Supabase PostgreSQL through the Electric sync service.
 */
export async function getLocalDatabase(): Promise<PGlite> {
  if (!pglite) {
    // Initialize PGlite with IndexedDB backend
    // This creates a persistent local SQLite database that Electric can sync with
    pglite = new PGlite('idb://flight-timetable-db')
    
    // Wait for database to be ready
    await pglite.waitReady
    
    console.log('Local database initialized successfully')
  }
  
  return pglite
}

/**
 * Initialize Electric SQL local database
 * 
 * Call this during app startup to ensure the local database is ready
 * before collections are used.
 */
export async function initElectricDatabase(): Promise<void> {
  await getLocalDatabase()
}
