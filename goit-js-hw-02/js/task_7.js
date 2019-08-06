'use strict';

let input;
const numbers = [];
let total = 0;

do {
  input = prompt('Введите число');
  if (Number.isNaN(Number(input))) {
    alert('Вы ввели не номер');
  } else {
    numbers.push(Number(input));
  }
} while (input !== null);
{
  console.log(numbers);
  if (numbers.length === 0) {
    alert('Вы ничего не ввели');
  } else {
    for (const number of numbers) {
      total += number;
    }

    alert(`Общая сумма чисел равна ${total}.`);
  }
}
