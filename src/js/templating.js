import postFeedTemplate from '../templates/post-feed.hbs';
import menu from '../menu.json';

const menuItems = document.querySelector('.menu');

const markup = postFeedTemplate(menu);

menuItems.insertAdjacentHTML('beforeend', markup);
