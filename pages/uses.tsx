import Background from ':components/Background';
import Bold from ':components/Bold';
import Container from ':components/Container';
import Footer from ':components/Footer';
import Menu from ':components/Menu';
import Title from ':components/Title';

export default function UsesPage() {
	return (
		<>
			<Background />
			<Container>
				<Menu active="uses" />
				<Container className="space-y-8" reducedMt>
					<div>
						<Bold>
							<Title level={2}>Hardware</Title>
						</Bold>
						<div className="mx-10 mt-2">
							<ul className="list-disc">
								<li>
									MacBook Pro (13-inch, 2017, 500GB Storage, 16GB Memory, 3,1GHz
									i5)
								</li>
								<li>Desktop PC:</li>
								<li className="mx-10">
									<li>OS: Windows 10</li>
									<li>Case: be quiet! Pure Base 600 Window</li>
									<li>Processor: Intel i5 7400</li>
									<li>Video Card: KFA2 GeForce GTX 1060 OC 6GB</li>
									<li>Memory: G.Skill 16GB DDR4-2132</li>
									<li>Storage: 2x HDD 1TB WD, 1x NVMe 500GB WD_Black</li>
								</li>
								<li>iPad Pro (11-inch, 2020)</li>
								<li>Apple Pencil 2</li>
								<li>Samsung Galaxy S8</li>
							</ul>
						</div>
					</div>
					<div>
						<Bold>
							<Title level={2}>Desk Setup</Title>
						</Bold>
						<div className="mx-10 mt-2">
							<ul className="list-disc">
								<li>Monitor: ASUS VP247H, iiyama G2440HSU-B1</li>
								<li>Mouse: FNATIC Clutch 2</li>
								<li>Keyboard:</li>
								<li className="mx-10">
									<li>Case: GMMK Pro</li>
									<li>Plate: Polycarbonate</li>
									<li>Switches: Tealios V2</li>
									<li>SOON™</li>
								</li>
								<li>Speakers:</li>
								<li className="mx-10">
									<li>beyerdynamic DT-770 80 Ohm</li>
									<li>beyerdynamic Beat Byrd</li>
								</li>
								<li>Microphone: Auna MIC-900B</li>
							</ul>
						</div>
					</div>
					<div>
						<Bold>
							<Title level={2}>Software</Title>
						</Bold>
						<div className="mx-10 mt-2">
							<ul className="list-disc">
								<li>VS Code, PhpStorm</li>
								<li className="mx-10">
									<li>Font: JetBrains Mono</li>
									<li>Theme: One Dark Pro</li>
								</li>
								<li>iTerm 2 with Oh My Zsh</li>
								<li className="mx-10">
									<li>Font: JetBrains Mono</li>
									<li>Theme: One Dark Pro</li>
									<li>ZSH Theme: Lambda</li>
								</li>
								<li>Docker with Docker Compose / Lando</li>
								<li>Postman</li>
								<li>Figma</li>
								<li>Spotify</li>
								<li>Chrome (uBlock Origin, HTTPS Everywhere)</li>
								<li>Tableplus</li>
								<li>Cyberduck</li>
							</ul>
						</div>
					</div>
					<div>
						<Bold>
							<Title level={2}>Tools / Services</Title>
						</Bold>
						<div className="mx-10 mt-2">
							<ul className="list-disc">
								<li>GitHub, GitLab, Bitbucket</li>
								<li>Alfred</li>
								<li>Obsidian</li>
								<li>Spectacle</li>
								<li>Bitwarden, but slowly transitioning to 1Password</li>
								<li>Spark</li>
								<li>Todoist</li>
								<li>Toggl</li>
							</ul>
						</div>
					</div>
					<div>
						<Bold>
							<Title level={2}>Technologies</Title>
						</Bold>
						<div className="mx-10 mt-2">
							<ul className="list-disc">
								<li>React</li>
								<li>Next.js</li>
								<li>Sanity</li>
								<li>Vercel</li>
								<li>Node.js</li>
								<li>Typescript</li>
								<li>Tailwind CSS</li>
								<li>Sass</li>
								<li>MongoDB</li>
								<li>Prettier</li>
								<li>Docker</li>
							</ul>
						</div>
					</div>
				</Container>
				<Footer />
			</Container>
		</>
	);
}
