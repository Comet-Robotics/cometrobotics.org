import { glob } from 'astro/loaders'
import { defineCollection } from 'astro:content'

const projectCollection = defineCollection({
  loader: glob({
    pattern: '**/*.mdoc',
    base: 'src/content/projects',
  })
})

export const collections = {
  projects: projectCollection,
}
