import { validateForms } from '../functions/validate-forms.js';
import Inputmask from "../../../node_modules/inputmask/dist/inputmask.es6.js";



const inputMask = new Inputmask('+7 (999) 999-99-99');
const phoneInputs = document.querySelectorAll('input[type="tel"]');

phoneInputs.forEach(input => inputMask.mask(input));







document.addEventListener('wpcf7mailsent', function (event) {
  window.location.href = 'https://bunker-septik.ru/spasibo/';
}, false);












