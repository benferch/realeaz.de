import Document, {
	Html,
	Head,
	Main,
	NextScript,
	DocumentContext,
} from 'next/document';

class MyDocument extends Document {
	static async getInitialProps(ctx: DocumentContext) {
		const initialProps = await Document.getInitialProps(ctx);
		return { ...initialProps };
	}

	render() {
		return (
			<Html lang="en">
				<Head />
				<body className="dark:bg-gray-900 bg-gray-50 dark:text-gray-50 text-gray-900 transition duration-300 ease-out">
					<Main />
					<NextScript />
				</body>
			</Html>
		);
	}
}

export default MyDocument;
