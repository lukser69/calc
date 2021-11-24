const enter = document.querySelector('.enter');
const result = document.querySelector('.result');
const nums = document.querySelectorAll('.num');
const signs = document.querySelectorAll('.sign');
const symbols = document.querySelectorAll('.symbol');
const btnThatClearEnter = document.querySelector('.enterClear');
const btnThatAllClear = document.querySelector('.allClear');
const equal = document.querySelector('.equal');
const fraction = document.querySelector('.fraction');
const sqrt = document.querySelector('.sqrt');
const degree = document.querySelector('.degree');
const decimalPoint = document.querySelector('.decimalPoint');
const backspace = document.querySelector('.backspace');
const swapSign = document.querySelector('.swapSign');
let sum = '';
let lastSign = '';

for (const num of nums) {
	num.addEventListener('click', (event) => {
		enter.innerText += `${event.target.innerText}`;
		sum += `${event.target.innerText}`;
	});
}

for (const sign of signs) {
	sign.addEventListener('click', (event) => {
		if (sum !== '') {
			const resultText = result.innerHTML;
			const lastEl = sum[sum.length - 1];
			if (lastEl !== lastSign) {
				result.innerHTML = `${eval(sum)}&nbsp;${event.target.innerText}`;
				sum = eval(sum) + event.target.dataset.sign;
				lastSign = `${event.target.dataset.sign}`;
				enter.innerText = '';
			} else {
				result.innerHTML = `${resultText.slice(0, sum.length - 1)}&nbsp;${
					event.target.innerHTML
				}`;
				sum = eval(sum.slice(0, sum.length - 1)) + event.target.dataset.sign;
				lastSign = `${event.target.dataset.sign}`;
			}
		} else if (sum === '' && event.target.dataset.sign === '-') {
			sum += '0-';
			result.innerHTML = `0&nbsp;${event.target.innerText}`;
			lastSign = `${event.target.dataset.sign}`;
		}
	});
}

btnThatClearEnter.addEventListener('click', (event) => {
	if (sum !== '') {
		const searchEqual = result.innerText.indexOf('=');
		if (result.innerText === '') {
			enter.innerText = '';
			sum = '';
		} else if (searchEqual !== -1) {
			enter.innerText = '';
			sum = '';
			result.innerText = '';
		} else {
			enter.innerText = '';
			let lastEl = sum[sum.length - 1];
			while (lastEl !== lastSign) {
				sum = sum.slice(0, sum.length - 1);
				lastEl = sum[sum.length - 1];
			}
		}
	}
});

btnThatAllClear.addEventListener('click', (event) => {
	enter.innerText = '';
	sum = '';
	result.innerText = '';
});

decimalPoint.addEventListener('click', () => {
	funcDecimalPoint();
});

swapSign.addEventListener('click', () => {
	if (sum != '') {
		const enterText = enter.innerText;
		if (+enterText > 0) {
			enter.innerHTML = `-${enterText}`;
			let searchLastSign = sum.indexOf(lastSign);
			sum = sum.slice(0, searchLastSign + 1) + `(${enter.innerText})`;
		} else if (+enterText < 0) {
			enter.innerHTML = enterText.slice(1);
			let searchLastSign = sum.indexOf(lastSign);
			sum = sum.slice(0, searchLastSign + 1) + enter.innerText;
		}
	}
});

fraction.addEventListener('click', (event) => {
	if (sum != '') {
		let newSum = eval(`1/(${sum})`);
		let fractionalPart = `${newSum}`.split('.').pop();
		if (fractionalPart.length > 7) newSum = `${parseFloat(newSum).toFixed(7)}`;
		enter.innerText = newSum;
		sum = newSum;
		result.innerText = '';
	}
});

sqrt.addEventListener('click', (event) => {
	if (sum != '') {
		let newSum = Math.sqrt(eval(sum));
		let fractionalPart = `${newSum}`.split('.').pop();
		if (fractionalPart.length > 7) newSum = `${parseFloat(newSum).toFixed(7)}`;
		enter.innerText = `${newSum}`;
		sum = `${newSum}`;
		result.innerText = '';
	}
});

degree.addEventListener('click', (event) => {
	if (sum != '') {
		let newSum = Math.pow(eval(sum), 2);
		let fractionalPart = `${newSum}`.split('.').pop();
		if (fractionalPart.length > 7) newSum = `${parseFloat(newSum).toFixed(7)}`;
		enter.innerText = `${newSum}`;
		sum = `${newSum}`;
		result.innerText = '';
	}
});

equal.addEventListener('click', (event) => {
	funcEqual();
});

backspace.addEventListener('click', (event) => {
	funcBackspace();
});

document.addEventListener('keydown', (event) => {
	switch (event.key) {
		case '0':
			enter.innerText += `0`;
			sum += '0';
			break;
		case '1':
			enter.innerText += `1`;
			sum += '1';
			break;
		case '2':
			enter.innerText += `2`;
			sum += '2';
			break;
		case '3':
			enter.innerText += `3`;
			sum += '3';
			break;
		case '4':
			enter.innerText += `4`;
			sum += '4';
			break;
		case '5':
			enter.innerText += `5`;
			sum += '5';
			break;
		case '6':
			enter.innerText += `6`;
			sum += '6';
			break;
		case '7':
			enter.innerText += `7`;
			sum += '7';
			break;
		case '8':
			enter.innerText += `8`;
			sum += '8';
			break;
		case '9':
			enter.innerText += `9`;
			sum += '9';
			break;
		case '.':
			funcDecimalPoint();
			break;
		case 'Backspace':
			funcBackspace();
			break;
		case '=':
			funcEqual();
			break;
		case 'Enter':
			funcEqual();
			break;
	}
});

document.addEventListener('keydown', (event) => {
	if (
		sum !== '' &&
		(event.key === '+' ||
			event.key === '-' ||
			event.key === '*' ||
			event.key === '/')
	) {
		const resultText = result.innerHTML;
		const lastEl = sum[sum.length - 1];
		if (lastEl !== lastSign) {
			lastSign = `${event.key}`;
			enter.innerText = '';
			switch (event.key) {
				case '-':
					result.innerHTML = `${eval(sum)}&nbsp;&ndash;`;
					sum = eval(sum) + '-';
					break;
				case '*':
					result.innerHTML = `${eval(sum)}&nbsp;&times;`;
					sum = eval(sum) + '*';
					break;
				case '/':
					result.innerHTML = `${eval(sum)}&nbsp;&divide;`;
					sum = eval(sum) + '/';
					break;
				case '+':
					result.innerHTML = `${eval(sum)}&nbsp;+`;
					sum = eval(sum) + '+';
					break;
			}
		} else {
			lastSign = `${event.key}`;
			switch (event.key) {
				case '-':
					result.innerHTML = `${resultText.slice(
						0,
						sum.length - 1
					)}&nbsp;&ndash;`;
					sum = eval(sum.slice(0, sum.length - 1)) + '-';
					break;
				case '*':
					result.innerHTML = `${resultText.slice(
						0,
						sum.length - 1
					)}&nbsp;&times;`;
					sum = eval(sum.slice(0, sum.length - 1)) + '*';
					break;
				case '/':
					result.innerHTML = `${resultText.slice(
						0,
						sum.length - 1
					)}&nbsp;&divide;`;
					sum = eval(sum.slice(0, sum.length - 1)) + '/';
					break;
				case '+':
					result.innerHTML = `${resultText.slice(0, sum.length - 1)}&nbsp;+`;
					sum = eval(sum.slice(0, sum.length - 1)) + '+';
					break;
			}
		}
	} else if (sum === '' && event.key === '-') {
		sum += '0-';
		result.innerHTML = `0&nbsp;${event.key}`;
		lastSign = `${event.key}`;
	}
});

function funcDecimalPoint() {
	const enterText = enter.innerText;
	if (enterText !== '') {
		const searchEqual = result.innerText.indexOf('=');
		const splitEnterText = enterText.split('.');

		if (searchEqual !== -1) result.innerText = '';

		if (splitEnterText.length === 1) {
			enter.innerText += '.';
			sum += '.';
		}
	} else {
		enter.innerText += '0.';
		sum += '0.';
	}
}

function funcBackspace() {
	if (enter.innerText != '') {
		const searchEqual = result.innerText.indexOf('=');
		if (searchEqual === -1) {
			const enterText = enter.innerText;
			sum = sum.slice(0, sum.length - 1);
			enter.innerText = enterText.slice(0, enterText.length - 1);
		} else {
			result.innerText = '';
		}
	}
}

function funcEqual() {
	if (sum != '') {
		const searchEqual = result.innerText.indexOf('=');
		if (searchEqual === -1) {
			sum = `${eval(sum)}`;
			let fractionalPart = sum.split('.').pop();
			if (fractionalPart.length > 7) sum = `${parseFloat(sum).toFixed(7)}`;
			result.innerHTML += `&nbsp;${enter.innerText}&nbsp;=`;
			enter.innerText = sum;
		}
	}
}
