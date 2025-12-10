import sitemap from '@astrojs/sitemap';
import tailwind from '@astrojs/tailwind';
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
	site: 'https://arn-1.github.io',
	base: '/nurarif',
	output: 'static',
	integrations: [tailwind(), sitemap()],
	build: {
		assets: '_astro',
		inlineStylesheets: 'auto',
	},
});
