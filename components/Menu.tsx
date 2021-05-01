import clsx from 'clsx';
import Link from 'next/link';

export default function Menu({
	active,
}: {
	active: 'home' | 'about' | 'projects' | 'uses';
}) {
	return (
		<nav className="space-x-4 mb-6">
			<Link href="/">
				<a
					className={clsx(
						'font-extrabold sm:text-5xl text-xl',
						active == 'home' ? 'border-b-4 lg:border-b-8 border-white' : ''
					)}
				>
					HOME
				</a>
			</Link>
			<Link href="/about">
				<a
					className={clsx(
						'font-extrabold sm:text-5xl text-xl',
						active == 'about' ? 'border-b-4 lg:border-b-8 border-white' : ''
					)}
				>
					ABOUT
				</a>
			</Link>
			<Link href="/projects">
				<a
					className={clsx(
						'font-extrabold sm:text-5xl text-xl',
						active == 'projects' ? 'border-b-4 lg:border-b-8 border-white' : ''
					)}
				>
					PROJECTS
				</a>
			</Link>
			<Link href="/uses">
				<a
					className={clsx(
						'font-extrabold sm:text-5xl text-xl',
						active == 'uses' ? 'border-b-4 lg:border-b-8 border-white' : ''
					)}
				>
					USES
				</a>
			</Link>
		</nav>
	);
}
