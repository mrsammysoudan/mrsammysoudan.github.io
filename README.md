# Sammy Soudan — portfolio

Personal portfolio at https://mrsammysoudan.github.io, built with React and deployed to GitHub Pages.

## Development

Install the existing dependencies with `npm install`, then run `npm start`.
Run `npm run build` for the production bundle. The scripts retain the legacy OpenSSL option required by this project's Create React App 4 toolchain on newer Node versions.

## Updating the portfolio

- Edit project copy, technologies and gallery captions in `src/portfolio.js`.
- Edit the page sections and modal in `src/App.js`, and styling in `src/App.css`.
- Keep optimised project images in `public/images/projects/` with descriptive alternative text.
- Label team contributions, prototypes and archived designs accurately. Review screenshots for private data before publishing.
- The CV contact link requests a current CV by email instead of distributing an outdated document.

## Validation and publishing

Run `node node_modules/eslint/bin/eslint.js src/App.js src/portfolio.js src/index.js` and `npm run build`. Review the build on desktop and mobile, including filters, galleries, keyboard focus and the navigation menu.

`npm run deploy` publishes the production build to the existing `gh-pages` branch. Commit and push source changes separately so the source and deployed site remain in sync.

## October 2026 refresh

Six project case studies cover TailorCV, Dishify, ROXFIT, AiLoupe, AI for Wellbeing and TapMeet, with a separate Figma tooling section. Prayer Coach has been removed from the portfolio.

The galleries use real, optimised project assets: TailorCV demo/QA captures, saved Dishify simulator captures, ROXFIT implementation previews and an archived AiLoupe material-card design. Captions distinguish those sources. ROXFIT's user count describes the team platform, not sole authorship.
