const alphabet = 'abcdefghijklmnopqrstuvwxyz';

const alphabetLowercase = alphabet.split('');
const alphabetUppercase = alphabet.toUpperCase().split('');
const numbers = '1234567890'.split('');
const symbols = `!@#$%^&*()_+{}/`.split('');

const passwordGenerator = (lenght, ...args) => {
  let pass = '';

  for (let i = 0; i < lenght; i++) {
    const random1 = Math.floor(Math.random() * args.length);
    const random2 = Math.floor(Math.random() * args[random1].length);

    pass += args[random1][random2];
  }

  return pass;
};

const pwElement = document.querySelector('#pw');

const lenghtElement = document.querySelector('#len');
const upperCaseElement = document.querySelector('#upper');
const lowerCaseElement = document.querySelector('#lower');
const numbersElement = document.querySelector('#number');
const symbolsElement = document.querySelector('#symbol');

const generateElement = document.querySelector('#generate');
const copyPassElement = document.querySelector('#copy');

let copyText = '';

generateElement.addEventListener('click', () => {
  let conditions = [];

  if (
    lenghtElement.value <= 0 ||
    lenghtElement.value >= 24 ||
    (!upperCaseElement.checked &&
      !lowerCaseElement.checked &&
      !numbersElement.checked &&
      !symbolsElement.checked)
  ) {
    alert('Please enter valid values');
    return;
  }

  let lenght = lenghtElement.value;
  if (upperCaseElement.checked) conditions.push(...alphabetUppercase);
  if (lowerCaseElement.checked) conditions.push(...alphabetLowercase);
  if (numbersElement.checked) conditions.push(...numbers);
  if (symbolsElement.checked) conditions.push(...symbols);

  let pass = passwordGenerator(lenght, conditions);

  pwElement.innerHTML = pass;
  copyText = pass;
});

copyPassElement.addEventListener('click', () => {
  navigator.clipboard.writeText(copyText);
});
