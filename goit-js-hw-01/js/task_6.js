'use strict';

let userInput;

let total = 0;

do {
  userInput = prompt('Введите число');
  if (userInput) {
    if ((userInput = Number(userInput))) {
      total += userInput;
    }
    if (Number.isNaN(userInput) === true) {
      alert('Вы ввели не номер');
    }
  }
} while (userInput !== null);
alert(`Общая сумма чисел равна ${total}.`);
