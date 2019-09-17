'use script';

const menu = document.querySelector('#categories');
const liItem = document.querySelectorAll('.item');
let countCategoriesInMenu = menu.childElementCount;

function showElement() {
  console.log(`Количество категорий в списке ${countCategoriesInMenu} шт`);
  const arrayMenuItem = [...liItem];

  const arrayH2 = arrayMenuItem.map(el => el.querySelector('h2').textContent);

  const countLiInliItem = arrayMenuItem.map(
    el => el.querySelector('ul').childElementCount,
  );

  for (let i = 0; i < arrayH2.length; i += 1) {
    console.log(`Категория: ${arrayH2[i]}`);
  }

  for (let i = 0; i < countLiInliItem.length; i += 1) {
    console.log(`Количество элементов: ${countLiInliItem[i]}`);
  }
}

showElement();
