import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
  site: 'https://007ian.github.io',
  base: '/Ians_Work',
  integrations: [
    tailwind({
      applyBaseStyles: false,
    }),
  ],
});

