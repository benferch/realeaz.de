import Button from ':components/Button';
import Container from ':components/Container';
import CustomHead from ':components/CustomHead';
import Divider from ':components/Divider';
import Heading from ':components/Heading';
import { languageContext, locales } from ':components/LanguageProvider';
import CustomLink from ':components/Link';
import List from ':components/List';
import Profile from ':components/Profile';
import Text from ':components/Text';
import calcAge from ':components/util/calcAge';
import useTranslation from ':components/util/useTranslation';
import '@fortawesome/fontawesome-svg-core/styles.css';
import {
	faGithub,
	faLinkedin,
	faTwitter,
} from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useTheme } from 'next-themes';
import { useContext, useEffect, useState } from 'react';

export default function HomePage() {
	const { t } = useTranslation();
	const [locale, setLocale] = useContext(languageContext);
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
	function handleLocaleChange(language: string) {
		if (!window) {
			return;
		}
		localStorage.setItem('lang', language);
		setLocale(language);
	}
	return (
		<>
			<CustomHead title="Ben-J. Ferch" desc="Hey!" />
			<Container className="sm:flex w-full my-12 min-h-screen-80">
				<Container className="sm:w-1/3 flex flex-col text-center items-center">
					<Profile />
					<div className="flex">
						<Heading>Ben-J. Ferch</Heading>
						<Text superscript>{calcAge('10/08/2002')}</Text>
					</div>
					<Text>{t('title')}</Text>
					<div className="flex space-x-2">
						<CustomLink external none target="https://twitter.com/_benferch">
							<FontAwesomeIcon
								icon={faTwitter}
								size="2x"
								className="text-twitter"
							/>
						</CustomLink>
						<CustomLink external none target="https://linkedin.com/in/benferch">
							<FontAwesomeIcon
								icon={faLinkedin}
								size="2x"
								className="text-linkedin"
							/>
						</CustomLink>
						<CustomLink external none target="https://github.com/benferch">
							<FontAwesomeIcon
								icon={faGithub}
								size="2x"
								className="text-github"
							/>
						</CustomLink>
					</div>
					<Heading>{t('contactTitle')}</Heading>
					<Text className="text-left mx-8 sm:mx-auto">
						{t('contactText')}
						<CustomLink external target="mailto:ferch.benj@gmail.com">
							{t('contactEmail')}
						</CustomLink>
					</Text>
				</Container>
				<Divider orientation="vertical" className="m-4 sm:m-0" />
				<Container className="sm:w-2/3 mx-8 sm:mx-0">
					<Heading level={3}>{t('workTitle')}</Heading>
					<div className="flex justify-between max-w-md">
						<Heading level={4}>Effective Bytes</Heading>
						<Text className="text-muted italic">2018 - {t('workNow')}</Text>
					</div>
					<Text>{t('ebText')}</Text>
					<Heading level={3}>{t('projectTitle')}</Heading>
					<div>
						<Heading level={4}>MetaPeta</Heading>
						<Text>{t('mpText')}</Text>
						<div className="flex">
							<Button>Code</Button>
							<Button>Demo</Button>
						</div>
					</div>
					<div>
						<Heading level={4}>PacTrac</Heading>
						<Text>{t('ptText')}</Text>
						<div className="flex">
							<Button>Code</Button>
							<Button>Demo</Button>
						</div>
					</div>
					<div>
						<Heading level={5}>Twitter Bot</Heading>
						<Text>{t('tbText')}</Text>
						<div className="flex">
							<Button>Code</Button>
							<Button>Demo</Button>
						</div>
					</div>
					<Heading level={3}>Skills</Heading>
					<List
						items={[
							'CSS',
							'JavaScript',
							'nodeJS',
							'React',
							'Next.js',
							'Docker',
							'MongoDB',
							'Git',
							'GitHub',
							'Drupal',
							'Wordpress',
							'Linux',
							'Windows',
							'macOS',
						]}
					/>
				</Container>
			</Container>
			<Container className="text-muted flex justify-between mx-8 mb-12">
				<div className="flex text-center space-x-2">
					<Text>2015 - {new Date().getFullYear()}</Text>
					<Button
						onClick={switchTheme}
						className="hover:text-mutedLight transition duration-300 ease-out focus:outline-none"
					>
						{t('switchTheme')}
					</Button>
					<Button
						onClick={() => {
							handleLocaleChange(
								localStorage.getItem('lang') === 'de' ? 'en' : 'de'
							);
						}}
						className="hover:text-mutedLight transition duration-300 ease-out focus:outline-none"
					>
						{locale === 'de' ? t('english') : t('german')}
					</Button>
				</div>
				<div className="space-x-2">
					<CustomLink none target="/imprint">
						{t('imprint')}
					</CustomLink>
					<CustomLink none target="/privacy">
						{t('privacyPolicy')}
					</CustomLink>
				</div>
			</Container>
		</>
	);
}

// @TODO: Show 3 most recent blog posts, then add a link to /blog 'Read more posts'
