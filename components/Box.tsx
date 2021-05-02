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
				'md:w-[75%] h-auto pb-20 dark:bg-white bg-black mx-auto p-2',
				className
			)}
		>
			{children}
		</div>
	);
}
