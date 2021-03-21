import Button from ':components/Button';
import Link from 'next/link';
import client from ':components/util/client';
import { languageContext } from ':components/LanguageProvider';
import groq from 'groq';
import CustomLink from ':components/Link';
import { useTheme } from 'next-themes';
import useTranslation from ':components/util/useTranslation';
import Container from ':components/Container';
import CustomHead from ':components/CustomHead';
import { useNextSanityImage } from 'next-sanity-image';
import Image from 'next/image';
import Text from ':components/Text';
import Heading from ':components/Heading';
import { useEffect, useState, useContext } from 'react';
import List from ':components/List';

//@TODO: content-visibility when available

export default function blogIndex(props) {
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
	const { posts = [] } = props;
	return (
		<>
			<CustomHead title="Blog | Ben-J. Ferch" desc="Hey!" />
			<Container className="my-12 space-y-4">
				<div className="flex justify-between">
					<Heading level={1}>Blog</Heading>
					<Heading
						level={3}
						className="hover:text-gray-500 transition ease-out duration-300 border-gray-500 border-solid border-b-2"
					>
						<Link href="/">Home</Link>
					</Heading>
				</div>
				{posts.map(
					({
						_id,
						title = '',
						info = '',
						slug = '',
						_updatedAt = '',
						mainImage,
						tags = [],
					}) =>
						slug && (
							<li
								key={_id}
								className="list-none flex flex-row space-x-2 min-h-[12rem] w-full justify-center"
							>
								{mainImage && (
									<div className="flex-col flex-grow max-w-1/3">
										<Image
											{...useNextSanityImage(client, mainImage)}
											height="6rem"
											width="12rem"
											className="object-cover"
										/>
									</div>
								)}
								<div className="flex justify-between flex-col max-w-[32rem] min-w-[32rem]">
									<div className="flex-1 w-full">
										<div className="inline-flex items-center space-x-2">
											<Heading level={4}>
												<Link
													href="/blog/post/[slug]" /*@ts-ignore This is fine.*/
													as={`/blog/post/${slug.current}`}
												>
													<a>{title}</a>
												</Link>
											</Heading>
											<Text className="text-muted">
												({new Date(_updatedAt).toDateString()})
											</Text>
										</div>
										<Text className="break-words">{info}</Text>
									</div>
									<div className="flex flex-1 justify-between items-center">
										<ul className="space-x-2 flex">
											{tags.map((tag) => {
												return (
													<li
														key={tag.value}
														className="self-center cursor-default text-xs list-none px-3 border-[1px] font-semibold text-special-g bg-transparent-special-g border-special-g rounded-xl border-solid"
													>
														{tag.value}
													</li>
												);
											})}
										</ul>
										<Text className="hover:text-gray-500 dark:border-gray-50 border-gray-900 border-solid border-b-2 transition ease-out duration-300">
											<Link
												href="/blog/post/[slug]" /*@ts-ignore This is fine.*/
												as={`/blog/post/${slug.current}`}
											>
												<a>Read more →</a>
											</Link>
										</Text>
									</div>
								</div>
							</li>
						)
				)}
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

blogIndex.getInitialProps = async () => ({
	posts: await client.fetch(groq`
    *[_type == "post" && publishedAt < now()]|order(publishedAt desc)
  `),
});
