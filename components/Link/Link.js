import { Link as NextLink } from 'next/link';
import styles from './Link.module.sass';
import PropTypes from 'prop-types';
import scroll from './scroll';

export default function Link({ type, target, children, underline }) {
	if (underline) {
		if (type == 'internal') {
			return (
				<NextLink
					href={target}
					scroll={true}
					className={`${styles.link} ${styles.underline}`}
				>
					<a>{children}</a>
				</NextLink>
			);
		} else if (type == 'external') {
			<a
				href={target}
				target="_blank"
				rel="noopener noreferrer"
				className={`${styles.link} ${styles.underline}`}
			>
				{children}
			</a>;
		} else if (type == 'scroll') {
			return (
				<a
					onClick={scroll(target)}
					className={`${styles.link} ${styles.underline}`}
				>
					{children}
				</a>
			);
		} else {
			console.error(
				`Your type is either not a valid type or you entered no type at all`
			);
			alert(
				`Your type is either not a valid type or you entered no type at all`
			);
			return null;
		}
	} else {
		if (type == 'internal') {
			return (
				<NextLink href={target} scroll={true} className={styles.link}>
					<a>{children}</a>
				</NextLink>
			);
		} else if (type == 'external') {
			<a
				href={target}
				target="_blank"
				rel="noopener noreferrer"
				className={styles.link}
			>
				{children}
			</a>;
		} else if (type == 'scroll') {
			return (
				<a onClick={scroll(target)} className={styles.link}>
					{children}
				</a>
			);
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
}

Link.propTypes = {
	type: PropTypes.oneOf(['internal', 'external', 'scroll']),
	target: PropTypes.any.isRequired,
};
