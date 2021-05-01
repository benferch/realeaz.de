import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';
import Button from './Button';

import Muted from './Muted';

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
			className="hover:text-mutedLight transition duration-300 ease-out focus:outline-none p-0"
		>
			<Muted>Switch Theme</Muted>
		</Button>
	);
}
