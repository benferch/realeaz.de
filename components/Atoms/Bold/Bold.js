import styles from './Bold.module.sass';
import PropTypes from 'prop-types';

export default function Bold({ type, children }) {
	if (type == 'strong') {
		return <strong className={styles.bold}>{children}</strong>;
	} else {
		return <b className={styles.bold}>{children}</b>;
	}
}

Bold.propTypes = {
	type: PropTypes.oneOf(['strong']),
};
