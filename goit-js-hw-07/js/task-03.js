'use script';

const images = [
  {
    url:
      'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url:
      'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url:
      'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

const ul = document.querySelector('#gallery');

function createGallery(item) {
  // const li = document.createElement('li');
  // const img = document.createElement('img');
  // img.src = `${url}`;
  // img.alt = `${alt}`;
  // li.appendChild(img);
  return `<li><img src="${item.url}" alt="${item.alt}"><li>`;
}

// let string = '';

const li = images.reduce((acc, item) => {
  return acc + createGallery(item);
}, '');

console.log(li);

ul.insertAdjacentHTML('afterbegin', li);
