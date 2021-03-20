import Link from 'next/link';
import client from ':components/util/client';
import groq from 'groq';
import Container from ':components/Container';
import CustomHead from ':components/CustomHead';

export default function blogIndex(props) {
	const { posts = [] } = props;
	return (
		<>
			<CustomHead title="Blog | Ben-J. Ferch" desc="Hey!" />
			<Container className="my-12">
				{posts.map(
					({ _id, title = '', info = '', slug = '', _updatedAt = '' }) =>
						slug && (
							<li key={_id} className="list-none">
								<Link
									href="/blog/post/[slug]" /*@ts-ignore This is fine.*/
									as={`/blog/post/${slug.current}`}
								>
									<a>{title}</a>
								</Link>{' '}
								{info}({new Date(_updatedAt).toDateString()})
							</li>
						)
				)}
			</Container>
		</>
	);
}

blogIndex.getInitialProps = async () => ({
	posts: await client.fetch(groq`
    *[_type == "post" && publishedAt < now()]|order(publishedAt desc)
  `),
});
