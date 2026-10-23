import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const events = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/events' }),
  schema: z.object({
    title: z.string(),
    date: z.string(),
    location: z.string().default('Main Hall JKI Mawar Saron'),
    category: z.string().default('Ibadah Raya'),
    image: z.string(),
    featured: z.boolean().default(false),
    actionUrl: z.string().optional(),
    actionText: z.string().optional(),
  }),
});

const bulletin = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/bulletin' }),
  schema: z.object({
    title: z.string(),
    date: z.string(),
    image: z.string(),
    theme: z.string().optional(),
    fileUrl: z.string().optional(),
  }),
});

const sermons = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/sermons' }),
  schema: z.object({
    title: z.string(),
    speaker: z.string(),
    date: z.string(),
    passage: z.string().optional(),
    image: z.string().optional(),
    youtubeId: z.string().optional(),
    series: z.string().optional(),
  }),
});

export const collections = { events, bulletin, sermons };
