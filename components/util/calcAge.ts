const calcAge = (dob: string) => {
	var today = new Date();
	var birthDate = new Date(dob);
	var age = today.getFullYear() - birthDate.getFullYear();
	var m = today.getMonth() - birthDate.getMonth();
	if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
		age--;
	}
	return age;
};

export default calcAge;
