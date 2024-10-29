import { defineIntegration } from 'astro-integration-kit';

export const integration = defineIntegration({
	name: '@pipecms/astro',
	setup() {
		return {
			hooks: {}
		};
	}
});
