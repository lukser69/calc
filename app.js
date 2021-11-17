const enter = document.querySelector('.enter');
const result = document.querySelector('.result');
const nums = document.querySelectorAll('.num');
const signs = document.querySelectorAll('.sign');
const symbols = document.querySelectorAll('.symbol');
const deletes = document.querySelectorAll('.delete');
const equally = document.querySelector('.equally');
const fraction = document.getElementById('fraction');
const sqrt = document.getElementById('sqrt');
const degree = document.getElementById('degree');
const point = document.getElementById('point');
const backspace = document.getElementById('backspace');
let sum = '';

for (const num of nums) {
	num.addEventListener('click', (event) => {
		enter.innerHTML += `<span>${event.target.innerText}</span>`;
		sum += `${event.target.innerText}`;
		result.innerHTML = eval(sum);
	});
}

for (const sign of signs) {
	sign.addEventListener('click', (event) => {
		enter.innerHTML += `<span>${event.target.innerText}</span>`;
		sum += `${event.target.id}`;
	});
}

for (const del of deletes) {
	del.addEventListener('click', (event) => {
		enter.innerHTML = '';
		sum = '';
		result.innerHTML = '';
	});
}

point.addEventListener('click', () => {
	if (sum != '') {
		enter.innerHTML += '<span>.</span>';
		sum += '.';
	}
});

fraction.addEventListener('click', (event) => {
	if (sum != '') {
		enter.innerHTML = `<span>${eval(`1/(${sum})`)}</span>`;
		sum = eval(`1/(${sum})`);
		result.innerHTML = '';
	}
});

sqrt.addEventListener('click', (event) => {
	if (sum != '') {
		enter.innerHTML = `<span>${Math.sqrt(eval(sum))}</span>`;
		sum = Math.sqrt(eval(sum));
		result.innerHTML = '';
	}
});

degree.addEventListener('click', (event) => {
	if (sum != '') {
		enter.innerHTML = `<span>${eval(`(${sum})*(${sum})`)}</span>`;
		sum = eval(`(${sum})*(${sum})`);
		result.innerHTML = '';
	}
});

equally.addEventListener('click', (event) => {
	if (sum != '') {
		enter.innerHTML = `<span>${eval(sum)}</span>`;
		sum = `${eval(sum)}`;
		result.innerHTML = '';
	}
});

backspace.addEventListener('click', (event) => {
	if (sum != '') {
		let newSum;
		newSum = sum.split('');
		newSum.pop();
		sum = newSum.join('');
		enter.innerHTML = `<span>${sum}</span>`;
		if (sum.length === 0) result.innerHTML = '';
	}
});

document.addEventListener('keydown', (event) => {
	switch (event.key) {
		case '0':
			enter.innerHTML += `<span>0</span>`;
			sum += '0';
			result.innerHTML = eval(sum);
			break;
		case '1':
			enter.innerHTML += `<span>1</span>`;
			sum += '1';
			result.innerHTML = eval(sum);
			break;
		case '2':
			enter.innerHTML += `<span>2</span>`;
			sum += '2';
			result.innerHTML = eval(sum);
			break;
		case '3':
			enter.innerHTML += `<span>3</span>`;
			sum += '3';
			result.innerHTML = eval(sum);
			break;
		case '4':
			enter.innerHTML += `<span>4</span>`;
			sum += '4';
			result.innerHTML = eval(sum);
			break;
		case '5':
			enter.innerHTML += `<span>5</span>`;
			sum += '5';
			result.innerHTML = eval(sum);
			break;
		case '6':
			enter.innerHTML += `<span>6</span>`;
			sum += '6';
			result.innerHTML = eval(sum);
			break;
		case '7':
			enter.innerHTML += `<span>7</span>`;
			sum += '7';
			result.innerHTML = eval(sum);
			break;
		case '8':
			enter.innerHTML += `<span>8</span>`;
			sum += '8';
			result.innerHTML = eval(sum);
			break;
		case '9':
			enter.innerHTML += `<span>9</span>`;
			sum += '9';
			result.innerHTML = eval(sum);
			break;
		case 'Backspace':
			if (sum != '') {
				let newSum;
				newSum = sum.split('');
				newSum.pop();
				sum = newSum.join('');
				enter.innerHTML = `<span>${sum}</span>`;
				if (sum.length === 0) result.innerHTML = '';
			}
			break;
		case '=':
			if (sum != '') {
				enter.innerHTML = `<span>${eval(sum)}</span>`;
				sum = `${eval(sum)}`;
				result.innerHTML = '';
			}
			break;
		case 'Enter':
			if (sum != '') {
				enter.innerHTML = `<span>${eval(sum)}</span>`;
				sum = `${eval(sum)}`;
				result.innerHTML = '';
				console.log(typeof 1);
				break;
			}
	}
});

document.addEventListener('keydown', (event) => {
	let newSum = sum.split('');
	if (
		newSum.pop() !== '/' ||
		newSum.pop() !== '*' ||
		newSum.pop() !== '-' ||
		newSum.pop() !== '+'
	) {
		switch (event.key) {
			case '-':
				enter.innerHTML += `<span>-</span>`;
				sum += '-';
				break;
			case '*':
				enter.innerHTML += `<span>&times;</span>`;
				sum += '*';
				break;
			case '/':
				enter.innerHTML += `<span>&divide;</span>`;
				sum += '/';
				break;
			case '+':
				enter.innerHTML += `<span>+</span>`;
				sum += '+';
				break;
			case '.':
				enter.innerHTML += `<span>.</span>`;
				sum += '.';
				break;
		}
	}
});
