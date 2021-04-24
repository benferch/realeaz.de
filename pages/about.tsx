import Container from ':components/Container';
import Menu from ':components/Menu';

export default function AboutPage() {
	return (
		<>
			<Container className="mt-40">
				<Menu active="about" />
			</Container>
		</>
	);
}
