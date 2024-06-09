import { defineCollection, z } from 'astro:content'

const statSchema = z.object({
  name: z.string(),
  value: z.string(),
  icon: z.string(),
})

const projectCollection = defineCollection({
  type: 'content',
  schema: z.object({
    projectTitle: z.string(),
    shortDescription: z.string(),
    deprecated: z.boolean().default(false),
    stats: z.array(statSchema),
    mainImage: z.object({ src: z.string(), alt: z.string() }),
    draft: z.boolean().default(false)
  }),
})

export const collections = {
  projects: projectCollection,
}
