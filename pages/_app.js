import '../assets/css/global.sass';
import { AnimatePresence } from 'framer-motion';

export default function MyApp(props) {
	const { Component, pageProps, router } = props;
	return (
		<AnimatePresence exitBeforeEnter>
			<Component {...pageProps} key={router.route} />
		</AnimatePresence>
	);
}
