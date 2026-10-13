# lukeacharbonneau.com

Personal website, built with [Astro](https://astro.build) as a fully static site (no client-side JavaScript) and hosted on AWS S3 + CloudFront.

Live: https://www.lukeacharbonneau.com/

## Development

Requires Node 22+ (see `.nvmrc`).

```sh
npm install
npm run dev      # http://localhost:4321
npm run build    # type-check + build to dist/
npm run preview  # serve dist/ locally
```

## Editing content

| What                    | Where                    |
| ----------------------- | ------------------------ |
| Name, links, nav        | `src/data/site.ts`       |
| Projects                | `src/data/projects.ts`   |
| Resume (HTML version)   | `src/data/resume.ts`     |
| Resume / thesis PDFs    | `public/files/`          |
| Page text               | `src/pages/*.astro`      |
| Colors, fonts, spacing  | `src/styles/global.css`  |

Images go in `src/assets/` and are converted to responsive WebP at build time.

## Infrastructure

Hosted on **AWS Amplify Hosting** (app `personal-website`, region us-west-1), which builds and deploys automatically on every push to `main`. DNS is in Route 53.

Configuration that lives in this repo:

- `amplify.yml`: build spec (Node 22, `npm run build`, publishes `dist/`)
- `customHttp.yml`: security headers (CSP, HSTS, etc.) and long-term caching for fingerprinted assets

Configured in the Amplify console (App settings → Rewrites and redirects):

| Source                        | Target                            | Type                                   |
| ----------------------------- | --------------------------------- | -------------------------------------- |
| `https://lukeacharbonneau.com` | `https://www.lukeacharbonneau.com` | 301 (Amplify appends the path)         |
| `/<*>`                        | `/404.html`                       | 404-200 (serves 404.html with a 404 status) |

Note: the plain `404` type answers with a 302 redirect to `/404.html` instead, so use `404-200`.

`.github/workflows/ci.yml` builds every PR and branch push, so broken builds are caught before they reach `main`.

## License

GPLv3. Feel free to use this as a template; a link back is appreciated but not required.
