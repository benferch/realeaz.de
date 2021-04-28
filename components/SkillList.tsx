export default function List({ items }: { items: Array<any> }) {
	return (
		<ul className="flex flex-wrap max-w-md space-x-4 justify-center">
			{items.map((item) => {
				return <li key={item}>{item}</li>;
			})}
		</ul>
	);
}
