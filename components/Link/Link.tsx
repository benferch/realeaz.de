import Link from 'next/link';
import './Link.module.sass';

export interface LinkProps {
	href: string;
	name: string;
}

const CustomLink = ({ href, name }: LinkProps) => {
	return (
		<Link href={href} scroll={true}>
			{name}
		</Link>
	);
};

export default CustomLink;
