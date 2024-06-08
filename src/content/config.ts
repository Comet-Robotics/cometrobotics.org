import { defineCollection, z } from 'astro:content';

const statSchema = z.object({
    name: z.string(),
    value: z.number(),
    icon: z.string(),
});

const termSchema = z.object({
    season: z.enum(['Spring', 'Summer', 'Fall']),
    year: z.number(),
});

const projectCollection = defineCollection({ type: 'content', schema: z.object({
    projectTitle: z.string(),
    shortDescription: z.string(),
    images: z.array(z.string().url()),
    stats: z.array(statSchema),
    deprecated: z.boolean().default(false),
    startSeason: termSchema,
    endSeason: termSchema.optional(),
    mainImage: z.string().url(),
}) });


export const collections = {
  'projects': projectCollection,
};