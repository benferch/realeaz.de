import sanityClient from '@sanity/client';

export default sanityClient({
	projectId: 'yb5swzxy',
	dataset: 'production',
	useCdn: true,
});
