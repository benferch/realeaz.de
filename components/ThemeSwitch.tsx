import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';
import Button from ':components/Button';

export default function ThemeSwitch() {
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
		<Button
			onClick={switchTheme}
			footer
			className="hover:text-mutedLight transition duration-300 ease-out focus:outline-none"
		>
			Switch Theme
		</Button>
	);
}
