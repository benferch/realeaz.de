import ':assets/css/style.css';
import type { AppProps } from 'next/app';
import { AnimatePresence } from 'framer-motion';
import { ThemeProvider } from 'next-themes';
import LanguageProvider from ':components/LanguageProvider';

export default function MyApp(props: AppProps) {
	const { Component, pageProps, router } = props;
	return (
		<AnimatePresence exitBeforeEnter>
			<ThemeProvider attribute="class" defaultTheme="system">
				<LanguageProvider>
					<Component {...pageProps} key={router.route} />
				</LanguageProvider>
			</ThemeProvider>
		</AnimatePresence>
	);
}
