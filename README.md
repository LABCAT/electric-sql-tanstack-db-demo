# Flight Timetable - Real-time Collaborative Scheduling

A proof-of-concept application demonstrating real-time collaborative flight scheduling with drag-and-drop functionality, similar to Figma's collaborative experience.

## Technology Stack

- **Frontend**: React + Vite + TypeScript
- **UI Framework**: Tamagui (cross-platform compatibility)
- **Database**: TanStack DB + Electric SQL + Drizzle ORM
- **Backend**: Supabase (PostgreSQL + Authentication)
- **Authentication**: Entra ID + Google via Supabase Auth
- **Real-time Sync**: Electric SQL for local-first architecture

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
- Supabase account
- Entra ID and Google OAuth apps (for authentication)

### Getting Started

1. **Install dependencies**
   ```bash
   npm install
   ```

2. **Set up environment variables**
   ```bash
   cp .env.example .env.local
   # Fill in your Supabase and OAuth credentials
   ```

3. **Run database migrations**
   ```bash
   npm run db:migrate
   ```

4. **Seed the database**
   ```bash
   npm run db:seed
   ```

5. **Start development server**
   ```bash
   npm run dev
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