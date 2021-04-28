import clsx from 'clsx';
import React from 'react';

export default function Box({
	children,
	className,
}: {
	children: React.ReactNode;
	className?: string;
}) {
	return (
		<div
			className={clsx(
				'w-[50%] h-60 dark:bg-white bg-black mx-auto p-2',
				className
			)}
		>
			{children}
		</div>
	);
}
