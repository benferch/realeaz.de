import Background from ':components/Background';
import Container from ':components/Container';
import Footer from ':components/Footer';
import Menu from ':components/Menu';

export default function UsesPage() {
	return (
		<>
			<Background />
			<Container>
				<Menu active="uses" />
				<Container></Container>
				<Footer />
			</Container>
		</>
	);
}
