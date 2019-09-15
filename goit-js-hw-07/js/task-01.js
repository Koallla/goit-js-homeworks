'use script';

const menuItem = document.querySelectorAll('.item');
console.log(menuItem);

const arrayMenuItem = [...menuItem];

console.log(arrayMenuItem.map(el => el.querySelector('h2').textContent));
console.log(arrayMenuItem.map(el => el.querySelectorAll('li')));
