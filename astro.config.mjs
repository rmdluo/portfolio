import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import vercel from '@astrojs/vercel';
// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [tailwindcss()]
  },

  image: {
    // Allow remote image optimization from S3 and gallery domains
    domains: ['rmdluo-portfolio.s3.us-east-1.amazonaws.com', import.meta.env.VITE_GALLERY_LINK],
  },

  adapter: vercel()
});