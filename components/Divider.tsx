export default function Divider({ orientation }: { orientation?: string }) {
	switch (orientation) {
		default:
			return <span className="w-0.5 bg-gray-900 dark:bg-gray-50" />;
		case 'horizontal':
			return (
				<span className="w-0.5 bg-gray-900 dark:bg-gray-50 transform rotate-90" />
			);
		case 'vertical':
			return <span className="w-0.5 bg-gray-900 dark:bg-gray-50" />;
	}
}
