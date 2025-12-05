# Requirements Document

## Introduction

A real-time collaborative flight timetable application demonstrating Electric SQL, TanStack DB, Drizzle, and Supabase technologies with Tamagui for cross-platform UI. The system provides drag-and-drop flight scheduling with live updates across all connected users, similar to Figma's collaborative experience.

## Glossary

- **Flight_Timetable_System**: The complete application managing flight scheduling and real-time collaboration
- **Flight**: A scheduled flight with date, time slot, assigned plane, and pilot
- **Plane**: An aircraft that can be assigned to multiple flights
- **Pilot**: A person who can be assigned to multiple flights
- **Timetable_Slot**: A one-hour time period from 7am to 6pm
- **Drag_Operation**: The process of moving a flight between timetable slots
- **Real_Time_Update**: Immediate synchronization of changes across all connected users
- **TanStack_DB**: Local database management layer for client-side data operations
- **Drizzle_ORM**: Type-safe ORM for database schema and query management
- **Tamagui**: Cross-platform UI framework for React and React Native compatibility
- **Flight_Date**: The specific date for which flights are scheduled and displayed

## Requirements

### Requirement 1

**User Story:** As a user, I want to authenticate using Entra ID or Google through Supabase, so that I can securely access the flight timetable system.

#### Acceptance Criteria

1. WHEN a user accesses the application THEN the Flight_Timetable_System SHALL redirect to authentication with Entra ID or Google options
2. WHEN authentication succeeds THEN the Flight_Timetable_System SHALL create or update the user session in Supabase
3. WHEN authentication fails THEN the Flight_Timetable_System SHALL display an error message and prevent access
4. WHEN a user logs out THEN the Flight_Timetable_System SHALL clear the session and redirect to login

### Requirement 2

**User Story:** As a user, I want to view a timetable with hourly slots from 7am to 6pm and columns for each plane, so that I can see the flight schedule layout.

#### Acceptance Criteria

1. WHEN the timetable loads THEN the Flight_Timetable_System SHALL display columns for each plane
2. WHEN the timetable loads THEN the Flight_Timetable_System SHALL display hourly time slots from 7am to 6pm
3. WHEN planes are added or removed THEN the Flight_Timetable_System SHALL update the column layout immediately
4. WHEN the timetable displays THEN the Flight_Timetable_System SHALL show clear visual separation between time slots and plane columns

### Requirement 3

**User Story:** As a user, I want to create flights on the timetable, so that I can schedule new flights for planes and pilots.

#### Acceptance Criteria

1. WHEN a user clicks on an empty timetable slot THEN the Flight_Timetable_System SHALL display a flight creation interface
2. WHEN creating a flight THEN the Flight_Timetable_System SHALL require flight date, time slot, plane assignment, pilot assignment, and flight type
3. WHEN a flight is created THEN the Flight_Timetable_System SHALL persist the flight data using Electric SQL and Drizzle
4. WHEN a flight is created THEN the Flight_Timetable_System SHALL display the flight with departure/arrival visual indicators
5. WHEN flight data is stored THEN the Flight_Timetable_System SHALL synchronize the data to Supabase immediately

### Requirement 4

**User Story:** As a user, I want to drag and drop flights within the same plane column, so that I can reschedule flights to different time slots.

#### Acceptance Criteria

1. WHEN a user starts dragging a flight THEN the Flight_Timetable_System SHALL provide visual feedback for the drag operation
2. WHEN a flight is dragged to a different time slot within the same column THEN the Flight_Timetable_System SHALL update the flight departure time
3. WHEN a flight is dropped on an occupied slot THEN the Flight_Timetable_System SHALL prevent the move and return the flight to its original position
4. WHEN a flight is successfully moved THEN the Flight_Timetable_System SHALL persist the change using Electric SQL and Drizzle
5. WHERE a flight is dragged between different plane columns THEN the Flight_Timetable_System SHALL prevent the move and return the flight to its original position

### Requirement 5

**User Story:** As a user, I want to see real-time updates when other users are dragging flights, so that I can see collaborative changes as they happen.

#### Acceptance Criteria

1. WHEN another user starts dragging a flight THEN the Flight_Timetable_System SHALL display the flight in a dragging state for all connected users
2. WHEN another user moves a flight during dragging THEN the Flight_Timetable_System SHALL update the flight position in real-time for all connected users
3. WHEN another user completes a flight move THEN the Flight_Timetable_System SHALL update the final position for all connected users immediately
4. WHEN another user cancels a drag operation THEN the Flight_Timetable_System SHALL return the flight to its original position for all connected users
5. WHEN real-time updates occur THEN the Flight_Timetable_System SHALL maintain data consistency across all connected clients

### Requirement 6

**User Story:** As a user, I want flights to display departure/arrival visual indicators, so that I can quickly identify flight direction and type.

#### Acceptance Criteria

1. WHEN a flight is displayed THEN the Flight_Timetable_System SHALL show clear visual indicators for departure or arrival status
2. WHEN flights are rendered THEN the Flight_Timetable_System SHALL use distinct visual representations for departure versus arrival flights
3. WHEN flight data changes THEN the Flight_Timetable_System SHALL update the visual indicators immediately
4. WHEN multiple flights exist in the same slot THEN the Flight_Timetable_System SHALL display each flight with its appropriate visual indicator

### Requirement 7

**User Story:** As a system administrator, I want the application to use Electric SQL for local-first data management, so that the system provides offline capability and fast local operations.

#### Acceptance Criteria

1. WHEN the application starts THEN the Flight_Timetable_System SHALL initialize Electric SQL with local database synchronization
2. WHEN data changes occur THEN the Flight_Timetable_System SHALL update the local Electric SQL database immediately
3. WHEN network connectivity is available THEN the Flight_Timetable_System SHALL synchronize local changes with Supabase
4. WHEN network connectivity is lost THEN the Flight_Timetable_System SHALL continue operating with local data
5. WHEN connectivity is restored THEN the Flight_Timetable_System SHALL resolve conflicts and synchronize all pending changes

### Requirement 8

**User Story:** As a developer, I want the application to use TanStack DB with Drizzle ORM for local data management, so that the system provides type-safe database operations and efficient local queries.

#### Acceptance Criteria

1. WHEN the application initializes THEN the Flight_Timetable_System SHALL set up TanStack DB with Drizzle schema definitions
2. WHEN database operations occur THEN the Flight_Timetable_System SHALL use Drizzle ORM for type-safe queries and mutations
3. WHEN data models change THEN the Flight_Timetable_System SHALL maintain schema consistency through Drizzle migrations
4. WHEN local queries execute THEN the Flight_Timetable_System SHALL leverage TanStack DB for optimized performance

### Requirement 9

**User Story:** As a developer, I want the UI to use Tamagui components, so that the application can be deployed on both web and React Native platforms.

#### Acceptance Criteria

1. WHEN UI components are rendered THEN the Flight_Timetable_System SHALL use Tamagui components for cross-platform compatibility
2. WHEN the timetable displays THEN the Flight_Timetable_System SHALL render using Tamagui layout and styling primitives
3. WHEN drag operations occur THEN the Flight_Timetable_System SHALL handle touch and mouse events through Tamagui gesture systems
4. WHEN the application builds THEN the Flight_Timetable_System SHALL compile successfully for both web and React Native targets

### Requirement 10

**User Story:** As a user, I want to select different dates to view flight schedules, so that I can see flights for specific days.

#### Acceptance Criteria

1. WHEN the application loads THEN the Flight_Timetable_System SHALL display a date selector in the header
2. WHEN a user selects a different date THEN the Flight_Timetable_System SHALL filter and display flights for that specific date
3. WHEN creating a flight THEN the Flight_Timetable_System SHALL require a flight date selection
4. WHEN no flights exist for a selected date THEN the Flight_Timetable_System SHALL display an empty timetable grid