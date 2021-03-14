import Button from ':components/Button';
import Container from ':components/Container';
import CustomHead from ':components/CustomHead';
import Divider from ':components/Divider';
import Heading from ':components/Heading';
import CustomLink from ':components/Link';
import Profile from ':components/Profile';
import Text from ':components/Text';
import calcAge from ':components/util/calcAge';
import '@fortawesome/fontawesome-svg-core/styles.css';
import {
	faGithub,
	faLinkedin,
	faTwitter,
} from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
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
			<Container className="sm:flex w-full mt-12">
				<Container className="sm:w-1/3 flex justify-center flex-col text-center items-center">
					<Profile />
					<div className="flex">
						<Heading>Ben-J. Ferch</Heading>
						<Text superscript>{calcAge('10/08/2002')}</Text>
					</div>
					<Text>web development</Text>
					<div className="flex">
						<CustomLink
							external
							colorless
							target="https://twitter.com/_benferch"
						>
							<FontAwesomeIcon
								icon={faTwitter}
								size="2x"
								className="text-twitter mx-0.5"
							/>
						</CustomLink>
						<CustomLink
							external
							colorless
							target="https://linkedin.com/in/benferch"
						>
							<FontAwesomeIcon
								icon={faLinkedin}
								size="2x"
								className="text-linkedin mx-0.5"
							/>
						</CustomLink>
						<CustomLink external colorless target="https://github.com/benferch">
							<FontAwesomeIcon
								icon={faGithub}
								size="2x"
								className="text-github mx-0.5"
							/>
						</CustomLink>
					</div>
					<Heading>Contact</Heading>
					<Text className="text-justify">
						If you want to contact me, <br /> feel free to send me an{' '}
						<CustomLink external target="mailto:ferch.benj@gmail.com">
							e-mail
						</CustomLink>
					</Text>
				</Container>
				<Divider />
				<Container className="sm:w-2/3 px-8">
					<Heading>Lorem Ipsum</Heading>
					<Text>Lorem Ipsum</Text>
					<CustomLink target="/imprint">Lorem Ipsum</CustomLink>
				</Container>
			</Container>
			<Container className="text-muted flex justify-between">
				<div className="flex">
					<Text className="mx-1">2015 - {new Date().getFullYear()}</Text>
					<Button
						onClick={switchTheme}
						className="mx-1 hover:text-mutedLight transition duration-300 ease-out focus:outline-none"
					>
						Switch Theme
					</Button>
				</div>
				<div>
					<CustomLink disguise target="/imprint" className="mx-1">
						Imprint
					</CustomLink>
					<CustomLink disguise target="/privacy" className="mx-1">
						Privacy Policy
					</CustomLink>
				</div>
			</Container>
		</>
	);
}
