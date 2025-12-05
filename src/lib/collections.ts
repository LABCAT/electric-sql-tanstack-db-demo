import { createCollection } from '@tanstack/react-db'
import { electricCollectionOptions } from '@tanstack/electric-db-collection'
import type { SelectPlane, SelectPilot, SelectFlight } from '../db/validation'

// Electric Shape API endpoint - should be configured via environment variable
// This connects to the Electric sync service which syncs with Supabase PostgreSQL
const ELECTRIC_URL = import.meta.env.VITE_ELECTRIC_URL || 'http://localhost:3003/v1/shape'

/**
 * Planes Collection with Electric SQL sync
 * 
 * This collection automatically syncs with Supabase PostgreSQL through Electric SQL.
 * Changes are persisted locally first, then synced to the cloud in real-time.
 */
export const planesCollection = createCollection(
  electricCollectionOptions({
    id: 'planes',
    shapeOptions: {
      url: ELECTRIC_URL,
      params: {
        table: 'planes',
      },
    },
    getKey: (item: SelectPlane) => item.id,
  })
)

/**
 * Pilots Collection with Electric SQL sync
 * 
 * This collection automatically syncs with Supabase PostgreSQL through Electric SQL.
 * Changes are persisted locally first, then synced to the cloud in real-time.
 */
export const pilotsCollection = createCollection(
  electricCollectionOptions({
    id: 'pilots',
    shapeOptions: {
      url: ELECTRIC_URL,
      params: {
        table: 'pilots',
      },
    },
    getKey: (item: SelectPilot) => item.id,
  })
)

/**
 * Flights Collection with Electric SQL sync
 * 
 * This collection syncs flights data in real-time with Supabase PostgreSQL.
 * Related plane and pilot data can be fetched separately using their respective
 * collections, or Electric SQL can be configured to include related data via
 * shape subscriptions at the Electric sync service level.
 */
export const flightsCollection = createCollection(
  electricCollectionOptions({
    id: 'flights',
    shapeOptions: {
      url: ELECTRIC_URL,
      params: {
        table: 'flights',
      },
    },
    getKey: (item: SelectFlight) => item.id,
    // TODO: Add onInsert, onUpdate, onDelete mutations when implementing Task 4.2
    // Note: Shape subscriptions for related data (planes, pilots) should be
    // configured at the Electric sync service level to include foreign key relationships
  })
)
