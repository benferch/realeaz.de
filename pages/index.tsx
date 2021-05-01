import Background from ':components/Background';
import Container from ':components/Container';
import Footer from ':components/Footer';
import Menu from ':components/Menu';
import Muted from ':components/Muted';
import Text from ':components/Text';
import Title from ':components/Title';

export default function HomePage() {
	return (
		<>
			<Background />
			<Container>
				<Menu active="home" />
				<Title className="mt-36" level={1}>
					Hi, I'm Ben <span className="animate-wave inline-block">👋</span>
				</Title>
				<Muted>
					<Text className="mt-2">
						a developer and mechanical keyboard enthusiast from germany
					</Text>
				</Muted>
			</Container>
			<Container>
				<Footer />
			</Container>
		</>
	);
}
