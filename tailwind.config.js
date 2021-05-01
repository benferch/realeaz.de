const defaultTheme = require('tailwindcss/defaultTheme');
const colors = require('tailwindcss/colors');

module.exports = {
	mode: 'jit',
	purge: ['./**/*.html', './**/*.tsx', './**/*.ts'],
	darkMode: 'class',
	theme: {
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
			brandBlue: '#00aaff',
			brandGreen: '#00ffaa',
		},
		extend: {
			fontFamily: {
				mono: ['JetBrains Mono', ...defaultTheme.fontFamily.mono],
			},
			textShadow: {
				white: '0 0 20px #fff',
				active: '0 0 20px #00aaff',
				hover: '0 0 30px #00ffaa',
			},
			keyframes: {
				wave: {
					'0%, 50%, 100%': { transform: 'rotate(0deg)' },
					'25%, 75%': { transform: 'rotate(20deg)' },
				},
			},
			animation: {
				wave: 'wave 1s ease-in-out 1s 4',
			},
		},
	},
	variants: {
		extend: {},
	},
	plugins: [require('tailwindcss-textshadow')],
};
