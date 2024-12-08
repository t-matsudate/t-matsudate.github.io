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

const fontAwesomePath = path.resolve('node_modules', '@fortawesome', 'fontawesome-free', 'scss');
const githubMarkdownPath = path.resolve('node_modules', 'github-markdown-css');
const highlightPath = path.resolve('node_modules', 'highlight.js', 'scss');
const katexPath = path.resolve('node_modules', 'katex', 'dist');
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
          additionalData: `@import "${fontAwesomePath}/fontawesome";
          @import "${fontAwesomePath}/solid";
          @import "${fontAwesomePath}/brands";
          @import "${githubMarkdownPath}/github-markdown.css";
          @import "${highlightPath}/github-dark";
          @import "${katexPath}/katex.min";
          @import "${stylesPath}/common";`
        }
      }
    }
  }
});
