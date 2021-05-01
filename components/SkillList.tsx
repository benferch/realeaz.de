export const items = [
	'CSS',
	'Tailwind CSS',
	'JavaScript',
	'Node.js',
	'React',
	'Next.js',
	'Docker',
	'MongoDB',
	'Git',
	'GitHub',
	'Drupal',
	'Wordpress',
	'Sanity',
	'Linux',
	'Windows',
	'macOS',
];

export default function SkillList({ items }: { items: Array<any> }) {
	return (
		<ul className="flex flex-wrap max-w-md space-x-4 justify-center">
			{items.map((item) => {
				return <li key={item}>{item}</li>;
			})}
		</ul>
	);
}
