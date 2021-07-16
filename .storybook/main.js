module.exports = {
	stories: [
		'../components/**/*.stories.mdx',
		'../components/**/*.stories.@(js|jsx|ts|tsx)',
	],
	typescript: {
		reactDocgen: 'react-docgen-typescript',
		check: true,
	},
	addons: [
		'@storybook/addon-links',
		'@storybook/addon-essentials',
		'@nextjs/storybook-plugin',
	],
};
