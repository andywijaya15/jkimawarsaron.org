import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import sitemap from '@astrojs/sitemap';

const isDev = process.argv.includes('dev') || process.env.npm_lifecycle_event === 'dev';

const integrations = [
  react(),
  sitemap({
    filter: (page) => !page.includes('/admin') && !page.includes('/keystatic'),
  }),
];

if (isDev) {
  const keystatic = (await import('@keystatic/astro')).default;
  integrations.push(keystatic());
}

// https://astro.build/config
export default defineConfig({
  site: 'https://jkimawarsaron.org',
  integrations,
});
