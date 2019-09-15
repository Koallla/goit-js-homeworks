'use script';

const input = document.querySelector('#validation-input');
let lengthInput = input.dataset.length;

input.addEventListener('blur', validationInput);

function validationInput() {
  Number(lengthInput) === input.selectionEnd
    ? input.classList.replace('invalid', 'valid')
    : input.classList.add('invalid');
}
