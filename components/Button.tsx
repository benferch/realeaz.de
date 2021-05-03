import clsx from 'clsx';
import React, { ButtonHTMLAttributes } from 'react';

export default function Button({
	children,
	...props
}: ButtonHTMLAttributes<HTMLButtonElement> & {
	children: React.ReactNode;
}) {
	return (
		<button
			className={clsx(
				'dark:bg-black bg-white dark:text-white text-black px-12 py-2',
				props?.className
			)}
			{...props}
		>
			{children}
		</button>
	);
}
