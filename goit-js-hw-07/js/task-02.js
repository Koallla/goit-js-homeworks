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

const arrayIngredients = [];

const createIngredients = ingredients.forEach(item => {
  arrayIngredients.push(createLi(item));
});

ul.prepend(...arrayIngredients);
