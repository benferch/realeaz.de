import styles from './Container.module.sass';
import { motion } from 'framer-motion';

export interface ContainerProps {
	children: JSX.Element[] | JSX.Element;
}

const Container: React.FunctionComponent<ContainerProps> = ({ children }) => {
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
		>
			{children}
		</motion.div>
	);
};

export default Container;
