# Flight Timetable - Real-time Collaborative Scheduling

A proof-of-concept application demonstrating real-time collaborative flight scheduling with drag-and-drop functionality, similar to Figma's collaborative experience.

## Technology Stack

- **Frontend**: React + Vite + TypeScript
- **UI Framework**: Tamagui (cross-platform compatibility)
- **Database**: Drizzle ORM + PostgreSQL (Supabase)
- **Real-time Sync**: Electric Shape API + TanStack DB (@tanstack/electric-db-collection)
- **Backend**: Supabase (PostgreSQL + Authentication)
- **Authentication**: Entra ID + Google via Supabase Auth

## Key Features

- 🕐 **Timetable Grid**: Hourly slots from 7am-6pm with plane columns
- ✈️ **Flight Management**: Create and schedule flights with departure/arrival indicators
- 🎯 **Drag & Drop**: Move flights between time slots within the same plane column
- 👥 **Real-time Collaboration**: See other users' drag operations live (Figma-like)
- 📅 **Date Selection**: Switch between different dates to view schedules
- 🔄 **Offline Support**: Local-first with automatic sync when online

## Development Setup

### Prerequisites
- Node.js 24 (see .nvmrc)
- Supabase account with PostgreSQL database
- Electric SQL sync service (configured to sync with your Supabase database)
- Entra ID and Google OAuth apps (for authentication)

### Electric SQL Setup

This application uses Electric SQL for local-first synchronization. Before running the app:

1. **Set up Electric SQL sync service**: Follow the [Electric SQL setup guide](https://electric-sql.com/docs) to configure the sync service for your Supabase database.

2. **Configure Electric Shape API**: Ensure your `VITE_ELECTRIC_URL` points to your Electric sync service's Shape API endpoint (typically `http://localhost:3003/v1/shape` for local development).

3. **Database schema**: The Electric sync service must be configured to sync the `planes`, `pilots`, and `flights` tables from your Supabase database.

The application uses TanStack Electric Collection to sync data in real-time with Supabase through the Electric Shape API.

### Getting Started

1. **Install dependencies**
   ```bash
   pnpm install
   ```

2. **Set up environment variables**
   ```bash
   cp .env.example .env.local
   ```
   
   Fill in your environment variables:
   - `DATABASE_URL`: Your Supabase PostgreSQL connection string
   - `VITE_ELECTRIC_URL`: Your Electric SQL Shape API endpoint (e.g., `http://localhost:3003/v1/shape`)
   
   **Note**: The Electric SQL sync service must be running and configured to sync with your Supabase database. See the [Electric SQL documentation](https://electric-sql.com/docs) for setup instructions.

3. **Run database migrations**
   ```bash
   pnpm run db:migrate
   ```

4. **Seed the database**
   ```bash
   pnpm run db:seed
   ```

5. **Start development server**
   ```bash
   pnpm run dev
   ```

## Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── timetable/      # Timetable-specific components
│   ├── flights/        # Flight-related components
│   └── ui/             # Base UI components
├── lib/                # Core functionality
│   ├── db/             # Database configuration and queries
│   ├── auth/           # Authentication setup
│   └── utils/          # Utility functions
├── hooks/              # Custom React hooks
├── types/              # TypeScript type definitions
├── db/                 # Database schema and migrations
└── pages/              # Main application pages
```

## Implementation Progress

See `.kiro/specs/flight-timetable/tasks.md` for detailed implementation tasks and progress.

## Specifications

- **Requirements**: `.kiro/specs/flight-timetable/requirements.md`
- **Design**: `.kiro/specs/flight-timetable/design.md`
- **Tasks**: `.kiro/specs/flight-timetable/tasks.md`

## Development Guidelines

See `.cursorrules` for detailed development standards and guidelines.

## Cursor Background Agent Usage

This project is designed for incremental development using Cursor background agents. Each task in `.kiro/specs/flight-timetable/tasks.md` should be implemented individually with focused prompts.

## Demo Data

The application includes seeded data with:
- **Pilots**: Poe Dameron, Starbuck, Maverick, Iceman
- **Planes**: Millennium Falcon, X-Wing, Quinjet, Milano

## License

MIT