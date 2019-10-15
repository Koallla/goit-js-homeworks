'use script';

const input = document.querySelector('#validation-input');
let lengthInput = input.dataset.length;

input.addEventListener('blur', validationInput);

function validationInput() {
  if (Number(lengthInput) === input.selectionEnd) {
    input.classList.add('valid');
    input.classList.remove('invalid');
  } else input.classList.add('invalid');
}
