import React, { ButtonHTMLAttributes } from 'react';

export default function Button({
	children,
	...props
}: ButtonHTMLAttributes<HTMLButtonElement> & {
	children: React.ReactNode;
}) {
	return (
		<button className="" {...props}>
			{children}
		</button>
	);
}
