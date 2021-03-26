import client from ':components/util/client';
import BlockContent from '@sanity/block-content-to-react';
import groq from 'groq';
import CustomHead from ':components/CustomHead';
import Link from 'next/link';
import Container from ':components/Container';
import Heading from ':components/Heading';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { atomOneDark } from 'react-syntax-highlighter/dist/cjs/styles/hljs';
import Image from 'next/image';
import { getImageUrl } from '@sanity/block-content-to-hyperscript/internals';
import Text from ':components/Text';
import CustomLink from ':components/Link';
import Footer from ':components/Footer';

export default function Post(props) {
	const {
		title = 'Missing title',
		name = 'Missing name',
		info = 'No Info',
		body = [],
		tags,
	} = props;
	let keys = '';
	let keyword = '';
	if (tags) {
		tags.forEach((tag) => {
			keys = keys.concat(`${tag.value},`);
			keyword = keys.slice(0, keys.length - 1);
		});
	}

	// @TODO: think of blocks to add to sanity

	const serializers = {
		list: (props) =>
			props.type === 'bullet' ? (
				<ul className="list-disc">{props.children}</ul>
			) : (
				<ol className="list-decimal">{props.children}</ol>
			),
		listItem: (props) =>
			props.type === 'bullet' ? (
				<li>{props.children}</li>
			) : (
				<li>{props.children}</li>
			),
		marks: {
			strong: (props) => {
				return <Text className="font-bold">{props.children}</Text>;
			},
			em: (props) => {
				return <Text className="italic">{props.children}</Text>;
			},
			link: (props) => {
				console.log(props);
				return (
					<CustomLink target={props.mark.href} external>
						{props.children}
					</CustomLink>
				);
			},
		},
		types: {
			block: (props) => {
				switch (props.node.style) {
					case 'h1':
						return <Heading level={1}>{props.children}</Heading>;
					case 'h2':
						return <Heading level={2}>{props.children}</Heading>;
					case 'h3':
						return <Heading level={3}>{props.children}</Heading>;
					case 'h4':
						return <Heading level={4}>{props.children}</Heading>;
					case 'blockquote':
						return (
							<Text className="border-l-2 pl-2 bg-transparent-grey-500 dark:border-gray-50 border-gray-900">
								{props.children}
							</Text>
						);
					default:
						return <Text>{props.children}</Text>;
				}
			},
			code: (props) => {
				return (
					<SyntaxHighlighter language={props.node.language} style={atomOneDark}>
						{props.node.code}
					</SyntaxHighlighter>
				);
			},
			image: (props) => {
				return (
					<div className="flex justify-center">
						<Image
							width={props.node.width ? props.node.width : 400}
							height={props.node.height ? props.node.height : 400}
							alt={props.node.alt ? props.node.alt : ''}
							className="object-contain"
							src={getImageUrl(props)}
						/>
					</div>
				);
			},
		},
	};

	return (
		<>
			<CustomHead title={title} desc={info} tags={keyword} />
			<Container className="my-12">
				<div className="flex justify-between items-center">
					<div>
						<Heading level={1}>{title}</Heading>
						<span className="text-muted">by {name}</span>
					</div>
					<Heading
						level={3}
						className="hover:text-gray-500 transition ease-out duration-300 border-gray-500 border-solid border-b-2"
					>
						<Link href="/blog">Back</Link>
					</Heading>
				</div>
				<article className="mx-[5rem]">
					<BlockContent
						blocks={body}
						serializers={serializers}
						{...client.config()}
					/>
				</article>
			</Container>
			<Footer themeSwitch />
		</>
	);
}

const query = groq`*[_type == "post" && slug.current == $slug][0]{
  title,
	info,
	tags,
  "name": author->name,
  body
}`;

Post.getInitialProps = async function (context) {
	// It's important to default the slug so that it doesn't return "undefined"
	const { slug = '' } = context.query;
	return await client.fetch(query, { slug });
};
