import { HTMLHead } from '../components/Organisms/';
import { Heading, Container, Link, Text } from '../components/Atoms/';

export default function HomePage() {
	return (
		<>
			<HTMLHead title="Ben Ferch" />
			<Link type="scroll" target="#a123">
				Hello World
			</Link>
			<Container id="a123">
				<Heading type="h1">Hello World</Heading>
				<Text type="lowlight">123</Text>
			</Container>
		</>
	);
}
