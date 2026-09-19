import { getDetailedDuration } from 'https://nadsondejesusalmeida.github.io/assets/scripts/index.js';

const dateOfBirth = document.getElementById('date-of-birth');
const result = document.querySelector('.result');

dateOfBirth.addEventListener('change', event => {
	const target = event.currentTarget;
	const value = new Date(target.value.replace('-', '/'));

	const { years, months, days, hours, minutes, seconds, milliseconds } =
		getDetailedDuration(value);

	result.textContent = `Você tem ${years} anos, ${months} meses, ${days} dias, ${hours} horas, ${minutes} minutos, ${seconds} segundos e ${milliseconds} milissegundos de idade.`;
});
