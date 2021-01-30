import '../assets/css/global.sass';
import type { AppProps } from 'next/app';
import { AnimatePresence } from 'framer-motion';

export default function MyApp(props: AppProps) {
	const { Component, pageProps, router } = props;
	return (
		<AnimatePresence exitBeforeEnter>
			<Component {...pageProps} key={router.route} />
		</AnimatePresence>
	);
}
