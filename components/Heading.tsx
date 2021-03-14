import React from 'react';

export default function Heading({
	level,
	children,
}: {
	children: React.ReactNode;
	level?: number;
}) {
	switch (level) {
		default:
			return (
				<h3 className="text-xl font-medium leading-6 sm:text-2xl sm:leading-8 sm:truncate">
					{children}
				</h3>
			);
		case 1:
			return (
				<h1 className="text-3xl font-black leading-8 sm:text-4xl sm:leading-10 sm:truncate">
					{children}
				</h1>
			);
		case 2:
			return (
				<h2 className="text-2xl font-bold leading-7 sm:text-3xl sm:leading-9 sm:truncate">
					{children}
				</h2>
			);
		case 3:
			return (
				<h3 className="text-xl font-medium leading-6 sm:text-2xl sm:leading-8 sm:truncate">
					{children}
				</h3>
			);
		case 4:
			return (
				<h4 className="text-l font-medium leading-5 sm:text-xl sm:leading-7 sm:truncate">
					{children}
				</h4>
			);
	}
}
