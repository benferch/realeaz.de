import Link from '../Link/Link';
import styles from './Button.module.sass';
import PropTypes from 'prop-types';

export default function Button({ style, link, type, target, children }) {
	if (style == 1) {
		if (link) {
			return (
				<p className={`${styles.first}`}>
					<Link type={type} target={target}>
						{children}
					</Link>
				</p>
			);
		} else {
			return <p className={`${styles.first}`}>{children}</p>;
		}
	}
	if (style == 2) {
		if (link) {
			return (
				<p className={`${styles.second}`}>
					<Link type={type} target={target}>
						{children}
					</Link>
				</p>
			);
		} else {
			return <p className={`${styles.second}`}>{children}</p>;
		}
	}
	if (style == 3) {
		if (link) {
			return (
				<p className={`${styles.third}`}>
					<Link type={type} target={target}>
						{children}
					</Link>
				</p>
			);
		} else {
			return <p className={`${styles.third}`}>{children}</p>;
		}
	}
	if (style == 4) {
		if (link) {
			return (
				<p className={`${styles.fourth}`}>
					<Link type={type} target={target}>
						{children}
					</Link>
				</p>
			);
		} else {
			return <p className={`${styles.fourth}`}>{children}</p>;
		}
	}
	if (style == 5) {
		if (link) {
			return (
				<p className={`${styles.fifth}`}>
					<Link type={type} target={target}>
						{children}
					</Link>
				</p>
			);
		} else {
			return <p className={`${styles.fifth}`}>{children}</p>;
		}
	}
}

Button.propTypes = {
	style: PropTypes.oneOf(['1', '2', '3', '4', '5']).isRequired,
};
