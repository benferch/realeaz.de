import { HTMLHead } from '../components/Organisms/';
import { Heading, Container, Link } from '../components/Atoms/';

export default function HomePage() {
	return (
		<>
			<HTMLHead title="Ben Ferch" />
			<Link type="scroll" text="Hello World" target="#a123" />
			<Container id="a123">
				<Heading type="h1" text="Hello World" />
			</Container>
		</>
	);
}
