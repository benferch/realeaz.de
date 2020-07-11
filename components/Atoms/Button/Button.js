import Link from '../Link/Link';
import styles from './Button.module.sass';
import PropTypes from 'prop-types';

export default function Button({ style, link, type, target, children }) {
	if (style == 1) {
		if (link) {
			return (
				<button className={`${styles.first} ${styles.button}`}>
					<Link type={type} target={target}>
						{children}
					</Link>
				</button>
			);
		} else {
			return (
				<button className={`${styles.first} ${styles.button}`}>
					{children}
				</button>
			);
		}
	}
	if (style == 2) {
		if (link) {
			return (
				<button className={`${styles.second} ${styles.button}`}>
					<Link type={type} target={target}>
						{children}
					</Link>
				</button>
			);
		} else {
			return (
				<button className={`${styles.second} ${styles.button}`}>
					{children}
				</button>
			);
		}
	}
	if (style == 3) {
		if (link) {
			return (
				<button className={`${styles.third} ${styles.button}`}>
					<Link type={type} target={target}>
						{children}
					</Link>
				</button>
			);
		} else {
			return (
				<button className={`${styles.third} ${styles.button}`}>
					{children}
				</button>
			);
		}
	}
	if (style == 4) {
		if (link) {
			return (
				<button className={`${styles.fourth} ${styles.button}`}>
					<Link type={type} target={target}>
						{children}
					</Link>
				</button>
			);
		} else {
			return (
				<button className={`${styles.fourth} ${styles.button}`}>
					{children}
				</button>
			);
		}
	}
	if (style == 5) {
		if (link) {
			return (
				<button className={`${styles.fifth} ${styles.button}`}>
					<Link type={type} target={target}>
						{children}
					</Link>
				</button>
			);
		} else {
			return (
				<button className={`${styles.fifth} ${styles.button}`}>
					{children}
				</button>
			);
		}
	}
	if (style == 6) {
		if (link) {
			return (
				<button className={`${styles.sixth} ${styles.button}`}>
					<Link type={type} target={target}>
						{children}
					</Link>
				</button>
			);
		} else {
			return (
				<button className={`${styles.sixth} ${styles.button}`}>
					{children}
				</button>
			);
		}
	}
	if (style == 7) {
		if (link) {
			return (
				<button className={`${styles.seventh} ${styles.button}`}>
					<Link type={type} target={target}>
						{children}
					</Link>
				</button>
			);
		} else {
			return (
				<button className={`${styles.seventh} ${styles.button}`}>
					{children}
				</button>
			);
		}
	}
}

Button.propTypes = {
	style: PropTypes.oneOf(['1', '2', '3', '4', '5', '6', '7']).isRequired,
};
