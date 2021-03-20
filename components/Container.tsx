import clsx from 'clsx';
import React, { CSSProperties } from 'react';

export default function Container({
	children,
	className,
	style,
}: {
	children?: React.ReactNode;
	className?: string;
	style?: CSSProperties;
}) {
	return (
		<div
			className={clsx('max-w-7xl mx-auto px-0 sm:px-6 lg:px-8', className)}
			style={style}
		>
			{children}
		</div>
	);
}
