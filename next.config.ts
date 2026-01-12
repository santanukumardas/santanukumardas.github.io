import type { NextConfig } from "next";

const isGithubActions = process.env.GITHUB_ACTIONS === 'true';

const nextConfig: NextConfig = {
  output: 'export',
  // On GitHub Pages, we need to prefix paths with the repository name.
  // This will be empty once the custom domain santanu.one is active.
  basePath: isGithubActions ? '/personal-website' : '',
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
