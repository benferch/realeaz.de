import client from ':components/util/client';
import BlockContent from '@sanity/block-content-to-react';
import groq from 'groq';
import CustomHead from ':components/CustomHead';
import Link from 'next/link';
import Container from ':components/Container';
import Heading from ':components/Heading';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { atomOneDark } from 'react-syntax-highlighter/dist/cjs/styles/hljs';

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

	// @TODO: add way to display inline code, images?, text, everything
	// @TODO: think of blocks to add to sanity
	// @TODO: after seperating footer add footer to pages

	const serializers = {
		types: {
			code: (props) => {
				return (
					<SyntaxHighlighter language={props.node.language} style={atomOneDark}>
						{props.node.code}
					</SyntaxHighlighter>
				);
			},
		},
	};

	return (
		<>
			<CustomHead title={title} desc={info} tags={keyword} />
			<Container className="my-12">
				<div className="flex justify-between">
					<Heading level={1}>{title}</Heading>
					<Heading
						level={3}
						className="hover:text-gray-500 transition ease-out duration-300 border-gray-500 border-solid border-b-2"
					>
						<Link href="/blog">Back</Link>
					</Heading>
				</div>
				<article>
					<span className="text-muted">by {name}</span>
					<BlockContent
						blocks={body}
						imageOptions={{ w: 320, h: 240, fit: 'max' }}
						serializers={serializers}
						{...client.config()}
					/>
				</article>
			</Container>
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
