import Container from ':components/Container';
import Menu from ':components/Menu';

export default function ProjectsPage() {
	return (
		<>
			<Container className="mt-40">
				<Menu active="projects" />
			</Container>
		</>
	);
}
