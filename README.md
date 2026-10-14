# lukeacharbonneau.com

Personal website, built with [Astro](https://astro.build) as a fully static site (no client-side JavaScript).

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

## License

GPLv3. Feel free to use this as a template; a link back is appreciated but not required.
