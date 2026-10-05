import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const projectLinks = z
  .array(
    z.object({
      label: z.string().min(1),
      url: z.url(),
    }),
  )
  .default([]);

const projects = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/projects' }),
  schema: z.object({
    title: z.string().min(1),
    summary: z.string().min(1),
    role: z.string().min(1),
    timeframe: z.string().min(1),
    stack: z.array(z.string()).default([]),
    status: z.enum(['draft', 'published']).default('draft'),
    confidentiality: z.enum(['public', 'abstracted', 'rebuilt']),
    order: z.number().int().default(100),
    featured: z.boolean().default(false),
    tags: z.array(z.string()).default([]),
    outcome: z.string().optional(),
    links: projectLinks,
    videoUrl: z.url().optional(),
  }),
});

const ideas = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/ideas' }),
  schema: z.object({
    title: z.string().min(1),
    date: z.coerce.date(),
    excerpt: z.string().min(1),
    status: z.enum(['draft', 'published']).default('draft'),
    tags: z.array(z.string()).default([]),
    relatedProjects: z.array(z.string()).default([]),
  }),
});

export const collections = { projects, ideas };
