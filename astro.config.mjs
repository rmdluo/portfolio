import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import vercel from '@astrojs/vercel';
// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [tailwindcss()]
  },

  image: {
    // Example: Allow remote image optimization from a single domain
    domains: [import.meta.env.VITE_GALLERY_LINK],
  },

  adapter: vercel()
});