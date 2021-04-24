import Container from ':components/Container';
import CustomLink from ':components/Link';
import Text from ':components/Text';
import clsx from 'clsx';
import ThemeSwitch from './ThemeSwitch';

export default function Footer({
	themeSwitch,
	className,
}: {
	themeSwitch?: boolean;
	langSwitch?: boolean;
	className?: string;
}) {
	return (
		<Container
			className={clsx(
				'text-muted flex justify-between mx-8 mb-12 max-w-full',
				className
			)}
		>
			<div className="flex text-center space-x-2">
				<Text>2015 - {new Date().getFullYear()}</Text>
				{themeSwitch && <ThemeSwitch />}
			</div>
			<div className="space-x-2">
				<CustomLink none target="/imprint">
					Imprint
				</CustomLink>
				<CustomLink none target="/privacy">
					Privacy Policy
				</CustomLink>
			</div>
		</Container>
	);
}
