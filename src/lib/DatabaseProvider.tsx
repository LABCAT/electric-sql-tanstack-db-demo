import React, { useEffect, useState } from 'react'
import { initElectricDatabase } from './electric'

interface DatabaseProviderProps {
  children: React.ReactNode
}

/**
 * DatabaseProvider component
 * 
 * Initializes the local Electric SQL database (PGlite) before the app renders.
 * The TanStack Electric Collections handle the Electric client connection and
 * sync with Supabase internally. This provider ensures the local database is
 * ready before collections are used.
 */
export function DatabaseProvider({ children }: DatabaseProviderProps) {
  const [isReady, setIsReady] = useState(false)
  const [error, setError] = useState<Error | null>(null)

  useEffect(() => {
    let mounted = true

    async function initializeDatabase() {
      try {
        // Initialize local SQLite database with Electric extensions
        // This sets up the local database that Electric SQL uses for sync
        await initElectricDatabase()
        
        if (mounted) {
          setIsReady(true)
        }
      } catch (err) {
        console.error('Failed to initialize Electric SQL database:', err)
        if (mounted) {
          setError(err instanceof Error ? err : new Error('Unknown error'))
          // Still set ready to true to allow app to render
          // Collections will handle connection errors gracefully
          setIsReady(true)
        }
      }
    }

    initializeDatabase()

    return () => {
      mounted = false
    }
  }, [])

  // Show loading state while initializing
  if (!isReady) {
    return (
      <div style={{ 
        display: 'flex', 
        justifyContent: 'center', 
        alignItems: 'center', 
        height: '100vh',
        flexDirection: 'column',
        gap: '1rem'
      }}>
        <div>Initializing database connection...</div>
        {error && (
          <div style={{ color: 'orange', fontSize: '0.875rem' }}>
            Warning: {error.message}
          </div>
        )}
      </div>
    )
  }

  // TanStack Electric Collections handle their own Electric client initialization
  // They connect to the Electric sync service using VITE_ELECTRIC_URL
  return <>{children}</>
}
