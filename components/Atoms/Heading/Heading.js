import styles from './Heading.module.sass';
import PropTypes from 'prop-types';

export default function Heading({ type, text }) {
	if (type == 'h1') {
		return <h1 className={styles.h1}>{text}</h1>;
	} else if (type == 'h2') {
		return <h2 className={styles.h2}>{text}</h2>;
	} else if (type == 'h3') {
		return <h3 className={styles.h3}>{text}</h3>;
	} else if (type == 'h4') {
		return <h4 className={styles.h4}>{text}</h4>;
	} else {
		return null;
	}
}

Heading.propTypes = {
	type: PropTypes.oneOf(['h1', 'h2', 'h3', 'h4']).isRequired,
	text: PropTypes.string.isRequired,
};
