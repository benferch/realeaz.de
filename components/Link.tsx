import React from 'react';
import Link from 'next/link';
import clsx from 'clsx';

export default function CustomLink({
	children,
	target,
	external,
	none = false,
	className,
}: {
	children: React.ReactNode;
	target: string;
	none?: boolean;
	external?: boolean;
	className?: string;
}) {
	if (external) {
		return (
			<a
				href={target}
				rel="noopener noreferrer"
				target="_blank"
				className={
					none
						? clsx(
								'text-muted hover:text-mutedLight transition duration-300 ease-out',
								className
						  )
						: clsx(
								'transition duration-300 border-b-4 px-1 pt-1 pb-0.5 border-solid border-gray-500 hover:bg-gray-500 hover:bg-opacity-20',
								className
						  )
				}
			>
				{children}
			</a>
		);
	}
	return (
		<Link href={target}>
			<a
				className={
					none
						? clsx(
								'text-muted hover:text-mutedLight transition duration-300 ease-out',
								className
						  )
						: clsx(
								'transition duration-300 border-b-4 px-1 pt-1 pb-0.5 border-solid border-gray-500 hover:bg-gray-500 hover:bg-opacity-20',
								className
						  )
				}
			>
				{children}
			</a>
		</Link>
	);
}
