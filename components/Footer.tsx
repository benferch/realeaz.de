import Link from 'next/link';
import Muted from './Muted';
import ThemeSwitch from './ThemeSwitch';

export default function Footer() {
	return (
		<div className="flex space-x-3 items-center">
			<Link href="/imprint">
				<a>
					<Muted>Imprint</Muted>
				</a>
			</Link>{' '}
			<Link href="/privacy">
				<a>
					<Muted>Privacy Policy</Muted>
				</a>
			</Link>
			<ThemeSwitch />
		</div>
	);
}
