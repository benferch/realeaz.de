import Button from ':components/Button';
import Container from ':components/Container';
import CustomLink from ':components/Link';
import Text from ':components/Text';
import clsx from 'clsx';
import { useTheme } from 'next-themes';
import { useState, useEffect } from 'react';

export default function Footer({
	themeSwitch,
	className,
}: {
	themeSwitch?: boolean;
	langSwitch?: boolean;
	className?: string;
}) {
	const [isMounted, setMounted] = useState(false);
	const { theme, setTheme } = useTheme();
	useEffect(() => {
		setMounted(true);
	}, []);
	const switchTheme = () => {
		if (isMounted) {
			setTheme(theme === 'light' ? 'dark' : 'light');
		}
	};

	return (
		<Container
			className={clsx(
				'text-muted flex justify-between mx-8 mb-12 max-w-full',
				className
			)}
		>
			<div className="flex text-center space-x-2">
				<Text>2015 - {new Date().getFullYear()}</Text>
				{themeSwitch && (
					<Button
						onClick={switchTheme}
						footer
						className="hover:text-mutedLight transition duration-300 ease-out focus:outline-none"
					>
						Switch Theme
					</Button>
				)}
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
