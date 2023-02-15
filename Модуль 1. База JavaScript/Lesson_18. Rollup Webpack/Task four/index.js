import './index.css';
import JS_IMAGE from './assets/js-img.png';

const mainTitle = document.createElement("h1");
mainTitle.textContent = "I love JavaScript привет";



const jsImageHTML = document.createElement('img');
jsImageHTML.classList = 'js-image';
jsImageHTML.src = JS_IMAGE;

document.body.append(mainTitle, jsImageHTML);