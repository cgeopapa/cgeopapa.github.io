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
			colors: {
				// Same as the color of variable --mdc-theme-primary at src/global.css
				'accent': '#415bd1'
			},
			maxHeight: {
				'animation-end': '500rem',
			},
			borderWidth: {
				'1': '1px',
			}
		},
	}
}
