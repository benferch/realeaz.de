import clsx from 'clsx';
import React, { ButtonHTMLAttributes } from 'react';

export default function Button({
	children,
	className,
	...props
}: ButtonHTMLAttributes<HTMLButtonElement> & {
	children: React.ReactNode;
	className?: string;
}) {
	return (
		<button
			className={clsx(
				'px-8 py-1 m-3 block dark:border-gray-50 border-gray-900 border-solid border-2 rounded-xl transform transition duration-300 ease-out hover:-translate-y-3 hover:translate-x-3 hover:shadow-button focus:outline-none',
				className
			)}
			{...props}
		>
			{children}
		</button>
	);
}
