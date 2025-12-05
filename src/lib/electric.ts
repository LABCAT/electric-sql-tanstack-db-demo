/**
 * Electric SQL configuration
 * 
 * The TanStack Electric Collection (@tanstack/electric-db-collection) handles 
 * real-time sync with the Electric Shape API directly. No local database like 
 * PGlite is required - the collections sync data via HTTP to the Electric sync 
 * service, which syncs with Supabase PostgreSQL.
 * 
 * See: https://tanstack.com/db/latest/docs/collections/electric-collection
 */

// Electric Shape API endpoint - configured via environment variable
// This connects to the Electric sync service which syncs with Supabase PostgreSQL
export const ELECTRIC_URL = import.meta.env.VITE_ELECTRIC_URL || 'http://localhost:3003/v1/shape'

/**
 * Check if Electric sync is configured
 */
export function isElectricConfigured(): boolean {
  return !!import.meta.env.VITE_ELECTRIC_URL
}

/**
 * Initialize Electric connection
 * 
 * This is a no-op function that can be called during app startup for any
 * future initialization needs. The TanStack Electric Collections handle
 * their own connection to the Electric Shape API.
 */
export async function initElectricDatabase(): Promise<void> {
  if (!isElectricConfigured()) {
    console.warn(
      'Electric SQL not configured. Set VITE_ELECTRIC_URL to enable real-time sync.',
      'Using default: http://localhost:3003/v1/shape'
    )
  }
  // No PGlite initialization needed - Electric Collection syncs via HTTP
  console.log('Electric SQL ready - using Shape API at:', ELECTRIC_URL)
}
