import Button from ':components/Button';
import Container from ':components/Container';
import CustomHead from ':components/CustomHead';
import Divider from ':components/Divider';
import Heading from ':components/Heading';
import Profile from ':components/Profile';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';

export default function HomePage() {
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
		<>
			<CustomHead title="Ben-J. Ferch" desc="Hey!" />
			<Container className="flex w-full">
				<Container className="w-1/3 flex justify-center flex-col text-center items-center">
					<Profile />
					<Heading>Ben Ferch</Heading>
					<Button onClick={switchTheme}>Switch Theme</Button>
				</Container>
				<Divider />
				<Container className="w-2/3">
					<Heading>Moin</Heading>
				</Container>
			</Container>
			<Container>
				
			</Container>
		</>
	);
}
