import clsx from 'clsx';
import Link from 'next/link';

export default function Menu({
	active,
}: {
	active: 'home' | 'about' | 'projects' | 'uses';
}) {
	return (
		<nav className="space-x-4">
			<Link href="/">
				<a
					className={clsx(
						'font-extrabold text-5xl',
						active == 'home' ? 'border-b-8 border-white' : ''
					)}
				>
					HOME
				</a>
			</Link>
			<Link href="/about">
				<a
					className={clsx(
						'font-extrabold text-5xl',
						active == 'about' ? 'border-b-8 border-white' : ''
					)}
				>
					ABOUT
				</a>
			</Link>
			<Link href="/projects">
				<a
					className={clsx(
						'font-extrabold text-5xl',
						active == 'projects' ? 'border-b-8 border-white' : ''
					)}
				>
					PROJECTS
				</a>
			</Link>
			<Link href="/uses">
				<a
					className={clsx(
						'font-extrabold text-5xl',
						active == 'uses' ? 'border-b-8 border-white' : ''
					)}
				>
					USES
				</a>
			</Link>
		</nav>
	);
}
