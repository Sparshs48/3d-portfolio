---
name: component
description: Scaffold a new React component following this project's patterns
disable-model-invocation: true
argument-hint: "<ComponentName> [section|utility|3d]"
---

Create a new React component for this portfolio project.

Component name: $1
Type: $2 (defaults to "section" if not provided)

## Rules based on type

### section (default)
- Create `src/components/<ComponentName>.tsx`
- Create `src/components/styles/<ComponentName>.css` and import it
- Follow the same pattern as existing sections: `About.tsx`, `Career.tsx`, `Work.tsx`
- Use functional component with TypeScript (`React.FC` or typed props)
- Export as default

### utility
- Create `src/components/<ComponentName>.tsx`
- Follow patterns from `Cursor.tsx`, `HoverLinks.tsx`, `Loading.tsx`
- Keep it self-contained with minimal dependencies

### 3d
- Create `src/components/Character/<ComponentName>.tsx`
- Use `@react-three/fiber` and `@react-three/drei`
- Follow patterns from `Scene.tsx` and `index.tsx` in the Character folder
- Export from `exports.ts` if it needs to be used outside the Character folder

## Before creating
1. Read 2-3 existing components of the same type to understand the pattern
2. Read the CSS of a similar component to understand styling conventions
3. Then create the new component

After creating, tell me exactly what was created and how to import + use it.
