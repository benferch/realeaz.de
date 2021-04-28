import clsx from 'clsx';
import Link from 'next/link';
import React from 'react';

export default function Button({
	children,
	props,
}: {
	children: React.ReactNode;
	props?: React.ButtonHTMLAttributes<HTMLButtonElement>;
}) {
	return (
		<button
			className={clsx('dark:bg-black bg-white px-12 py-2', props?.className)}
			{...props}
		>
			{children}
		</button>
	);
}
