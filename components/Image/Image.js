import styles from './Image.module.sass';
import { motion } from 'framer-motion';

export default function Image({ spinning, src, alt }) {
	return (
		<motion.div animate={{ scale: 1 }} transition={{ duration: 0.5 }}>
			<img src={src} alt={alt}></img>
		</motion.div>
	);
}
