# Jayatheertha S G — Engineering Intelligence Portfolio

A production-ready React + Vite portfolio built around the concept **Engineering Intelligence**.

## Stack

- React
- Vite
- Modern CSS
- No UI framework required

## Run locally

```bash
npm install
npm run dev
```

Then open the local URL shown by Vite.

## Production build

```bash
npm run build
npm run preview
```

## Deployment

### Vercel
Import this repository into Vercel. Vercel detects Vite automatically.

### Netlify
Build command:

```bash
npm run build
```

Publish directory:

```text
dist
```

### GitHub Pages
Build the project with `npm run build`, then deploy the generated `dist` directory using GitHub Actions or another Pages deployment workflow.

## Updating portfolio content

Edit:

```text
src/data/portfolio.js
```

The UI components are intentionally separated from the portfolio data.

## Replacing the resume

Replace:

```text
public/resume/Jayatheertha_SG_Resume.pdf
```

Keep the same filename or update the download path in `src/App.jsx`.

## Adding projects

Add another object to the `projects` array in:

```text
src/data/portfolio.js
```

## Notes

The portfolio intentionally avoids fabricated metrics and uses the uploaded resume as its content source.
