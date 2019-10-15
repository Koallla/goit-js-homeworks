'use strict';

let credits = 23580;

const pricePerDroid = 3000;

let quantityDroid = prompt('Какое количество дроидов вы хотите купить?');

if (quantityDroid === null) {
  console.log('Отменено пользователем!');
}

if (quantityDroid === '') {
  console.log('Не введен номер'); //На всякий случай
}

if (quantityDroid) {
  let totalPrice = quantityDroid * pricePerDroid;
  if (totalPrice > credits) {
    console.log('Недостаточно средств на счету!');
  } else
    alert(
      `Вы купили ${quantityDroid} дроидов, на счету осталось ${credits -
        totalPrice} кредитов.`,
    );
}
