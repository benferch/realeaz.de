import Button from ':components/Button';
import Container from ':components/Container';
import CustomLink from ':components/Link';
import Text from ':components/Text';
import clsx from 'clsx';
import { useTheme } from 'next-themes';
import { useContext, useState, useEffect } from 'react';
import { languageContext } from './LanguageProvider';
import useTranslation from './util/useTranslation';

export default function Footer({
	themeSwitch,
	langSwitch,
	className,
}: {
	themeSwitch?: boolean;
	langSwitch?: boolean;
	className?: string;
}) {
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
		<Container
			className={clsx('text-muted flex justify-between mx-8 mb-12', className)}
		>
			<div className="flex text-center space-x-2">
				<Text>2015 - {new Date().getFullYear()}</Text>
				{themeSwitch && (
					<Button
						onClick={switchTheme}
						className="hover:text-mutedLight transition duration-300 ease-out focus:outline-none"
					>
						{t('switchTheme')}
					</Button>
				)}
				{langSwitch && (
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
				)}
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
	);
}
