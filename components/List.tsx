export default function List({ items }: { items: Array<any> }) {
	return (
		<ul className="flex flex-wrap max-w-md">
			{items.map((item) => {
				return (
					<li className="mx-0.5" key={item}>
						{item}
					</li>
				);
			})}
		</ul>
	);
}
