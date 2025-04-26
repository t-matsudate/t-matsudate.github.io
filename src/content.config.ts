import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';

const cards = defineCollection({
  loader: glob({
    pattern: "**\/*.json",
    base: "./src/content/cards",
  }),
});

const headings = defineCollection({
  loader: glob({
    pattern: "**\/*.json",
    base: "./src/content/headings"
  }),
});

const repositories = defineCollection({
  loader: glob({
    pattern: "**\/*.json",
    base: './src/content/repositories'
  }),
});

export const collections = { cards, headings, repositories };
