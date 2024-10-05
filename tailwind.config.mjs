import defaultTheme from 'tailwindcss/defaultTheme';

/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				'jet': 'rgb(53 53 53 / 100%)',
				'ming': 'rgb(60 110 113 / 100%)',
				'gainsboro': 'rgb(217 217 217 / 100%)'
			},
			spacing: {
				'6.5': '1.625rem'
			},
			fontFamily: {
				sans: ['DM Sans Variable', ...defaultTheme.fontFamily.sans],
			}
		},
	},
	plugins: [],
}
