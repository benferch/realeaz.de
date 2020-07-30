import styles from './Text.module.sass';
import PropTypes from 'prop-types';

export default function Text({ type, vertical, children }) {
	if (vertical) {
		if (type == 'lowlight') {
			return <p className={`${styles.text} ${styles.lowlight} ${styles.vertical}`}>{children}</p>;
		} else {
			return <p className={styles.text}>{children}</p>;
		}
	} else {
		if (type == 'lowlight') {
			return <p className={`${styles.text} ${styles.lowlight}`}>{children}</p>;
		} else {
			return <p className={styles.text}>{children}</p>;
		}
	}
}

Text.propTypes = {
	type: PropTypes.oneOf(['lowlight']),
};
