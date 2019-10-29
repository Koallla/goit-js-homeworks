// import fetchCountries from './js/fetchCountries';
import './css/styles.css';
import template from './templates/country-data.hbs';

const sectionWeather = document.querySelector('#weather');
const baseUrl = 'https://restcountries.eu/rest/v2/name/switzerland';

fetch(baseUrl)
  .then(response => {
    return response.json();
  })
  .then(data => {
    const markup = data.map(val => template(val)).join('');
    console.log(markup);
    console.log(data);
  });
