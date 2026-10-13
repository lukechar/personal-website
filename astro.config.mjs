// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://www.lukeacharbonneau.com',
  trailingSlash: 'ignore',
  // Lossless whitespace handling so prose with inline links renders as written.
  compressHTML: true,
  build: {
    format: 'directory',
    // Keep all CSS in external files so the CloudFront CSP can stay strict (style-src 'self').
    inlineStylesheets: 'never',
  },
  integrations: [sitemap()],
});
