import React, { ButtonHTMLAttributes } from 'react';

export default function Button({
	children,
	...props
}: ButtonHTMLAttributes<HTMLButtonElement> & {
	children: React.ReactNode;
}) {
	return (
		<button
			className="px-8 py-1 m-3 block dark:border-gray-50 border-gray-900 border-solid border-2 rounded-xl transform transition duration-300 ease-out hover:-translate-y-3 hover:translate-x-3 hover:shadow-button focus:outline-none"
			{...props}
		>
			{children}
		</button>
	);
}
