export default function List({
	items,
	type = 'u',
}: {
	items: Array<any>;
	type?: 'o' | 'u';
}) {
	return type == 'u' ? (
		<ul className="list-disc space-y-2">
			{items.map((item) => {
				return <li>{item}</li>;
			})}
		</ul>
	) : (
		<ol className="list-decimal space-y-2">
			{items.map((item) => {
				return <li>{item}</li>;
			})}
		</ol>
	);
}
