import Background from ':components/Background';
import Bold from ':components/Bold';
import Box from ':components/Box';
import Container from ':components/Container';
import Footer from ':components/Footer';
import Menu from ':components/Menu';
import Muted from ':components/Muted';
import SkillList from ':components/SkillList';
import Text from ':components/Text';
import Title from ':components/Title';
import WorkHistory, { history } from ':components/WorkHistory';

export default function AboutPage() {
	return (
		<>
			<Background />
			<Container>
				<Menu active="about" />
				<Container noMx reducedMt>
					<Bold>
						<Title level={1}>I&apos;m Ben,</Title>
					</Bold>
					<Muted>
						<Text className="mt-2 text-justify w-3/4 xl:w-1/2">
							a developer from Germany. <br /> My interest in development was
							sparked in 2015 when I attended a website building course, since
							then I have been steadily improving my skills. <br />
							Since 2018 I&apos;ve been working at Effective Bytes, where my
							main tasks consist of creating websites with Drupal and WordPress,
							server administration and deployment are also part of it. I also
							spend my free time creating websites, for which I mostly use
							Next.js. When I&apos;m not doing this, I am probably riding my
							motorcycle.
						</Text>
					</Muted>
					<WorkHistory current={history.current} previous={history.previous} />
					<Box className="text-black h-auto p-8 space-y-3 mt-12">
						<Bold>
							<Title level={2}>SKILLS</Title>
						</Bold>
						<SkillList />
					</Box>
				</Container>
			</Container>
			<Container>
				<Footer />
			</Container>
		</>
	);
}
