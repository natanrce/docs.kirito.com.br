import createMDX from '@next/mdx';

import remarkGfm from 'remark-gfm';
import remarkToc from 'remark-toc';
import remarkParse from 'remark-parse';
import remarkRehype from 'remark-rehype';

import rehypeSlug from 'rehype-slug';

/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ['js', 'jsx', 'ts', 'tsx', 'md', 'mdx'],
  reactStrictMode: true
};

const withMDX = createMDX({
  options: {
    extension: /\.mdx?$/,
    remarkPlugins: [remarkGfm, remarkToc, remarkParse, remarkRehype],
    rehypePlugins: [rehypeSlug]
  }
});

export default withMDX(nextConfig);
