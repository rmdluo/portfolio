import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import vercel from '@astrojs/vercel';
// https://astro.build/config
export default defineConfig({
  integrations: [image({ serviceEntryPoint: "@astrojs/image/sharp" })],
  
  vite: {
    plugins: [tailwindcss()]
  },

  image: {
    remotePatterns: [{ protocol: "https" }],
  },

  adapter: vercel()
});