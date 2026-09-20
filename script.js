import { getDetailedDuration } from 'https://nadsondejesusalmeida.github.io/assets/scripts/index.js';

const dateOfBirth = document.getElementById('date-of-birth');
const yearElement = document.getElementById('year');
const monthElement = document.getElementById('month');
const dayElement = document.getElementById('day');
const hourElement = document.getElementById('hour');
const minuteElement = document.getElementById('minute');
const secondElement = document.getElementById('second');
const millisecondElement = document.getElementById('millisecond');

dateOfBirth.addEventListener('change', event => {
	const target = event.currentTarget;
	const value = new Date(target.value);

	const { years, months, days, hours, minutes, seconds, milliseconds } =
		getDetailedDuration(value);

	yearElement.textContent = years;
	monthElement.textContent = months;
	dayElement.textContent = days;
	hourElement.textContent = hours;
	minuteElement.textContent = minutes;
	secondElement.textContent = seconds;
	millisecond.textContent = milliseconds;
});
