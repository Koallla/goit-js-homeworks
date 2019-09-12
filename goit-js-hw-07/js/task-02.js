'use script';

const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

const ul = document.querySelector('#ingredients');

const createLi = text => {
  const li = document.createElement('li');
  li.textContent = text;
  return li;
};

ingredients.forEach(item => {
  ul.insertAdjacentElement('afterbegin', createLi(item));
});
