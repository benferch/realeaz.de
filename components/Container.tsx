import clsx from 'clsx';
import React from 'react';

export default function Container({
	children,
	className,
	noMx,
	reducedMt,
}: {
	children?: React.ReactNode;
	className?: string;
	noMx?: boolean;
	reducedMt?: boolean;
}) {
	return (
		<div
			className={clsx(
				' lg:mb-10 mb-10 relative',
				noMx ? '' : 'mx-10 lg:mx-40',
				reducedMt ? 'mt-16' : 'mt-36 lg:mt-48 ',
				className
			)}
		>
			{children}
		</div>
	);
}
