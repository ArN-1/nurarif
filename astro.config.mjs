import sitemap from '@astrojs/sitemap';
import tailwind from '@astrojs/tailwind';
import vercel from '@astrojs/vercel/serverless';
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
	site: 'https://nurarif.com/', // Required for sitemap -> Replace with your site's URL
	output: 'hybrid',
	integrations: [tailwind(), sitemap()],
	adapter: vercel(),
	buildOptions: {
		// Direktori build untuk koleksi Cheat Sheet
		buildDir: '../public/cheatsheets',
	},

	// Konfigurasi output HTML
	outputOptions: {
		// URL situs untuk halaman HTML yang dihasilkan
		siteUrl: '/cheatsheets', // Ubah dari 'cheatsheets' ke '/cheatsheets'
	},
});
