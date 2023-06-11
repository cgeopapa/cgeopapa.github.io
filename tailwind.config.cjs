const plugin = require('tailwindcss/plugin');
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			fontFamily: {
				"sans": ["ropa", ...defaultTheme.fontFamily.sans]
			},
			gridTemplateColumns: {
				'auto': "repeat(auto-fit, minmax(5rem, 1fr))"
			},
			colors: ({ theme }) => ({
				'accent': '#415bd1'
			})
		},
	},
	plugins: [
		plugin(function ({ addBase }) {
			addBase({
				'@font-face': {
					fontFamily: 'ropa',
					src: 'url(fonts/RopaSans-Regular.ttf)'
				}
			})
		}),
	]
}
