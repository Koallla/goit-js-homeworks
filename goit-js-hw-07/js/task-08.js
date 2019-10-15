'use script';

const input = document.querySelector('#controls > input');
const boxes = document.querySelector('#boxes');
const btnRender = document.querySelector('button[data-action="render"]');
const btnDestroy = document.querySelector('button[data-action="destroy"]');

btnDestroy.addEventListener('click', () => {
  destroyBoxes(input.value);
});

btnRender.addEventListener('click', () => {
  createBoxes(input.value);
});

function createBoxes(amount) {
  const width = 30;
  const height = 30;
  const step = 10;
  let arrayDiv = [];
  for (let i = 1; i <= amount; i += 1) {
    const div = document.createElement('div');
    div.classList.add('div');
    div.style.width = Number(`${width}`) + (i - 1) * Number(`${step}`) + `px`;
    div.style.height = Number(`${height}`) + (i - 1) * Number(`${step}`) + `px`;
    div.style.backgroundColor = randomColor();
    arrayDiv.push(div);
  }
  boxes.append(...arrayDiv);
}

function randomColor() {
  let allowed = 'ABCDEF0123456789',
    color = '#';
  while (color.length < 7) {
    color += allowed.charAt(Math.floor(Math.random() * 16 + 1));
  }
  return color;
}

function destroyBoxes(inputValue) {
  let div = document.querySelectorAll('.div');
  for (let i = 0; i < inputValue; i += 1) {
    div[i].remove();
  }
}
