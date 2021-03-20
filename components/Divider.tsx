import clsx from 'clsx';

export default function Divider({
	orientation,
	className,
}: {
	orientation?: string;
	className?: string;
}) {
	switch (orientation) {
		default:
			return (
				<span
					className={clsx('w-0.5 bg-gray-900 dark:bg-gray-50', className)}
				/>
			);
		case 'horizontal':
			return (
				<span
					className={clsx(
						'w-0.5 bg-gray-900 dark:bg-gray-50 transform rotate-90',
						className
					)}
				/>
			);
		case 'vertical':
			return (
				<span
					className={clsx(
						'block h-0.5 w-[95%] sm:h-auto sm:w-0.5 bg-gray-900 dark:bg-gray-50',
						className
					)}
				/>
			);
	}
}
