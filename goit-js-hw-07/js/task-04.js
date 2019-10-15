'use script';

const counter = document.querySelector('#value');
let counterValue = 0;

const buttonIncrement = document.querySelector(
  'button[data-action="increment"]',
);

const buttonDecrement = document.querySelector(
  'button[data-action="decrement"]',
);

function increment(event) {
  counterValue += 1;
  counter.textContent = counterValue;
}

function decrement() {
  counterValue -= 1;
  counter.textContent = counterValue;
}

buttonIncrement.addEventListener('click', increment);
buttonDecrement.addEventListener('click', decrement);
