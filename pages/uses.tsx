import Container from ':components/Container';
import Menu from ':components/Menu';

export default function UsesPage() {
	return (
		<>
			<Container className="mt-40">
				<Menu active="uses" />
			</Container>
		</>
	);
}
