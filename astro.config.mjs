import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';

import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
	site: 'https://ludovic.dean.github.io/astro-blog',
	integrations: [mdx(), sitemap()],
	output: "static"
});
