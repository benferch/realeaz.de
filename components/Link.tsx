import React from 'react';
import Link from 'next/link';
import clsx from 'clsx';
import Image from ':components/Image';

export default function CustomLink({
	children,
	target,
	external,
	none = false,
	className,
	symbol,
	blog,
	ariaLabel,
}: {
	children: React.ReactNode;
	target: string;
	none?: boolean;
	external?: boolean;
	className?: string;
	symbol?: boolean;
	blog?: boolean;
	ariaLabel?: string;
}) {
	if (external) {
		return (
			<a
				href={target}
				rel="noopener noreferrer"
				target="_blank"
				aria-label={ariaLabel}
				className={
					none
						? clsx(
								'text-muted hover:text-mutedLight transition duration-300 ease-out',
								className
						  )
						: clsx(
								'transition duration-300 border-b-2 px-1 pt-1 pb-0.5 border-solid border-gray-500 hover:bg-gray-500 hover:bg-opacity-20',
								className
						  )
				}
			>
				{children}
			</a>
		);
	}
	if (blog) {
		return (
			<a
				href={target}
				rel="noopener noreferrer"
				target="_self"
				className={clsx('', className)}
				aria-label={ariaLabel}
			>
				{children}
			</a>
		);
	}
	if (symbol) {
		return (
			<a
				href={target}
				rel="noopener noreferrer"
				target="_blank"
				aria-label={ariaLabel}
				className={
					none
						? clsx(
								'text-muted hover:text-mutedLight transition duration-300 ease-out space-x-2 inline-flex items-center',
								className
						  )
						: clsx(
								'transition duration-300 border-b-2 px-1 pt-1 pb-0.5 border-solid border-gray-500 hover:bg-gray-500 hover:bg-opacity-20 space-x-2 inline-flex items-center',
								className
						  )
				}
			>
				<span>
					<img
						src={`https://jmswrnr.com/api/favicon?url=${target}`}
						height={16}
						width={16}
					/>
				</span>
				{children}
			</a>
		);
	}
	return (
		<Link href={target} passHref>
			<a
				aria-label={ariaLabel}
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
