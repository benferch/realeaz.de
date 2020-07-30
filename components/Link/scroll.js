import { useEffect } from 'react';

export default function scroll(target) {
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
}
