import template from '../templates/country-data.hbs';
import country from '../templates/country-list.hbs';
import PNotify from '../../node_modules/pnotify/dist/es/PNotify';
import PNotifyStyleMaterial from 'pnotify/dist/es/PNotifyStyleMaterial.js';
import 'pnotify/dist/PNotifyBrightTheme.css';

PNotify.defaults.styling = 'material';

const sectionCountry = document.querySelector('#country');
const input = document.querySelector('.search-form');
const listCountry = document.querySelector('.languages__list');
const baseUrl = 'https://restcountries.eu/rest/v2/name/';

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
          sectionCountry.insertAdjacentHTML('beforeend', countryList);
          return;
        }

        const markup = data.map(value => template(value)).join('');
        sectionCountry.insertAdjacentHTML('beforeend', markup);
      })
      .catch(e => {
        PNotify.alert({
          text: 'Такой страны не найдено.',
          type: 'notice',
        });
      });
  }

  if (input.value.length === 0) {
    clearList();
  }
}

const inputCountry = () => {
  input.addEventListener(
    'input',
    _.debounce(e => {
      const countryName = e.target.value;
      fetchCountry(countryName);
    }, 700),
  );
};

const clearList = () => {
  if (sectionCountry) {
    sectionCountry.innerHTML = '';
  }
};

inputCountry();
PNotify.defaults.addClass = 'pnoty';
