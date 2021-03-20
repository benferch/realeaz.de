import clsx from 'clsx';
import React from 'react';

export default function Heading({
	level,
	children,
	className,
}: {
	children: React.ReactNode;
	level?: number;
	className?: string;
}) {
	switch (level) {
		default:
			return (
				<h3
					className={clsx(
						'text-xl font-medium leading-6 sm:text-2xl sm:leading-8 sm:truncate',
						className
					)}
				>
					{children}
				</h3>
			);
		case 1:
			return (
				<h1
					className={clsx(
						'text-3xl font-black leading-8 sm:text-4xl sm:leading-10 sm:truncate',
						className
					)}
				>
					{children}
				</h1>
			);
		case 2:
			return (
				<h2
					className={clsx(
						'text-2xl font-bold leading-7 sm:text-3xl sm:leading-9 sm:truncate',
						className
					)}
				>
					{children}
				</h2>
			);
		case 3:
			return (
				<h3
					className={clsx(
						'text-xl font-medium leading-6 sm:text-2xl sm:leading-8 sm:truncate',
						className
					)}
				>
					{children}
				</h3>
			);
		case 4:
			return (
				<h4
					className={clsx(
						'text-l font-medium leading-5 sm:text-xl sm:leading-7 sm:truncate',
						className
					)}
				>
					{children}
				</h4>
			);
		case 5:
			return (
				<h5
					className={clsx(
						'text-md font-medium leading-4 sm:text-l sm:leading-6 sm:truncate',
						className
					)}
				>
					{children}
				</h5>
			);
	}
}
