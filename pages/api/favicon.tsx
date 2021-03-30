import { NextApiRequest, NextApiResponse } from 'next';
import { parseFavicon } from 'parse-favicon';

export default function Favicon(req: NextApiRequest, res: NextApiResponse) {
	async function textFetcher(url) {
		return await fetch(resolveUrl(url, req.query.url)).then((res) =>
			res.text()
		);
	}
	async function bufferFetcher(url) {
		return await fetch(resolveUrl(url, req.query.url)).then((res) =>
			res.arrayBuffer()
		);
	}
	function resolveUrl(url, base) {
		return new URL(url, base).href;
	}
	//@ts-ignore This is fine.
	parseFavicon(req.query.url, textFetcher, bufferFetcher).subscribe((icon) => {
		let favicon = icon.reference === '/favicon.ico' && {
			url: `${req.query.url}${icon.url}`,
			type: icon.type,
		};
		if (favicon) {
			res.writeHead(200, {
				'Content-Type': `${favicon.type}`,
			});
			res.write(favicon.url);
			res.end();
		}
	});
}
