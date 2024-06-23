import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import sitemap from '@astrojs/sitemap';
import mdx from '@astrojs/mdx';
import { astroOgImagesGenerator } from 'og-images-generator/astro';


// https://astro.build/config
export default defineConfig({
  site: 'https://cometrobotics.org',
  integrations: [react(), sitemap(), mdx(), astroOgImagesGenerator()],
  redirects: {
    '/give': 'https://givingday.utdallas.edu/amb/robot'
  }
});