import './css/styles.css';
import fetchCountries from './fetchCountries';
import debounce from 'lodash.debounce'

const DEBOUNCE_DELAY = 300;


const refs = {
    input: document.querySelector('#search-box'),
    ul: document.querySelector('.country-list'),
    info: document.querySelector('.country-info'),
};

let name = refs.input.value;

refs.input.addEventListener('input', debounce(fetchCountries, DEBOUNCE_DELAY));
