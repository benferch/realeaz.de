import Link from 'next/link';
import client from ':components/util/client';
import groq from 'groq';

export default function blogIndex(props) {
	const { posts = [] } = props;
	return (
		<div>
			<h1>Welcome to a blog!</h1>
			{posts.map(
				({ _id, title = '', slug = '', _updatedAt = '' }) =>
					slug && (
						<li key={_id}>
							<Link
								prefetch
								href="/blog/post/[slug]" /*@ts-ignore This is fine.*/
								as={`/blog/post/${slug.current}`}
							>
								<a>{title}</a>
							</Link>{' '}
							({new Date(_updatedAt).toDateString()})
						</li>
					)
			)}
		</div>
	);
}

blogIndex.getInitialProps = async () => ({
	posts: await client.fetch(groq`
    *[_type == "post" && publishedAt < now()]|order(publishedAt desc)
  `),
});
