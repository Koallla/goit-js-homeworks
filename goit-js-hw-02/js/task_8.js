'use strict';

const logins = ['Mango', 'robotGoogles', 'Poly', 'Aj4x1sBozz', 'qwerty123'];

let userInput = prompt('Введите логин');

const isLoginValid = function(login) {
  return login.length >= 4 && login.length <= 16;
};

const isLoginUnique = function(allLogins, login) {
  return allLogins.includes(login);
};

const addLogin = function(allLogins, login) {
  if (login === null) {
    return alert('Отменено пользователем');
  }
  if (!isLoginValid(login)) {
    return alert('Ошибка! Логин должен быть от 4 до 16 символов');
  }

  if (isLoginUnique(allLogins, login)) {
    return alert('Такой логин уже используется!');
  } else {
    logins.push(login);
    console.log(logins);
    return alert('Логин успешно добавлен!');
  }
};

console.log(addLogin(logins, userInput));
