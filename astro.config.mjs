import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import sitemap from '@astrojs/sitemap';
import mdx from '@astrojs/mdx';
import { astroOgImagesGenerator } from 'og-images-generator/astro';
import keystatic from '@keystatic/astro'
import markdoc from '@astrojs/markdoc';



// https://astro.build/config
export default defineConfig({
  site: 'https://cometrobotics.org',
  integrations: [react(), sitemap(), mdx(), astroOgImagesGenerator(), markdoc(), keystatic()],
  redirects: {
    // comets giving day 2025
    '/give': 'https://givingday.utdallas.edu/giving-day/99039/department/99132',
    // general student rsvp for spring 2025 banquet
    '/banquet-s25': 'https://lu.ma/q6d4ofxd',
    // faculty/staff rsvp for spring 2025 banquet
    '/banquet-s25-f': 'https://lu.ma/q6d4ofxd?coupon=JEW6KT',
    // supporters rsvp for spring 2025 banquet
    '/banquet-s25-s': 'https://lu.ma/q6d4ofxd?coupon=V09001',
    // sponsorship packet
    '/sponsor': 'https://static.cometrobotics.org/Comet%20Robotics%20Sponsorship%20Packet%20June%2018%202025.pdf',
  }
});
