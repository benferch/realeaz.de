module.exports = {
	siteUrl: 'https://benferch.de',
	generateRobotsTxt: true,
	robotsTxtOptions: {
		policies: [
			{ userAgent: '*', allow: '/' },
			{ userAgent: '*', disallow: ['/imprint', '/privacy'] },
		],
	},
};
