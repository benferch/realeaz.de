import ':assets/css/globals.scss';
import type { AppProps } from 'next/app';
import { AnimatePresence } from 'framer-motion';
import { ThemeProvider } from 'next-themes';
import { DefaultSeo } from 'next-seo';

export default function MyApp(props: AppProps) {
	const { Component, pageProps, router } = props;
	return (
		<AnimatePresence exitBeforeEnter>
			<ThemeProvider attribute="class" defaultTheme="system">
				<DefaultSeo
					defaultTitle="Ben-J. Ferch"
					titleTemplate="%s | Ben-J. Ferch"
					description="Hey I'm Ben, a developer from Germany."
					canonical="https://benferch.de"
					openGraph={{
						type: 'website',
						locale: 'en_US',
						url: 'https://benferch.de',
						site_name: 'Ben-J. Ferch',
					}}
					twitter={{
						handle: '@_benferch',
						site: '@_benferch',
						cardType: 'summary',
					}}
				/>
				<Component {...pageProps} key={router.route} />
			</ThemeProvider>
		</AnimatePresence>
	);
}
