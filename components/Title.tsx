import clsx from 'clsx';
import React from 'react';

export default function Title({
	level,
	children,
	className,
}: {
	level?: number;
	children: React.ReactNode;
	className?: string;
}) {
	switch (level) {
		default:
			return (
				<h3 className={clsx('text-xl leading-6', className)}>{children}</h3>
			);
		case 1:
			return (
				<h1 className={clsx('text-5xl leading-8', className)}>{children}</h1>
			);
		case 2:
			return (
				<h2 className={clsx('text-4xl leading-7', className)}>{children}</h2>
			);
		case 3:
			return (
				<h3 className={clsx('text-3xl leading-6', className)}>{children}</h3>
			);
	}
}
