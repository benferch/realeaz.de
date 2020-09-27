import { Link } from '../';
import styles from './Button.module.sass';

export default function Button({ link, type, target, children }) {
	if (link) {
		return (
			<button className={`${styles.button}`}>
				<Link type={type} target={target}>
					{children}
				</Link>
			</button>
		);
	} else {
		return <button className={`${styles.button}`}>{children}</button>;
	}
}
