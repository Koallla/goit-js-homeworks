'use strict';

const China = 100;
const Chili = 250;
const Australia = 170;
const India = 80;
const Jamaica = 120;

let cost;

let country = prompt('Введите страну доставки:');

if (country === null) {
  console.log('Отменено пользователем');
}

if (country === '') {
  console.log('Не введена страна');
}

if (country) {
  country = country.toLowerCase();

  switch (country) {
    case 'китай':
      China;
      alert(`Доставка в ${country} будет стоить ${China} кредитов.`); //Выводить в каждом кейсе?
      break;

    case 'чили':
      Chili;
      alert(`Доставка в ${country} будет стоить ${Chili} кредитов.`);
      break;

    case 'австралия':
      Australia;
      alert(`Доставка в ${country} будет стоить ${Australia} кредитов.`);
      break;

    case 'индия':
      India;
      alert(`Доставка в ${country} будет стоить ${India} кредитов.`);
      break;

    case 'ямайка':
      Jamaica;
      alert(`Доставка в ${country} будет стоить ${Jamaica} кредитов.`);
      break;

    default:
      alert('В вашей стране доставка не доступна');
      break;
  }
}
