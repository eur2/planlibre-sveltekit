/** @type {import('@sveltejs/kit').Config} */
import adapter from '@sveltejs/adapter-static';
import vercel from '@sveltejs/adapter-vercel';

const config = {
	kit: {
		// hydrate the <div id="svelte"> element in src/app.html
		target: '#svelte',
		adapter: vercel()
	}
};

export default config;
