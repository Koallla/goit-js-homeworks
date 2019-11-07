import template from '../templates/country-data.hbs';
import country from '../templates/country-list.hbs';
import PNotify from '../../node_modules/pnotify/dist/es/PNotify';

const sectionWeather = document.querySelector('#weather');
const baseUrl = 'https://restcountries.eu/rest/v2/name/';
const input = document.querySelector('.search-form');
const listCountry = document.querySelector('.languages__list');

function fetchCountry(query) {
  if (query) {
    fetch(baseUrl + query)
      .then(response => {
        return response.json();
      })
      .then(data => {
        if (data.length > 10) {
          PNotify.alert({
            text: 'Необходимо сделать запрос более специфичным.',
            type: 'notice',
          });
          return;
        }

        if (data.length > 2 && data.length <= 10) {
          const countryList = data.map(value => country(value.name)).join('');
          listCountry.insertAdjacentHTML('beforeend', countryList);
          return;
        }

        const markup = data.map(value => template(value)).join('');
        sectionWeather.insertAdjacentHTML('beforeend', markup);
      })
      .catch(e => {
        alert('Такой страны не найдено');
      });
  }

  if (input.value.length === 0) {
    sectionWeather.insertAdjacentHTML('beforeend', '');
    listCountry.insertAdjacentHTML('beforeend', '');
    const templateHbs = document.querySelector('.template');
    templateHbs ? templateHbs.remove() : (listCountry.innerHTML = '');
  }
}

input.addEventListener(
  'input',
  _.debounce(e => {
    const countryName = e.target.value;
    fetchCountry(countryName);
  }, 700),
);

PNotify.defaults.addClass = 'pnoty';
