import Background from ':components/Background';
import Bold from ':components/Bold';
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
				<Container noMx>
					<Bold>
						<Title level={1}>
							Hi, I&apos;m Ben{' '}
							<span className="animate-wave inline-block">👋</span>
						</Title>
					</Bold>
					<Muted>
						<Text className="mt-2">a developer from Germany</Text>
					</Muted>
				</Container>
			</Container>
			<Container>
				<Footer />
			</Container>
		</>
	);
}
