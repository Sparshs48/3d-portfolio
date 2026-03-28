---
name: commit
description: Create a conventional git commit for this portfolio project
disable-model-invocation: true
argument-hint: "[message]"
---

Create a git commit for this portfolio project.

1. Run `git -C D:/portfolio3/3d-portfolio diff --staged` to see staged changes
2. If nothing is staged, run `git -C D:/portfolio3/3d-portfolio status` and report what's unstaged
3. Draft a commit message following Conventional Commits format:
   - `feat:` new feature or section
   - `fix:` bug fix
   - `style:` CSS/visual changes only
   - `refactor:` code restructure
   - `perf:` performance improvement (3D, animation)
   - `chore:` config, deps, tooling
4. If $ARGUMENTS is provided, use it as the commit message subject
5. Keep subject under 72 characters
6. Create the commit with: `git -C D:/portfolio3/3d-portfolio commit -m "<message>"`

Do NOT use `--no-verify`. Do NOT amend existing commits.
