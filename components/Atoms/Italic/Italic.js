import styles from './Italic.module.sass';
import PropTypes from 'prop-types';

export default function Italic({ type, children }) {
	if (type == 'em') {
		return <em className={styles.italic}>{children}</em>;
	} else {
		return <i className={styles.italic}>{children}</i>;
	}
}

Italic.propTypes = {
	type: PropTypes.oneOf(['em']),
};
