import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import tailwind from "@astrojs/tailwind";
import icon from "astro-icon";

import netlify from "@astrojs/netlify";

// https://astro.build/config
export default defineConfig({
  site: 'https://ludovic.dean.github.io',
  base: '/devendevenir',
  integrations: [mdx(), sitemap(), tailwind(), icon()],
  output: "static",
  adapter: netlify()
});