import Container from ':components/Container';
import Heading from ':components/Heading';
import Menu from ':components/Menu';

export default function HomePage() {
	return (
		<>
			<Container className="mt-40">
				<Menu active="home" />
				<Container className="mt-32">
					<Heading level={1}>
						Hi, I'm Ben! <span className="animate-wave">👋</span>
					</Heading>
				</Container>
			</Container>
		</>
	);
}
