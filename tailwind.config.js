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
			'special-b': '#00aaff',
			'special-g': '#00ffaa',
			'muted-g': '#008f5f',
		},
		extend: {
			minHeight: {
				'screen-80': '80vh',
			},
			maxWidth: {
				'1/3': '33.333333%',
				'2/3': '66.666667%',
			},
			fontFamily: {
				sans: ['Inter var', ...defaultTheme.fontFamily.sans],
			},
			textColor: {
				muted: 'rgb(115, 115, 115)',
				mutedLight: 'rgb(166, 166, 166)',
				'special-b': '#00aaff',
				'special-g': '#00ffaa',
				'muted-g': '#008f5f',
				twitter: '#1DA1F2',
				linkedin: '#0e76a8',
				github: '#333333',
			},
			boxShadow: {
				button: '-10px 8px #737373',
				'special-g': '0 0 10px #00ffaa',
				'special-b': '0 0 10px #00aaff',
			},
		},
	},
	variants: {
		extend: {},
	},
	plugins: [],
};
