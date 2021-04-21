import ':assets/css/globals.css';
import type { AppProps } from 'next/app';
import { AnimatePresence } from 'framer-motion';
import { ThemeProvider } from 'next-themes';

export default function MyApp(props: AppProps) {
	const { Component, pageProps, router } = props;
	return (
		<AnimatePresence exitBeforeEnter>
			<ThemeProvider attribute="class" defaultTheme="system">
				<Component {...pageProps} key={router.route} />
			</ThemeProvider>
		</AnimatePresence>
	);
}
