export default function calcAge(dob) {
	const birthday = new Date(dob);
	return ~~((Date.now() - birthday) / 31557600000);
}
