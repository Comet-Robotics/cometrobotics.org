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
    // comets giving day 2024
    '/give': 'https://givingday.utdallas.edu/amb/robot',
    // general student rsvp for spring 2025 banquet
    '/banquet-s25': 'https://lu.ma/q6d4ofxd',
    // faculty/staff rsvp for spring 2025 banquet
    '/banquet-s25-f': 'https://lu.ma/q6d4ofxd',
    // supporters rsvp for spring 2025 banquet
    '/banquet-s25-s': 'https://lu.ma/q6d4ofxd',
  }
});
