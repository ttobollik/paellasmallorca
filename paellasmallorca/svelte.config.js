/*

// FOR STATIC SITE GENERATION

import adapter from '@sveltejs/adapter-auto';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

// @type {import('@sveltejs/kit').Config} 
const config = {
	// Consult https://svelte.dev/docs/kit/integrations
	// for more information about preprocessors
	preprocess: vitePreprocess(),

	kit: {
		// adapter-auto only supports some environments, see https://svelte.dev/docs/kit/adapter-auto for a list.
		// If your environment is not supported, or you settled on a specific environment, switch out the adapter.
		// See https://svelte.dev/docs/kit/adapters for more information about adapters.
		adapter: adapter()
	}
};

export default config;

*/

import adapter from '@sveltejs/adapter-static';

const config = {
  kit: {
    adapter: adapter({
      // Default options
      pages: 'build',
      assets: 'build',
      fallback: 'index.html',
    }),
	prerender: {
      entries: ['*'],
    },
    paths: {
      base: '/paellasmallorca',
    },
  },
};

export default config;