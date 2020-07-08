const sitemap = require('nextjs-sitemap-generator');

sitemap({
	baseUrl: 'https://benferch.de',
	pagesDirectory: __dirname + '/pages',
	targetDirectory: 'public/',
});
