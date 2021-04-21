import Container from ':components/Container';
import CustomHead from ':components/Head';
import Heading from ':components/Heading';
import Button from ':components/Button';
import Text from ':components/Text';
import Footer from ':components/Footer';

export default function PrivacyPage() {
	return (
		<>
			<CustomHead title="Error | Ben-J. Ferch" desc="Hey!" noIndex />
			<Container className="h-[90vh] flex flex-col justify-center">
				<Heading level={1}>Error!</Heading>
				<Text>
					The page you are looking for might have been removed had its name
					changed or is temporarily unavailable.
				</Text>
				<Button className="max-w-1/3" onClick={() => window.open('/', '_self')}>
					Return to homepage
				</Button>
			</Container>
			<Footer />
		</>
	);
}
