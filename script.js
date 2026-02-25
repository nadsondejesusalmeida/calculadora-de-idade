function calculateAge() {
	const dateOfBirth = new Date(document.getElementById('date-of-birth').value);
	if (isNaN(dateOfBirth)) return;
	
	const now = new Date();
	let years = now.getFullYear() - dateOfBirth.getFullYear();
	let months = now.getMonth() - dateOfBirth.getMonth();
	let days = now.getDate() - dateOfBirth.getDate();
	
	if (days < 0) {
		months--;
		days += new Date(now.getFullYear(), now.getMonth(), 0).getDate();
	}
	
	if (months < 0) {
		years--;
		months += 12;
	}
	
	document.querySelector('.result').textContent = `Você tem ${years} anos, ${months} meses e ${days} dias de idade`;
}