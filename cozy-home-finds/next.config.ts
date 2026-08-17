import type { NextConfig } from "next";
import createMDX from "@next/mdx";
// Removed direct plugin imports for Turbopack serialization

const nextConfig: NextConfig = {
  images: {
    formats: ['image/avif', 'image/webp'],
    minimumCacheTTL: 31536000,
  },
  pageExtensions: ['js', 'jsx', 'md', 'mdx', 'ts', 'tsx'],
};

const withMDX = createMDX({
  extension: /\.mdx?$/,
  options: {
    // @ts-ignore: Next.js Turbopack requires string plugin names
    remarkPlugins: [['remark-frontmatter'], ['remark-mdx-frontmatter']],
    rehypePlugins: [],
  },
});

export default withMDX(nextConfig);
