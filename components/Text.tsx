import clsx from 'clsx';
import React from 'react';

export default function Text({
	children,
	superscript,
	subscript,
	className,
}: {
	children: React.ReactNode;
	superscript?: boolean;
	subscript?: boolean;
	className?: string;
}) {
	if (superscript) {
		return (
			<p className={clsx('transform -translate-y-1', className)}>{children}</p>
		);
	}
	if (subscript) {
			<p className={clsx('transform translate-y-1', className)}>{children}</p>
      return <p className={clsx('', className)}>{children}</p>;
	}
	return <p className={clsx('', className)}>{children}</p>;
}
