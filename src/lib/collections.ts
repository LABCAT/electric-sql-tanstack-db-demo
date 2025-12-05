import { createCollection } from '@tanstack/react-db'
import { electricCollectionOptions } from '@tanstack/electric-db-collection'
import type { SelectPlane, SelectPilot, SelectFlight } from '../db/validation'

// Electric endpoint - should come from environment variable
const ELECTRIC_URL = import.meta.env.VITE_ELECTRIC_URL || 'http://localhost:3003/v1/shape'

// Planes Collection with Electric
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

// Pilots Collection with Electric
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

// Flights Collection with Electric
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
  })
)
