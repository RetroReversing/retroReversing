This is a Github Pages site all about reverse engineering and the source code for retro video games. The audience is technical.
Always read and respect the contents of (Contributing.md)[./Contributing.md] when making changes.

Do not do any git operations! Multiple changes will be made by different agents so git operations will effect their work.

## CSS colours
Always use design tokens from `public/css/variables.css` (`--rr-color-*`) for colours, borders, and surfaces. Do not hardcode hex/rgb values in new CSS unless no suitable token exists yet - add a token to `variables.css` instead. Tokens adapt to dark mode via `@media (prefers-color-scheme: dark)` and homepage feed overrides on `body.home-page`.

Load the following Skill: ./codex/skills/retroreversing-contributing/SKILL.md