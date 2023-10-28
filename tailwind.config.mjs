/** @type {import('tailwindcss').Config} */
export default {
	darkMode:'class',
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			gridTemplateColumns: {
        'auto-fill-250': 'repeat(auto-fit, minmax(250px, 1fr))',
				'auto-fill-150': 'repeat(auto-fit, minmax(150px, 1fr))',
      },
		},
	},
	plugins: [require('daisyui')],
	
}
