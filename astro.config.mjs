import markdoc from '@astrojs/markdoc'
import mdx from '@astrojs/mdx'
import react from '@astrojs/react'
import sitemap from '@astrojs/sitemap'
import keystatic from '@keystatic/astro'
import { defineConfig } from 'astro/config'
import { astroOgImagesGenerator } from 'og-images-generator/astro'

// https://astro.build/config
export default defineConfig({
  site: 'https://cometrobotics.org',
  integrations: [react(), sitemap(), mdx(), astroOgImagesGenerator(), markdoc(),
  // NOTE: currently the site is deployed statically on github pages, so we don't have the ability to use keystatic in production, so we
  // only include the keystatic integration when running Vite in dev mode. it won't be included in the production build.
  // TODO: in the future, we should consider deploying somewhere (robopc? cloudflare?) that would allow us to run keystatic in production
  // so future editors of site content can access keystatic on prod site, without having to run dev server locally.
    import.meta.env.DEV ? keystatic() : null],
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
  },
})
