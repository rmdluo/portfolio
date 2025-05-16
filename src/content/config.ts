import { defineCollection, z } from 'astro:content';

const projectsCollection = defineCollection({
    type: 'content',
    schema: z.object({
        title: z.string(),
        description: z.string(),
        date: z.string(),
        tags: z.array(z.string()),
        featured: z.boolean(),
        github: z.string().url()
    })
});

export const collections = {
    'projects': projectsCollection
}; 