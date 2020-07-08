import { Link as NextLink } from 'next/link';
import styles from './Link.module.sass';
import PropTypes from 'prop-types';
import { useEffect } from 'react';

const scroll = (target) => {
	useEffect(() => {
		if (target.match('^[.]')) {
			let cleanTarget = target.split('.');
			if (cleanTarget[1].match('^[0-9]')) {
				let newTarget = '\\' + target;
				let cleanNewTarget = document.querySelector(newTarget);
				cleanNewTarget.scrollIntoView({ behavior: 'smooth' });
			} else {
				let cleanTarget = document.querySelector(target);
				cleanTarget.scrollIntoView({ behavior: 'smooth' });
			}
		} else if (target.match('^[#]')) {
			let cleanTarget = target.split('#');
			if (cleanTarget[1].match('^[0-9]')) {
				let newTarget = '\\' + target;
				let newCleanTarget = document.querySelector(newTarget);
				newCleanTarget.scrollIntoView({ behavior: 'smooth' });
			} else {
				let cleanTarget = document.querySelector(target);
				cleanTarget.scrollIntoView({ behavior: 'smooth' });
			}
		} else {
			console.error(`${target} has has no class or id assigned`);
			return null;
		}
	});
};

export default function Link({ type, target, text }) {
	if (type == 'internal') {
		return (
			<NextLink href={target} scroll={true}>
				<a>{text}</a>
			</NextLink>
		);
	} else if (type == 'external') {
		<a href={target} target="_blank" rel="noopener noreferrer">
			{text}
		</a>;
	} else if (type == 'scroll') {
		return <a onClick={scroll(target)}>{text}</a>;
	} else {
		return null;
	}
}

Link.propTypes = {
	type: PropTypes.oneOf(['internal', 'external', 'scroll']),
	target: PropTypes.any.isRequired,
	text: PropTypes.string.isRequired,
};
