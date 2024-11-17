// @ts-check
import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import sitemap from '@astrojs/sitemap';
import mdx from '@astrojs/mdx';
import a11y from '@fec/remark-a11y-emoji';
import gemoji from 'remark-gemoji';
import gfm from 'remark-gfm';
import images from 'remark-images';
import math from 'remark-math';
import autolinkHeadings from 'rehype-autolink-headings';
import highlight from 'rehype-highlight';
import katex from 'rehype-katex';
import slug from 'rehype-slug';

// https://astro.build/config
export default defineConfig({
  markdown: {
    remarkPlugins: [
      gfm,
      gemoji,
      a11y,
      images,
      math
    ],
    rehypePlugins: [
      autolinkHeadings,
      slug,
      highlight,
      katex
    ]
  },
  integrations: [
    react(),
    sitemap(),
    mdx(),
  ]
});
