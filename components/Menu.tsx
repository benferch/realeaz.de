import Link from 'next/link';

export default function Menu({
	active,
}: {
	active: 'home' | 'projects' | 'about' | 'uses';
}) {
	return (
		<nav className="space-x-5 text-3xl font-extrabold">
			<Link href="/">
				<a
					className={
						active == 'home' ? 'text-shadow-active' : 'text-shadow-white'
					}
				>
					Home
				</a>
			</Link>
			<Link href="/about">
				<a
					className={
						active == 'about' ? 'text-shadow-active' : 'text-shadow-white'
					}
				>
					About
				</a>
			</Link>
			<Link href="/projects">
				<a
					className={
						active == 'projects' ? 'text-shadow-active' : 'text-shadow-white'
					}
				>
					Projects
				</a>
			</Link>
			<Link href="/uses">
				<a
					className={
						active == 'uses' ? 'text-shadow-active' : 'text-shadow-white'
					}
				>
					Uses
				</a>
			</Link>
		</nav>
	);
}
