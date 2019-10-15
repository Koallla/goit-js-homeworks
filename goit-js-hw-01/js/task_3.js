'use strict';

const ADMIN_PASSWORD = 'jqueryismyjam';

let inputUser = prompt('Введите пожалуйста пароль:');

let message;

if (inputUser) {
  if (inputUser === ADMIN_PASSWORD) {
    message = 'Добро пожаловать!';
  } else {
    message = 'Доступ запрещен, неверный пароль!';
  }
}

if (inputUser === '') {
  message = 'Пароль не введен';
}
if (inputUser === null) {
  message = 'Отменено пользователем!';
}

alert(message);
