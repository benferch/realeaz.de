import Head from 'next/head';

export default function CustomHead({
	title,
	desc,
	tags,
	children,
	noIndex,
}: {
	title: string;
	desc: string;
	tags?: string;
	noIndex?: boolean;
	children?: React.ReactNode;
}) {
	return (
		<Head>
			<meta charSet="utf-8" />
			<meta name="viewport" content="width=device-width, initial-scale=1" />
			<meta name="theme-color" content="#121212" />
			<title>{title}</title>
			<link rel="icon" href="./favicon.ico" />
			<meta name="description" content={desc} />
			<meta name="keywords" content={tags} />
			<meta property="og:type" content="website" />
			<meta property="og:title" content={title} />
			<meta property="og:site_name" content={title} />
			<meta property="og:description" content={desc} />
			<meta property="og:url" content="https://benferch.de" />
			<meta property="og:image" content="" />
			<meta name="author" content="Ben-Jannik Ferch" />
			{noIndex ? (
				<meta name="robots" content="none" />
			) : (
				<meta name="robots" content="nofollow" />
			)}
			{children}
		</Head>
	);
}
