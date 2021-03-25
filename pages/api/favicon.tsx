const getFavicons = require('get-website-favicon');

export default function Favicon(req, res) {
	getFavicons(req.query.url).then((data) => {
		res.status(200).send(data.icons[0].src);
	});
}
