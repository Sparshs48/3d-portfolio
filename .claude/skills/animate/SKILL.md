---
name: animate
description: Add a GSAP scroll-driven animation to a component in this portfolio
disable-model-invocation: true
argument-hint: "<ComponentName> <animation-description>"
---

Add a GSAP animation to the component: $1
Animation goal: $ARGUMENTS

## Before writing any code
1. Read `src/components/utils/` to understand existing animation utilities and helpers
2. Read the target component file `src/components/$1.tsx`
3. Read its CSS file `src/components/styles/$1.css`
4. Check how GSAP ScrollTrigger is used in other components (About.tsx, Career.tsx, Landing.tsx)

## Animation requirements
- Use `useGSAP` from `@gsap/react` (already in the project) — NOT `useEffect`
- Use `gsap.context()` for proper cleanup
- Use `ScrollTrigger` for scroll-driven animations
- Pin, scrub, and trigger settings should match the scroll feel of other sections
- Add `will-change: transform` or `opacity` to CSS for animated elements
- Ensure animations work with the custom cursor (don't break pointer events)

## After implementing
- Verify no TypeScript errors
- Confirm cleanup is handled in the GSAP context return
