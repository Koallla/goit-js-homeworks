'use strict';

const users = ['Mango', 'Poly', 'Ajax', 'Chelsey'];

users.shift();
console.log(users);

users.pop();
console.log(users);

users.unshift('Lux');
console.log(users);

users.push('Jay', 'Kiwi');
console.log(users);

const userToDelete = 'Ajax';
const findAjax = users.indexOf('Ajax'); //Сначала нохожу индекс елемента
users.splice(findAjax, 1);
console.log(users);

const userToInsert = 'Kong';
const insertBefore = 'Jay';
const findJay = users.indexOf('Jay'); //Сначала нохожу индекс елемента
users.splice(findJay, 0, 'Kong');
console.log(users);
