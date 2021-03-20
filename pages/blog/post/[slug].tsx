import client from ':components/util/client';
import imageUrlBuilder from '@sanity/image-url';
import BlockContent from '@sanity/block-content-to-react';
import groq from 'groq';
import CustomHead from ':components/CustomHead';

function urlFor(source) {
	return imageUrlBuilder(client).image(source);
}

export default function Post(props) {
	const {
		title = 'Missing title',
		name = 'Missing name',
		info = 'No Info',
		categories,
		authorImage,
		body = [],
	} = props;
	return (
		<>
			<CustomHead title={title} desc={info} />
			<article>
				<h1>{title}</h1>
				<span>By {name}</span>
				{categories && (
					<ul>
						Posted in
						{categories.map((category) => (
							<li key={category}>{category}</li>
						))}
					</ul>
				)}
				{authorImage && (
					<div>
						<img src={urlFor(authorImage).width(50).url()} />
					</div>
				)}
				<BlockContent
					blocks={body}
					imageOptions={{ w: 320, h: 240, fit: 'max' }}
					{...client.config()}
				/>
			</article>
		</>
	);
}

const query = groq`*[_type == "post" && slug.current == $slug][0]{
  title,
	info,
  "name": author->name,
  "categories": categories[]->title,
  "authorImage": author->image,
  body
}`;

Post.getInitialProps = async function (context) {
	// It's important to default the slug so that it doesn't return "undefined"
	const { slug = '' } = context.query;
	return await client.fetch(query, { slug });
};
