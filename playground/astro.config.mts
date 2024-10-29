import tailwind from '@astrojs/tailwind';
import { createResolver } from 'astro-integration-kit';
import { hmrIntegration } from 'astro-integration-kit/dev';
import { defineConfig } from 'astro/config';

const { default: pipecms } = await import('@pipecms/astro');

// https://astro.build/config
export default defineConfig({
	integrations: [
		tailwind(),
		pipecms(),
		hmrIntegration({
			directory: createResolver(import.meta.url).resolve(
				'../packages/pipecms-astro/dist'
			)
		})
	]
});
