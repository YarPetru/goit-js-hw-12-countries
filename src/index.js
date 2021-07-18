import './sass/main.scss';
import countryTpl from './templates/countryTpl.hbs';
import countriesListTpl from './templates/countriesListTpl.hbs';
import fetchCountries from './js/fetchCountries.js';

const debounce = require('lodash.debounce');




const refs = {
    render: document.querySelector('.render-input-js'),
    input: document.querySelector('.search-input-js'),
};

const onDebounceInput = debounce(onCountryInput, 1000);

refs.input.addEventListener('input', onDebounceInput);

function onCountryInput(e) {
    e.preventDefault();

    if(!e.target.value) {
        return;
    };

    const searchWord = e.target.value;
    fetchCountries(searchWord)
    .then(renderCorrectMarkup)
    .catch(error => console.log(error))
    .finally(() => refs.input.value = '');

}


function renderCountryInfo(countries) {
     countries.forEach(country => { 
        refs.render.innerHTML = countryTpl(country);
    });
}

function renderCountriesList(countries) {
    const countriesArray = countries.map(country => country.name);    
    refs.render.innerHTML = countriesListTpl(countriesArray);
};

function renderCorrectMarkup (countries) {
    if (countries.length === 1) {        
        renderCountryInfo(countries);
    } else 
    if (countries.length >= 2 && countries.length <= 10) {
        renderCountriesList(countries);
    };  
};