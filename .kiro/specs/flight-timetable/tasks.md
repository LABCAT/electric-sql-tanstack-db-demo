# Implementation Plan

- [x] 1. Set up project structure and dependencies
  - Initialize React project with Vite
  - Install and configure Tamagui for cross-platform UI
  - Install @tanstack/electric-db-collection, @tanstack/react-db, and Drizzle dependencies
  - Set up TypeScript configuration
  - Create Drizzle PostgreSQL schema for planes, pilots, and flights
  - Set up TanStack DB Electric Collections
  - _Requirements: 9.1, 9.4_

- [x] 2. Define database schema with Drizzle
  - [x] 2.1 Create Drizzle schema definitions
    - Define planes, pilots, and flights tables
    - Set up proper relationships and constraints
    - Include drag state fields for real-time collaboration
    - _Requirements: 3.2, 4.2, 5.1_

  - [x] 2.2 Set up Supabase project and apply schema
    - Create Supabase project
    - Configure Entra ID and Google OAuth providers
    - Run Drizzle migrations to create database tables
    - _Requirements: 1.1, 7.1, 8.1_

  - [x] 2.3 Create database seed script
    - Add seed script for cool pilot names (sci-fi/comic book themed)
    - Include at least 4 pilots: "Poe Dameron", "Starbuck", "Maverick", "Iceman"
    - Add sample planes for testing: "Millennium Falcon", "X-Wing", "Quinjet", "Milano"
    - _Requirements: 3.2_

- [x] 3. Configure sync infrastructure
  - [x] 3.1 Initialize Electric SQL client
    - Configure Electric SQL connection to Supabase
    - Set up local SQLite database with Electric extensions
    - Test sync connection between local and cloud databases
    - _Requirements: 7.1, 7.2_

  - [x] 3.2 Configure TanStack DB with Electric Collection
    - Set up TanStack DB with Electric SQL adapter
    - Create Electric Collections for planes, pilots, and flights
    - Configure shape subscriptions for related data
    - _Requirements: 8.1, 8.2_

- [ ] 4. Build core data operations
  - [ ] 4.1 Set up reactive queries for seeded data
    - Create queries for planes and pilots from seed data
    - Set up TanStack DB collections for all entities
    - _Requirements: 2.1, 2.3_

  - [ ] 4.2 Implement Flight operations
    - Create flight creation with validation including date selection
    - Implement flight update and delete operations
    - Set up reactive queries for flight data with relations
    - _Requirements: 3.1, 3.2, 3.3, 3.5_

- [ ] 5. Build timetable UI components
  - [ ] 5.1 Create TimetableGrid component
    - Build responsive grid layout with Tamagui
    - Display time slots from 7am to 6pm
    - Create dynamic columns for each plane
    - _Requirements: 2.1, 2.2, 2.4, 9.2_

  - [ ] 5.2 Create header with date selector
    - Build header component with date picker
    - Allow users to switch between different dates
    - Filter flights based on selected date
    - _Requirements: 10.1, 10.2_

  - [ ] 5.3 Create FlightCard component
    - Design flight card with departure/arrival indicators
    - Implement visual distinction for flight types
    - Add drag handle and visual feedback
    - _Requirements: 6.1, 6.2, 9.1_

  - [ ] 5.4 Create FlightCreator component
    - Build flight creation modal/form with date picker
    - Add form validation for required fields
    - Integrate with plane and pilot selection
    - _Requirements: 3.1, 3.2_

- [ ] 6. Implement drag and drop functionality
  - [ ] 6.1 Add drag capabilities to FlightCard
    - Implement drag start, move, and end handlers
    - Add visual feedback during drag operations
    - Handle touch and mouse events via Tamagui
    - _Requirements: 4.1, 9.3_

  - [ ] 6.2 Implement drop validation logic
    - Validate moves within same plane column only
    - Prevent drops on occupied time slots
    - Update flight timeSlot on successful drops
    - _Requirements: 4.2, 4.3, 4.5_

  - [ ] 6.3 Add drag state synchronization
    - Update flight drag fields during drag operations
    - Persist successful moves to database
    - Handle drag cancellation and reversion
    - _Requirements: 4.4, 5.3_

- [ ] 7. Implement real-time collaboration features
  - [ ] 7.1 Add live drag state visualization
    - Show other users' active drag operations
    - Display drag indicators and ghost positions
    - Update UI reactively based on drag state changes
    - _Requirements: 5.1, 5.2_

  - [ ] 7.2 Handle collaborative drag completion
    - Sync final positions across all clients
    - Clear drag states on completion or cancellation
    - Maintain data consistency during concurrent operations
    - _Requirements: 5.3, 5.4, 5.5_

  - [ ] 7.3 Add visual indicators for flight updates
    - Update flight visual indicators immediately on data changes
    - Handle multiple flights in same time slot display
    - Ensure consistent rendering across all clients
    - _Requirements: 6.3, 6.4_

- [ ] 8. Final integration
  - [ ] 8.1 Integrate all components into main application
    - Wire up routing and navigation
    - Ensure proper component composition
    - _Requirements: All_

- [ ] 9. Implement authentication system
  - [ ] 9.1 Create AuthProvider component
    - Set up Supabase Auth client
    - Implement Entra ID authentication flow
    - Implement Google authentication flow
    - Handle authentication state management
    - _Requirements: 1.1, 1.2, 1.4_

  - [ ] 9.2 Create login/logout UI components
    - Build login screen with provider selection
    - Implement logout functionality
    - Add authentication error handling
    - _Requirements: 1.3_

  - [ ] 9.3 Connect authentication with protected routes
    - Add route protection
    - Handle authentication state in main app
    - _Requirements: 1.1_

- [ ] 10. Checkpoint - Ensure all functionality works
  - Ensure all functionality works, ask the user if questions arise.