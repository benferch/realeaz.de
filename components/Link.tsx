import Link from 'next/link';
import React from 'react';

export default function CustomLink({
	children,
	href,
	targetBlank,
}: {
	children: React.ReactNode;
	href: string;
	targetBlank?: boolean;
}) {
	return targetBlank ? (
		<Link href={href} passHref>
			<a target="_blank">{children}</a>
		</Link>
	) : (
		<Link href={href} passHref>
			<a>{children}</a>
		</Link>
	);
}
