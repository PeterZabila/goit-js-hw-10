import './css/styles.css';
import { fetchCountries } from './fetchCountries';
import debounce from "lodash.debounce";

export { infoHandler };

const DEBOUNCE_DELAY = 300;


const refs = {
    input: document.querySelector('#search-box'),
    ul: document.querySelector('.country-list'),
    info: document.querySelector('.country-info'),
};

function inputHandler () {
    const inputValue = refs.input.value;
    fetchCountries(inputValue);
}

function infoHandler({name, capital, population, flags, languages}) {
    // refs.info.classList.remove('is-hidden');
    refs.info.insertAdjacentHTML('afterbegin', 
    `<p class="info">Capital: ${capital}</p
    <p class="info">Population: ${population}</p>
    <h3 class="country"><img src="${flags}" alt="flag" width="30px">${name}</h3>
    <p class="info">Languages: ${(Object.values(languages)).toString()}</p>`

    
    // `<h3 class="country"><img src="${flags.svg}" alt="flag" width="30px">${name.official}</h3>
    // <p class="info">Capital: ${capital}</p>
    // <p class="info">Population: ${population}</p>
    // <p class="info">Languages: ${Object.values(languages)}</p>`
    )
    console.log(typeof(Object.values(languages)));
}

refs.input.addEventListener('input', debounce(inputHandler, DEBOUNCE_DELAY));
