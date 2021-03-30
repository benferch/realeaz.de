import Container from ':components/Container';
import CustomHead from ':components/CustomHead';
import Heading from ':components/Heading';
import Button from ':components/Button';
import Text from ':components/Text';
import useTranslation from ':components/util/useTranslation';
import Footer from ':components/Footer';

export default function PrivacyPage() {
	const { t } = useTranslation();
	return (
		<>
			<CustomHead title="Error | Ben-J. Ferch" desc="Hey!" />
			<Container className="h-[90vh] flex flex-col justify-center">
				<Heading level={1}>Error!</Heading>
				<Text>{t('errMsg')}</Text>
				<Button className="max-w-1/3" onClick={() => window.open('/', '_self')}>
					{t('homeLink')}
				</Button>
			</Container>
			<Footer />
		</>
	);
}
