import fetchCountries from './js/fetchCountries.js';
import {otherRender, renderCountry} from './js/renderTemplate.js';
import refs from './js/refs.js'
import debounce from 'lodash.debounce';
import './styles.css';
import PNotify from 'pnotify/dist/es/PNotify.js';
import 'pnotify/dist/PNotifyBrightTheme.css';


refs.input.addEventListener('input', debounce(handleInput, 500));

function handleInput(e) {
  e.preventDefault();
  const inputValue = e.target.value;
  if (inputValue === '') {
    return refs.div.innerHTML = ''
  }
  fetchCountries(inputValue)
  .then(data => {
    if(data.status >=400) return;
    if(data.length>10) {
      const notice = PNotify.notice({
        title: 'Too many matches founds',
        text: 'Please enter a more specific query!',
        modules: {
          Buttons: {
            closer: false,
            sticker: false
          }
        }
      });
      notice.on('click', function() {
        notice.close();
      });
    } else if (data.length>1&&data.length<=10) {
      PNotify.closeAll();
      otherRender(data)
    } else {
      PNotify.closeAll();
      renderCountry(data)}
  }).catch(error => console.error('ERROR', error));
}