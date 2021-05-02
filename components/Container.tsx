import clsx from 'clsx';
import React from 'react';

export default function Container({
	children,
	className,
	noMx,
}: {
	children?: React.ReactNode;
	className?: string;
	noMx?: boolean;
}) {
	return (
		<div
			className={clsx(
				'mt-36 lg:mt-48 lg:mb-10 mb-10 relative',
				noMx ? '' : 'mx-10 lg:mx-40',
				className
			)}
		>
			{children}
		</div>
	);
}
