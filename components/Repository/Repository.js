import styles from './Repository.module.sass';
import { Heading, Text, Button } from '../';

export default function Repository({ title, description, code, demo }) {
	return (
		<div class={styles.repo}>
			<Heading type="h3">{title}</Heading>
			<Text>{description}</Text>
			<Button link type="external" target={code}>
				Code
			</Button>
			<Button link type="external" target={demo}>
				Demo
			</Button>
		</div>
	);
}
