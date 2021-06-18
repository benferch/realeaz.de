import Background from ':components/Background';
import Bold from ':components/Bold';
import Box from ':components/Box';
import Button from ':components/Button';
import Container from ':components/Container';
import Footer from ':components/Footer';
import CustomLink from ':components/Link';
import Menu from ':components/Menu';
import Text from ':components/Text';
import Title from ':components/Title';

export default function ProjectsPage() {
	return (
		<>
			<Background />
			<Container>
				<Menu active="projects" />
				<Container className="space-y-8" reducedMt>
					<Box className="text-black p-8 pb-6">
						<Bold>
							<Title level={2}>TWITTER BOT</Title>
						</Bold>
						<div className="flex justify-center pt-8">
							<Bold>
								<Text>
									The Twitter bot tweets posts from subreddits on Twitter.{' '}
									<br /> It uses MongoDB to store the posts and Node.js.
								</Text>
							</Bold>
						</div>
						<div className="flex space-x-32 justify-center mt-10">
							<Button>
								<CustomLink
									targetBlank
									href="https://github.com/benferch/reddit-twitter"
								>
									<Bold>
										<Text>CODE</Text>
									</Bold>
								</CustomLink>
							</Button>
							<Button>
								<CustomLink targetBlank href="https://twitter.com/r_mkeyboards">
									<Bold>
										<Text>DEMO</Text>
									</Bold>
								</CustomLink>
							</Button>
						</div>
					</Box>
					<Box className="text-black p-8 pb-6">
						<Bold>
							<Title level={2}>MetaPeta</Title>
						</Bold>
						<div className="flex justify-center pt-8">
							<Bold>
								<Text>
									MetaPeta was created at Jugendhackt 2018 in Schwerin. <br />
									It is a tool to remove meta data from images.
								</Text>
							</Bold>
						</div>
						<div className="flex space-x-32 justify-center mt-10">
							<Button>
								<CustomLink
									targetBlank
									href="https://github.com/Jugendhackt/MetaPeta"
								>
									<Bold>
										<Text>CODE</Text>
									</Bold>
								</CustomLink>
							</Button>
							<Button>
								<CustomLink
									targetBlank
									href="https://jugendhackt.github.io/MetaPeta/"
								>
									<Bold>
										<Text>DEMO</Text>
									</Bold>
								</CustomLink>
							</Button>
						</div>
					</Box>
					<Box className="text-black p-8 pb-6">
						<Bold>
							<Title level={2}>PacTrac</Title>
						</Bold>
						<div className="flex justify-center pt-8">
							<Bold>
								<Text>
									PacTrac was created at Jugendhackt 2019 in Rostock. <br />
									It is a tool to track parcels from different delivery
									services.
								</Text>
							</Bold>
						</div>
						<div className="flex space-x-32 justify-center mt-10">
							<Button>
								<CustomLink
									targetBlank
									href="https://github.com/Jugendhackt/PacTrac"
								>
									<Bold>
										<Text>CODE</Text>
									</Bold>
								</CustomLink>
							</Button>
							<Button>
								<CustomLink
									targetBlank
									href="https://jugendhackt.github.io/PacTrac/"
								>
									<Bold>
										<Text>DEMO</Text>
									</Bold>
								</CustomLink>
							</Button>
						</div>
					</Box>
				</Container>
				<Footer />
			</Container>
		</>
	);
}
