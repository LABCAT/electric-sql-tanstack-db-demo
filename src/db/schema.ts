import { pgTable, uuid, varchar, integer, boolean, timestamp, date } from 'drizzle-orm/pg-core'

// Planes table
export const planes = pgTable('planes', {
  id: uuid('id').primaryKey().defaultRandom(),
  name: varchar('name', { length: 100 }).notNull(),
  createdAt: timestamp('created_at', { withTimezone: true }).defaultNow().notNull(),
})

export type Plane = typeof planes.$inferSelect
export type NewPlane = typeof planes.$inferInsert

// Pilots table
export const pilots = pgTable('pilots', {
  id: uuid('id').primaryKey().defaultRandom(),
  name: varchar('name', { length: 100 }).notNull(),
  createdAt: timestamp('created_at', { withTimezone: true }).defaultNow().notNull(),
})

export type Pilot = typeof pilots.$inferSelect
export type NewPilot = typeof pilots.$inferInsert

// Flights table
export const flights = pgTable('flights', {
  id: uuid('id').primaryKey().defaultRandom(),
  planeId: uuid('plane_id').references(() => planes.id).notNull(),
  pilotId: uuid('pilot_id').references(() => pilots.id).notNull(),
  flightDate: date('flight_date').notNull(), // Date of the flight
  timeSlot: integer('time_slot').notNull(), // Hour of day (7-18 for 7am-6pm)
  flightType: varchar('flight_type', { length: 20 }).notNull(), // 'departure' | 'arrival'
  
  // Drag state fields for real-time collaboration
  isDragging: boolean('is_dragging').default(false),
  dragUserId: varchar('drag_user_id', { length: 100 }),
  dragPlaneId: uuid('drag_plane_id').references(() => planes.id),
  dragTimeSlot: integer('drag_time_slot'),
  
  createdAt: timestamp('created_at', { withTimezone: true }).defaultNow().notNull(),
  updatedAt: timestamp('updated_at', { withTimezone: true }).defaultNow().notNull(),
})

export type Flight = typeof flights.$inferSelect
export type NewFlight = typeof flights.$inferInsert
