import { drizzle } from 'drizzle-orm/node-postgres'
import { Pool } from 'pg'
import { randomUUID } from 'crypto'
import { pilots, planes } from './schema'

async function main() {
  const pool = new Pool({
    connectionString: process.env.DATABASE_URL!,
    ssl: { rejectUnauthorized: false },
  })
  const db = drizzle(pool)
  
  const pilotNames = ['Poe Dameron', 'Starbuck', 'Maverick', 'Iceman']
  const planeNames = ['Millennium Falcon', 'X-Wing', 'Quinjet', 'Milano']
  
  await db.insert(pilots).values(pilotNames.map(name => ({ id: randomUUID(), name })))
  await db.insert(planes).values(planeNames.map(name => ({ id: randomUUID(), name })))
  
  console.log('Database seed completed successfully!')
}

main()
  .catch((error) => {
    console.error('Seed failed:', error)
    process.exit(1)
  })
  .finally(() => {
    process.exit(0)
  })