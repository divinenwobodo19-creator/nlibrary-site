import { defineConfig } from 'astro/config';

export default defineConfig({
  site: process.env.SITE_URL || 'https://YOUR-USERNAME.github.io',
  base: process.env.BASE_PATH || '/',
  output: 'static',
});