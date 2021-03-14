import React from 'react';
import Link from 'next/link';
import clsx from 'clsx';

export default function CustomLink({
	children,
	target,
	external,
	disguise = false,
	colorless = false,
	className,
}: {
	children: React.ReactNode;
	target: string;
	external?: boolean;
	disguise?: boolean;
	colorless?: boolean;
	className?: string;
}) {
	if (external) {
		return (
			<a
				href={target}
				rel="noopener noreferrer"
				target="_blank"
				className={
					disguise
						? clsx(
								'text-muted hover:text-mutedLight transition duration-300 ease-out',
								className
						  )
						: colorless
						? clsx('', className)
						: clsx(
								'dark:text-special-g dark:hover:text-muted-g text-muted-g hover:text-special-g transition duration-300 ease-out',
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
					disguise
						? clsx(
								'text-muted hover:text-mutedLight transition duration-300 ease-out',
								className
						  )
						: colorless
						? clsx('', className)
						: clsx(
								'dark:text-special-g dark:hover:text-muted-g text-muted-g hover:text-special-g transition duration-300',
								className
						  )
				}
			>
				{children}
			</a>
		</Link>
	);
}
