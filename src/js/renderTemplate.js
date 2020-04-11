import countryTemplate from '../templates/countryTemplate.hbs'
import secondTempl from '../templates/secondTempl.hbs'
import refs from './refs'

export function renderCountry (countries) {
    const markup = countries.map(country => countryTemplate(country)).join('');
    refs.div.insertAdjacentHTML('beforeend', markup);

    showCountry(markup)
  }

  export function otherRender (countries) {
    const markup = countries.map(country => secondTempl(country)).join('');
    refs.div.insertAdjacentHTML('beforeend', markup);
    showCountry(markup)
  }


  function showCountry (template) {
    refs.div.innerHTML = template;
  }