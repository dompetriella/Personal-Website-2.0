import adapter from '@sveltejs/adapter-vercel';
import { vitePreprocess } from '@sveltejs/kit/vite';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://kit.svelte.dev/docs/integrations#preprocessors
	// for more information about preprocessors
	preprocess: vitePreprocess(),

	kit: {
		adapter: adapter(),
		target: '#svelte',
		vite: {
			optimizeDeps: {
				include: ['@carbon/icons-svelte']
			}
		},
		prerender: {
			crawl: true,
			enabled: true,
			onError: 'fail',
			pages: ['*'],
		},
		paths: {
			base: '/my-app',
			assets: '/my-app'
		},
		ssr: true,
		amp: false,
		trailingSlash: 'never',
		prerender: {
			enabled: true,
			entries: ['*', '/about', '/contact']
		},
	}
};

export default config;
