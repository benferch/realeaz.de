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
					className={clsx('w-0.5 bg-gray-900 dark:bg-gray-50', className)}
				/>
			);
	}
}

// @TODO: Somehow this divider doesn't work on mobile screens
