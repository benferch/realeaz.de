import Head from 'next/head';
import calcAge from '../util/calcAge';

type Props = {
	title: string;
};

export default function HTMLHead({ title }: Props) {
	return (
		<Head>
			<meta charSet="utf-8" />
			<meta name="viewport" content="width=device-width, initial-scale=1" />
			<meta name="theme-color" content="#fcfbf8" />
			<meta
				name="description"
				content={`Hey, my name is Ben I\'m ${calcAge(
					'2002/08/10'
				)} years old from Rügen, and I am interested in Web development. Here you can find something about me and some projects.`}
			/>
			<meta
				name="keywords"
				content="Ben, Ferch, Rügen, Germany, Deutschland, Webentwicklung, Web development"
			/>
			<meta property="og:type" content="website" />
			<meta property="og:title" content={`${title}`} />
			<meta property="og:site_name" content="ben." />
			<meta
				property="og:description"
				content={`Hey, my name is Ben I\'m ${calcAge(
					'2002/08/10'
				)} years old from Rügen, and I am interested in Web development. Here you can find something about me and some projects.`}
			/>
			<meta property="og:url" content="https://benferch.de" />
			<meta property="og:image" content="" />
			<meta name="twitter:title" content={`${title}`} />
			<meta
				name="twitter:description"
				content={`Hey, my name is Ben I\'m ${calcAge(
					'2002/08/10'
				)} years old from Rügen, and I am interested in Web development. Here you can find something about me and some projects.`}
			/>
			<meta name="twitter:image" content="" />
			<meta name="twitter:site" content="@_benferch" />
			<meta name="twitter:creator" content="@_benferch" />
			<meta name="twitter:card" content="summary" />
			<link rel="canonical" href="https://benferch.de" />
			<meta name="author" content="Ben Ferch" />
			<meta name="robots" content="nofollow" />
			<title>{title}</title>
			<link rel="icon" href="/favicon.ico" />
		</Head>
	);
}
