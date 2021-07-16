import clsx from 'clsx';

export interface SquareProps {
	className?: string;
}

export default function Square({ className }: SquareProps) {
	return (
		<div
			className={clsx('w-32 h-32 bg-gray-700 rounded shadow-inner', className)}
		/>
	);
}
