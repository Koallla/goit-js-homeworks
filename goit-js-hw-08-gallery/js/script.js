'use script';

import gallery from './gallery-items.js';

const ul = document.querySelector('.gallery');
const lightbox = document.querySelector('.lightbox');
const lightboxImgSrc = document.querySelector('.lightbox___image');
const lightContetn = document.querySelector('.lightbox__content');
const btnClose = document.querySelector('.material-icons');
const img = document.querySelector('.gallery__image');

function createLi(item) {
  return `<li class="gallery__item">
    <a
      class="gallery__link"
      href="${item.original}"
    >
      <img
        class="gallery__image"
        src="${item.preview}"
        
        data-source="${item.original}"
        alt="Tulips"
      />
  
      <span class="gallery__icon">
        <i class="material-icons">zoom_out_map</i>
      </span>
    </a>
  </li>`;
  // data-lazy="${item.preview}"
}

const allLiInString = gallery.map(item => createLi(item)).join(' ');

ul.insertAdjacentHTML('afterbegin', allLiInString);

function openModal(event) {
  if (event.target.className === 'gallery__image') {
    event.preventDefault();
    lightbox.classList.add('is-open');
    const dataSrc = event.target.dataset.source;
    lightboxImgSrc.src = dataSrc;
  }
}

const closeModal = event => {
  if (
    event.target === lightContetn ||
    event.target === btnClose ||
    event.code === 'Escape'
  ) {
    lightbox.classList.remove('is-open');
    lightboxImgSrc.src = ''; //Виталий, правильно я сделал?
  }
};

ul.addEventListener('click', openModal);
window.addEventListener('click', closeModal);
window.addEventListener('keyup', closeModal);

// lazyLoad
// ===================================================================================================

// const lazyLoad = target => {
//   const options = {
//     rootMargin: '20px',
//     threshold: 0.5,
//   };

//   const io = new IntersectionObserver((entries, observer) => {
//     entries.forEach(entry => {
//       if (entry.isIntersecting) {
//         const img = entry.target;
//         const imageUrl = img.dataset.lazy;
//         img.setAttribute('src', imageUrl);

//         // img.classList.add('is-open');

//         observer.disconnect();
//       }
//     });
//   }, options);

//   io.observe(target);
// };

// const images = document.querySelectorAll('.gallery__image');

// images.forEach(image => {
//   lazyLoad(image);
// });
