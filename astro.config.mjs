import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  // Update this to your production domain before deployment
  site: process.env.SITE_URL || 'https://fastweb.example.com',
  // Compress HTML output in production
  compressHTML: true,
  integrations: [
    tailwind(),
    sitemap(),
  ],
  // Native Astro image optimization (WebP/AVIF generated automatically via <Image> component)
  image: {
    // Allow optimization for all local images
    remotePatterns: [],
  },
  vite: {
    resolve: {
      alias: {
        '@': '/src',
        '@components': '/src/components',
        '@layouts': '/src/layouts',
        '@pages': '/src/pages',
        '@scripts': '/src/scripts',
        '@config': '/src/config',
        '@styles': '/src/styles',
      },
    },
    build: {
      // Improve tree-shaking and minimize output
      cssMinify: true,
      minify: 'esbuild',
    },
  },
});
