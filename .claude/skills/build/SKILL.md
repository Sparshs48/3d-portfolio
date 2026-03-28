---
name: build
description: Run TypeScript check and production build for this Vite + React project
disable-model-invocation: true
argument-hint: "[--preview]"
---

Run a full production build for this portfolio project.

Steps:
1. Run `cd D:/portfolio3/3d-portfolio && npm run build` to type-check and build
2. If it fails, read the error output carefully and fix the issue
3. After a successful build, report what was output to `dist/`
4. If $ARGUMENTS contains "--preview", also run `npm run preview` to serve locally

Report any TypeScript errors with exact file:line references.
