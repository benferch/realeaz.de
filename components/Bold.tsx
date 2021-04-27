import React from 'react';

export default function Bold({
	children,
	extrabold,
}: {
	children: React.ReactNode;
	extrabold?: boolean;
}) {
	return (
		<b className={extrabold ? 'font-extrabold' : 'font-bold'}>{children}</b>
	);
}
