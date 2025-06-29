import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';

const cards = defineCollection({
  loader: glob({
    pattern: '**/*.json',
    base: './src/content/cards',
  }),
});

const headings = defineCollection({
  loader: glob({
    pattern: '**/*.json',
    base: './src/content/headings'
  }),
});

const repositories = defineCollection({
  loader: glob({
    pattern: '**/*.json',
    base: './src/content/repositories'
  }),
});

const rtmpSpecifications = defineCollection({
  loader: glob({
    pattern: '**/*.{md,mdx}',
    base: './src/content/articles/rtmp-specification'
  })
});

const seekingJobsWithDisability = defineCollection({
  loader: glob({
    pattern: '**/*.{md,mdx}',
    base: './src/content/articles/seeking-jobs-with-disability'
  })
});

export const collections = {
  cards,
  headings,
  repositories,
  rtmpSpecifications,
  seekingJobsWithDisability
};
