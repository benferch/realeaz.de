import Container from ':components/Container';
import Footer from ':components/Footer';
import Title from ':components/Title';
import Text from ':components/Text';
import CustomLink from ':components/Link';
import Bold from ':components/Bold';

export default function ImprintPage() {
	return (
		<>
			<Container>
				<Container className="my-12">
					<div className="flex items-center justify-between">
						<Title level={1}>Impressum</Title>
						<CustomLink href="/">
							<Bold>
								<Title level={2}>Return to homepage</Title>
							</Bold>
						</CustomLink>
					</div>
					<Title level={2} className="my-5">
						Angaben gem&auml;&szlig; &sect; 5 TMG
					</Title>
					<Text>
						Ben-Jannik Ferch
						<br />
						Poggenstra&szlig;e 4a
						<br />
						18574 Garz
					</Text>{' '}
					<br />
					<Title level={2} className="my-2">
						Kontakt
					</Title>
					<Text>
						Telefon: 015234223262
						<br />
						E-Mail: ferch.benj@gmail.com
					</Text>{' '}
					<br />
					<h3>Haftung f&uuml;r Inhalte</h3>
					<Text>
						Als Diensteanbieter sind wir gem&auml;&szlig; &sect; 7 Abs.1 TMG
						f&uuml;r eigene Inhalte auf diesen Seiten nach den allgemeinen
						Gesetzen verantwortlich. Nach &sect;&sect; 8 bis 10 TMG sind wir als
						Diensteanbieter jedoch nicht verpflichtet, &uuml;bermittelte oder
						gespeicherte fremde Informationen zu &uuml;berwachen oder nach
						Umst&auml;nden zu forschen, die auf eine rechtswidrige
						T&auml;tigkeit hinweisen.
					</Text>
					<Text>
						Verpflichtungen zur Entfernung oder Sperrung der Nutzung von
						Informationen nach den allgemeinen Gesetzen bleiben hiervon
						unber&uuml;hrt. Eine diesbez&uuml;gliche Haftung ist jedoch erst ab
						dem Zeitpunkt der Kenntnis einer konkreten Rechtsverletzung
						m&ouml;glich. Bei Bekanntwerden von entsprechenden
						Rechtsverletzungen werden wir diese Inhalte umgehend entfernen.
					</Text>{' '}
					<br />
					<h3>Haftung f&uuml;r Links</h3>
					<Text>
						Unser Angebot enth&auml;lt Links zu externen Websites Dritter, auf
						deren Inhalte wir keinen Einfluss haben. Deshalb k&ouml;nnen wir
						f&uuml;r diese fremden Inhalte auch keine Gew&auml;hr
						&uuml;bernehmen. F&uuml;r die Inhalte der verlinkten Seiten ist
						stets der jeweilige Anbieter oder Betreiber der Seiten
						verantwortlich. Die verlinkten Seiten wurden zum Zeitpunkt der
						Verlinkung auf m&ouml;gliche Rechtsverst&ouml;&szlig;e
						&uuml;berpr&uuml;ft. Rechtswidrige Inhalte waren zum Zeitpunkt der
						Verlinkung nicht erkennbar.
					</Text>
					<Text>
						Eine permanente inhaltliche Kontrolle der verlinkten Seiten ist
						jedoch ohne konkrete Anhaltspunkte einer Rechtsverletzung nicht
						zumutbar. Bei Bekanntwerden von Rechtsverletzungen werden wir
						derartige Links umgehend entfernen.
					</Text>{' '}
					<br />
					<h3>Urheberrecht</h3>
					<Text>
						Die durch die Seitenbetreiber erstellten Inhalte und Werke auf
						diesen Seiten unterliegen dem deutschen Urheberrecht. Die
						Vervielf&auml;ltigung, Bearbeitung, Verbreitung und jede Art der
						Verwertung au&szlig;erhalb der Grenzen des Urheberrechtes
						bed&uuml;rfen der schriftlichen Zustimmung des jeweiligen Autors
						bzw. Erstellers. Downloads und Kopien dieser Seite sind nur f&uuml;r
						den privaten, nicht kommerziellen Gebrauch gestattet.
					</Text>
					<Text>
						Soweit die Inhalte auf dieser Seite nicht vom Betreiber erstellt
						wurden, werden die Urheberrechte Dritter beachtet. Insbesondere
						werden Inhalte Dritter als solche gekennzeichnet. Sollten Sie
						trotzdem auf eine Urheberrechtsverletzung aufmerksam werden, bitten
						wir um einen entsprechenden Hinweis. Bei Bekanntwerden von
						Rechtsverletzungen werden wir derartige Inhalte umgehend entfernen.
					</Text>{' '}
					<br />
					<Text>
						Quelle:{' '}
						<CustomLink href="https://www.e-recht24.de">
							https://www.e-recht24.de
						</CustomLink>
					</Text>
				</Container>
				<Footer />
			</Container>
		</>
	);
}
