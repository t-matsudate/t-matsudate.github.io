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
import path from 'node:path';

const stylesPath = path.resolve('src', 'styles');
const layoutsPath = path.resolve('src', 'layouts');
const componentsPath = path.resolve('src', 'components');
const typesPath = path.resolve('src', '@types');

// https://astro.build/config
export default defineConfig({
  site: 'https://t-matsudate.github.io',
  outDir: './docs',
  markdown: {
    remarkPlugins: [
      gfm,
      gemoji,
      a11y,
      images,
      math
    ],
    rehypePlugins: [
      slug,
      autolinkHeadings,
      highlight,
      katex
    ]
  },
  integrations: [
    react(),
    sitemap(),
    mdx(),
  ],
  vite: {
    resolve: {
      alias: {
        "@layouts": layoutsPath,
        "@components": componentsPath,
        "@types": typesPath
      }
    },
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `@use "${stylesPath}/common" as *;
          @import url("https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@6.7.2/css/fontawesome.min.css");
          @import url("https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@6.7.2/css/solid.min.css");
          @import url("https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@6.7.2/css/brands.min.css");
          @import url("https://cdn.jsdelivr.net/npm/github-markdown-css@5.8.1/github-markdown.min.css");
          @import url("https://cdn.jsdelivr.net/npm/katex@0.16.22/dist/katex.min.css");
          @import url("https://cdn.jsdelivr.net/npm/highlight.js@11.11.1/styles/github-dark.min.css");`
        }
      }
    }
  },
  redirects: {
    '/articles/rtmp-specification/': '/articles/rtmp-specification/1'
  }
});
