const defaultTheme = require('tailwindcss/defaultTheme');
const colors = require('tailwindcss/colors');

module.exports = {
	purge: ['./**/*.html', './**/*.tsx', './**/*.ts'],
	darkMode: 'class',
	theme: {
		container: {
			center: true,
		},
		colors: {
			transparent: 'transparent',
			gray: colors.trueGray,
			emerald: colors.emerald,
		},
		extend: {
			fontFamily: {
				sans: ['Inter var', ...defaultTheme.fontFamily.sans],
			},
			textColor: {
				muted: 'rgb(115, 115, 115)',
			},
		},
	},
	variants: {
		extend: {},
	},
	plugins: [],
};
