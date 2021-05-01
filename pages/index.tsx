import Background from ':components/Background';
import Container from ':components/Container';
import Menu from ':components/Menu';

export default function HomePage() {
	return (
		<>
			<Background />
			<Container>
				<Menu active="home" />
			</Container>
		</>
	);
}
