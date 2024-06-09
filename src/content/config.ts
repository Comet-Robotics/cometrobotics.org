import { defineCollection, z } from 'astro:content'

const statSchema = z.object({
  name: z.string(),
  value: z.number(),
  icon: z.string(),
})

const termSchema = z.object({
  season: z.enum(['Spring', 'Summer', 'Fall']),
  year: z.number(),
})

const projectSchema = z.object({
    projectTitle: z.string(),
    shortDescription: z.string(),
    deprecated: z.boolean().default(false),
    stats: z.array(statSchema),
    startSeason: termSchema,
    endSeason: termSchema.optional(),
    mainImage: z.object({ src: z.string().url(), alt: z.string() }),
  })

const projectCollection = defineCollection({
  type: 'content',
  schema: projectSchema,
})

export const collections = {
  'projects': projectCollection,
}
