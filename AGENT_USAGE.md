# How to Use Cursor Background Agents

Based on research into Cursor background agent best practices.

## Current Project Status
- ✅ Specs complete in `.kiro/specs/flight-timetable/`
- ✅ Tasks defined and ready for implementation
- 🚀 Ready for incremental development

## Agent Usage Pattern

### Step 1: Identify Next Task
Check `.kiro/specs/flight-timetable/tasks.md` for first `- [ ]` task.

### Step 2: Create Self-Contained Prompt
Research shows agents work best with complete context in the prompt:

```
Task: [Copy exact task from tasks.md]

Context: This is a React + TypeScript flight timetable app with real-time collaboration. 
Tech stack: Vite + Tamagui + TanStack DB + Electric SQL + Drizzle + Supabase.

Requirements: [List specific requirement numbers from task]

Files to reference:
- Design details: .kiro/specs/flight-timetable/design.md  
- Requirements: .kiro/specs/flight-timetable/requirements.md

Success criteria:
- Implement only this specific task
- Mark complete: change - [ ] to - [x] in tasks.md
- Create PR: "Task X.Y: [description]"
- Test implementation works
```

### Step 3: Run Agent
- Paste the self-contained prompt
- Agent reads .cursorrules automatically
- Agent implements only that task

## Research-Based Best Practices

✅ **Self-contained prompts** (include all context)
✅ **One atomic task per run**
✅ **Explicit file references** in prompt
✅ **Clear success criteria**
✅ **Simple, direct instructions**

❌ **Complex workflows**
❌ **Multiple tasks at once**  
❌ **Expecting agents to discover context**
❌ **Long instruction chains**

## Example: Task 1 Prompt

```
Task: Set up project structure and dependencies
- Initialize React project with Vite
- Install and configure Tamagui for cross-platform UI
- Install Electric SQL, TanStack DB, and Drizzle dependencies  
- Set up TypeScript configuration
- Create .nvmrc file with Node 24

Context: Flight timetable app with real-time collaboration using React + TypeScript + Tamagui + TanStack DB + Electric SQL + Drizzle + Supabase.

Success criteria:
- Working Vite + React + TypeScript setup
- All dependencies installed
- Tamagui configured for cross-platform
- .nvmrc with Node 24
- Mark complete: - [x] 1. Set up project structure and dependencies
- Create PR: "Task 1: Set up project structure and dependencies"
```

This research-based approach maximizes background agent success.