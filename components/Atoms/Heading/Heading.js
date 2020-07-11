import styles from './Heading.module.sass';
import PropTypes from 'prop-types';

export default function Heading({ type, vertical, children }) {
	if (vertical) {
		if (type == 'h1') {
			return <h1 className={`${styles.h1} ${styles.vertical}`}>{children}</h1>;
		} else if (type == 'h2') {
			return <h2 className={`${styles.h2} ${styles.vertical}`}>{children}</h2>;
		} else if (type == 'h3') {
			return <h3 className={`${styles.h3} ${styles.vertical}`}>{children}</h3>;
		} else if (type == 'h4') {
			return <h4 className={`${styles.h4} ${styles.vertical}`}>{children}</h4>;
		} else {
			console.error(
				`Your type is either not a valid type or you entered no type at all`
			);
			alert(
				`Your type is either not a valid type or you entered no type at all`
			);
			return null;
		}
	}
	if (type == 'h1') {
		return <h1 className={`${styles.h1}`}>{children}</h1>;
	} else if (type == 'h2') {
		return <h2 className={`${styles.h2}`}>{children}</h2>;
	} else if (type == 'h3') {
		return <h3 className={`${styles.h3}`}>{children}</h3>;
	} else if (type == 'h4') {
		return <h4 className={`${styles.h4}`}>{children}</h4>;
	} else {
		console.error(
			`Your type is either not a valid type or you entered no type at all`
		);
		alert(`Your type is either not a valid type or you entered no type at all`);
		return null;
	}
}

Heading.propTypes = {
	type: PropTypes.oneOf(['h1', 'h2', 'h3', 'h4']).isRequired,
};
