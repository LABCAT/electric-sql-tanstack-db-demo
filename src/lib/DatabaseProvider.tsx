import React, { useEffect, useState } from 'react'
import { initElectricDatabase } from './electric'

interface DatabaseProviderProps {
  children: React.ReactNode
}

/**
 * DatabaseProvider component
 * 
 * Initializes the Electric SQL connection before the app renders.
 * The TanStack Electric Collections handle the sync with the Electric Shape API
 * directly - no local database like PGlite is required.
 * 
 * See: https://tanstack.com/db/latest/docs/collections/electric-collection
 */
export function DatabaseProvider({ children }: DatabaseProviderProps) {
  const [isReady, setIsReady] = useState(false)

  useEffect(() => {
    let mounted = true

    async function initialize() {
      try {
        // Initialize Electric connection (logs configuration status)
        await initElectricDatabase()
        
        if (mounted) {
          setIsReady(true)
        }
      } catch (err) {
        console.error('Failed to initialize Electric SQL:', err)
        if (mounted) {
          // Still set ready - collections will handle connection errors gracefully
          setIsReady(true)
        }
      }
    }

    initialize()

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
        <div>Connecting to Electric sync service...</div>
      </div>
    )
  }

  // TanStack Electric Collections handle their own sync with the Shape API
  return <>{children}</>
}
