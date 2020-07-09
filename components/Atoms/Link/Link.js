import { Link as NextLink } from 'next/link';
import styles from './Link.module.sass';
import PropTypes from 'prop-types';
import { useEffect } from 'react';

const scroll = (target) => {
	useEffect(() => {
		if (target.match('^[.]')) {
			let cleanTarget = target.split('.');
			let cleanNewTarget = document.getElementsByClassName(cleanTarget[1]);
			if (document.document.getElementsByClassName(cleanTarget[1]) == null) {
				console.error(
					`${target} has has no class assigned that could be found on the page`
				);
				alert(
					`${target} has has no class assigned that could be found on the page`
				);
				return;
			}
			cleanNewTarget.scrollIntoView({ behavior: 'smooth' });
		} else if (target.match('^[#]')) {
			let cleanTarget = target.split('#');
			if (document.getElementById(cleanTarget[1]) == null) {
				console.error(
					`${target} has has no id assigned that could be found on the page`
				);
				alert(
					`${target} has has no id assigned that could be found on the page`
				);
				return;
			}
			let cleanNewTarget = document.getElementById(cleanTarget[1]);
			cleanNewTarget.scrollIntoView({ behavior: 'smooth' });
		} else {
			console.error(`${target} has has no class or id assigned`);
			alert(`${target} has has no class or id assigned`);
			return null;
		}
	});
};

export default function Link({ type, target, text }) {
	if (type == 'internal') {
		return (
			<NextLink
				href={target}
				scroll={true}
				className={`${styles.link} ${styles.underline}`}
			>
				<a>{text}</a>
			</NextLink>
		);
	} else if (type == 'external') {
		<a
			href={target}
			target="_blank"
			rel="noopener noreferrer"
			className={`${styles.link} ${styles.underline}`}
		>
			{text}
		</a>;
	} else if (type == 'scroll') {
		return (
			<a
				onClick={scroll(target)}
				className={`${styles.link} ${styles.underline}`}
			>
				{text}
			</a>
		);
	} else {
		return null;
	}
}

Link.propTypes = {
	type: PropTypes.oneOf(['internal', 'external', 'scroll']),
	target: PropTypes.any.isRequired,
	text: PropTypes.string.isRequired,
};
