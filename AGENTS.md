This is a Github Pages site all about reverse engineering and the source code for retro video games. The audience is technical.
Always read and respect the contents of (Contributing.md)[./Contributing.md] when making changes.

Always read the entire file at ./codex/skills/retroreversing-contributing/SKILL.md before editing site content. Do not fetch a truncated prefix, use a line limit, or stop after the opening sections.

Do not do git operations by default because multiple changes may be made by different agents. An explicit user request may authorize the necessary git operations for that request, including committing changes and raising a pull request.

## CSS colours
Always use design tokens from `public/css/variables.css` (`--rr-color-*`) for colours, borders, and surfaces. Do not hardcode hex/rgb values in new CSS unless no suitable token exists yet - add a token to `variables.css` instead. Tokens adapt to dark mode via `@media (prefers-color-scheme: dark)` and homepage feed overrides on `body.home-page`.
