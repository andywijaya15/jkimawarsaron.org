import { defineConfig } from 'astro/config';
import react from '@astrojs/react';

const isDev = process.argv.includes('dev') || process.env.npm_lifecycle_event === 'dev';

const integrations = [react()];

if (isDev) {
  const keystatic = (await import('@keystatic/astro')).default;
  integrations.push(keystatic());
}

// https://astro.build/config
export default defineConfig({
  site: 'https://new.jkimawarsaron.org',
  integrations,
});
