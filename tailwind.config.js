const defaultTheme = require('tailwindcss/defaultTheme');
const colors = require('tailwindcss/colors');

module.exports = {
	mode: 'jit',
	purge: ['./**/*.html', './**/*.tsx', './**/*.ts'],
	darkMode: 'class',
	theme: {
		extend: {
			container: {
				center: true,
			},
			colors: {
				transparent: 'transparent',
				white: '#fff',
				black: '#000',
				gray: colors.gray,
				twitter: '#1DA1F2',
				linkedin: '#0e76a8',
				github: '#333333',
			},
			fontFamily: {
				mono: ['JetBrains Mono', ...defaultTheme.fontFamily.mono],
			},
		},
	},
	variants: {
		extend: {},
	},
	plugins: [
		require('tailwindcss-textshadow'),
		require('@tailwindcss/typography'),
		require('@tailwindcss/aspect-ratio'),
	],
};
