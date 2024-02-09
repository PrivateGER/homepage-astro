import { defineConfig } from 'astro/config';

import vercel from "@astrojs/vercel/serverless";

// https://astro.build/config
export default defineConfig({
  output: "server",
  adapter: vercel({
    imagesConfig: {
      sizes: [320, 640, 1280, 1920]
    }
  })
});
