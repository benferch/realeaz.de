import clsx from 'clsx';
import React from 'react';

export default function Container({
	children,
	className,
}: {
	children?: React.ReactNode;
	className?: string;
}) {
	return (
		<div
			className={clsx(
				'mt-36 lg:mt-48 lg:mb-10 mb-10 mx-10 lg:mx-40 relative',
				className
			)}
		>
			{children}
		</div>
	);
}
