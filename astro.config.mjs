// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

const site = process.env.URL;

export default defineConfig({
	site,
	output: 'static',
	integrations: site ? [sitemap()] : [],
});
