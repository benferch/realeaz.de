import Background from ':components/Background';
import Container from ':components/Container';
import Menu from ':components/Menu';
import WorkHistory, { history } from ':components/WorkHistory';

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
