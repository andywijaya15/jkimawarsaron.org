import { defineCollection, z } from 'astro:content';

const events = defineCollection({
  schema: z.object({
    title: z.string(),
    date: z.string().optional(),
    location: z.string().optional(),
    category: z.string().optional(),
    image: z.string().optional(),
    featured: z.boolean().optional(),
    actionUrl: z.string().optional(),
    actionText: z.string().optional(),
  }),
});

const bulletin = defineCollection({
  schema: z.object({
    title: z.string(),
    date: z.string().optional(),
    image: z.string().optional(),
    theme: z.string().optional(),
    fileUrl: z.string().optional(),
  }),
});

const sermons = defineCollection({
  schema: z.object({
    title: z.string(),
    speaker: z.string().optional(),
    date: z.string().optional(),
    passage: z.string().optional(),
    image: z.string().optional(),
    youtubeId: z.string().optional(),
    series: z.string().optional(),
  }),
});

export const collections = {
  events,
  bulletin,
  sermons,
};
