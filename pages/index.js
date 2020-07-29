import { HTMLHead } from '../components/Organisms/';
import {
	Heading,
	Container,
	Link,
	Text,
	Bold,
	Italic,
	Break,
	List,
	Button,
	ListItem,
} from '../components/Atoms/';

export default function HomePage() {
	return (
		<>
			<HTMLHead title="Ben Ferch" />
			<Link type="scroll" target="#a123" underline>
				Hello World
			</Link>
			<Container id="a123">
				<Heading vertical type="h1">
					Hello World
				</Heading>
				<Text type="lowlight">123</Text>
				<Bold>bold</Bold>
				<Break />
				<Italic>italic</Italic>
				<Button style="7" link type="scroll" target="#a123">
					123
				</Button>
				<List>
					<ListItem>1238</ListItem>
				</List>
			</Container>
		</>
	);
}
