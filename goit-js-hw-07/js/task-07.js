'use script';

const range = document.querySelector('#font-size-slider');
const text = document.querySelector('#text');

const minSize = 16;

range.addEventListener('change', changeFontSize);

function changeFontSize() {
  const fontSize = minSize + (minSize * range.value) / 100;
  text.style.fontSize = `${fontSize}px`;
}
