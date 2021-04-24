import Button from ':components/Button';
import Container from ':components/Container';
import CustomHead from ':components/Head';
import Divider from ':components/Divider';
import Footer from ':components/Footer';
import Heading from ':components/Heading';
import CustomLink from ':components/Link';
import List from ':components/List';
import Profile from ':components/Profile';
import Text from ':components/Text';
import calcAge from ':components/util/calcAge';
import client from ':components/util/client';
import '@fortawesome/fontawesome-svg-core/styles.css';
import {
	faGithub,
	faLinkedin,
	faTwitter,
} from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import groq from 'groq';
import Link from 'next/link';

export default function HomePage(props) {
	const { posts = [] } = props;
	const blog = false;
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
					<Text>web development</Text>
					<div className="flex space-x-2">
						<CustomLink
							external
							none
							target="https://twitter.com/_benferch"
							ariaLabel="Twitter"
						>
							<FontAwesomeIcon
								icon={faTwitter}
								size="2x"
								className="text-twitter"
							/>
						</CustomLink>
						<CustomLink
							external
							none
							target="https://linkedin.com/in/benferch"
							ariaLabel="LinkedIn"
						>
							<FontAwesomeIcon
								icon={faLinkedin}
								size="2x"
								className="text-linkedin"
							/>
						</CustomLink>
						<CustomLink
							external
							none
							target="https://github.com/benferch"
							ariaLabel="GitHub"
						>
							<FontAwesomeIcon
								icon={faGithub}
								size="2x"
								className="text-github"
							/>
						</CustomLink>
					</div>
					<Heading>Contact</Heading>
					<Text className="text-left mx-8 sm:mx-auto">
						If you want to contact me feel free to send me an
						<CustomLink external target="mailto:ferch.benj@gmail.com">
							e-mail
						</CustomLink>
					</Text>
				</Container>
				<Divider orientation="vertical" className="m-4 sm:m-0" />
				<Container className="sm:w-2/3 mx-8 sm:mx-0">
					<Heading level={3}>Work</Heading>
					<div className="flex justify-between max-w-md">
						<Heading level={4}>Effective Bytes</Heading>
						<Text className="text-muted italic">2018 - now</Text>
					</div>
					<Text>
						Web development with Drupal and Wordpress, server adminisration and
						deployment
					</Text>
					<Heading level={3}>Skills</Heading>
					<List
						items={[
							'CSS',
							'Tailwind CSS',
							'JavaScript',
							'Node.js',
							'React',
							'Next.js',
							'Docker',
							'MongoDB',
							'Git',
							'GitHub',
							'Drupal',
							'Wordpress',
							'Sanity',
							'Linux',
							'Windows',
							'macOS',
						]}
					/>
					<Heading level={3}>Projects</Heading>
					<div>
						<Heading level={4}>MetaPeta</Heading>
						<Text>
							MetaPeta was created at Jugendhackt 2018 in Schwerin. It is a tool
							to remove meta data from images.
						</Text>
						<div className="flex">
							<Button
								onClick={() =>
									window.open(
										'https://github.com/Jugendhackt/MetaPeta',
										'_blank'
									)
								}
							>
								Code
							</Button>
							<Button
								onClick={() =>
									window.open(
										'https://jugendhackt.github.io/MetaPeta/',
										'_blank'
									)
								}
							>
								Demo
							</Button>
						</div>
					</div>
					<div>
						<Heading level={4}>PacTrac</Heading>
						<Text>
							PacTrac was created at Jugendhackt 2019 in Rostock. It is a tool
							to track parcels from different delivery services.
						</Text>
						<div className="flex">
							<Button
								onClick={() =>
									window.open(
										'https://github.com/Jugendhackt/PacTrac',
										'_blank'
									)
								}
							>
								Code
							</Button>
							<Button
								onClick={() =>
									window.open(
										'https://jugendhackt.github.io/PacTrac/',
										'_blank'
									)
								}
							>
								Demo
							</Button>
						</div>
					</div>
					<div>
						<Heading level={5}>Twitter Bot</Heading>
						<Text>
							The Twitter Bot is a bot which mirrors posts from subreddits on
							Twitter.
						</Text>
						<div className="flex">
							<Button
								onClick={() =>
									window.open(
										'https://github.com/benferch/reddit-twitter',
										'_blank'
									)
								}
							>
								Code
							</Button>
							<Button
								onClick={() =>
									window.open('https://twitter.com/r_mkeyboards', '_blank')
								}
							>
								Demo
							</Button>
						</div>
					</div>
					{blog && (
						<div>
							<Heading>Blog</Heading>
							<div className="flex flex-col">
								{posts.map(
									({
										_id,
										title = '',
										info = '',
										slug = '',
										_updatedAt = '',
									}) =>
										slug && (
											<li
												key={_id}
												className="list-none flex flex-col min-h-[4rem]"
											>
												<div className="flex-col">
													<div className="flex-row inline-flex items-center space-x-2">
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
													<Text>{info}</Text>
												</div>
											</li>
										)
								)}
								<CustomLink
									target="/blog"
									blog
									className="text-right inline-block"
								>
									Read more →
								</CustomLink>
							</div>
						</div>
					)}
				</Container>
			</Container>
			<Footer themeSwitch />
		</>
	);
}

HomePage.getInitialProps = async () => ({
	posts: await client.fetch(groq`
    *[_type == "post" && publishedAt < now()]|order(publishedAt desc)[0...3]
  `),
});
