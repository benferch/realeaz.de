import styles from './Container.module.sass';
import PropTypes from 'prop-types';
import { motion } from 'framer-motion';

export default function Container({ type, id, children }) {
	if (type == 'fullwidth') {
		return (
			<motion.div
				className={styles.fullwidthcontainer}
				animate={{ opacity: 1 }}
				initial={{ opacity: 0 }}
				exit={{}}
				transition={{
					duration: 0.6,
					ease: [0.6, -0.05, 0.01, 0.99],
				}}
				id={id}
			>
				{children}
			</motion.div>
		);
	} else {
		return (
			<motion.div
				className={styles.container}
				animate={{ opacity: 1 }}
				initial={{ opacity: 0 }}
				exit={{}}
				transition={{
					duration: 0.6,
					ease: [0.6, -0.05, 0.01, 0.99],
				}}
				id={id}
			>
				{children}
			</motion.div>
		);
	}
}

Container.propTypes = {
	type: PropTypes.string,
	children: PropTypes.any,
	id: PropTypes.any,
};
