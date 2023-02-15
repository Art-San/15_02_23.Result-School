import '../index.css';
import JS_IMAGE from '../assets/js-img.png';

console.log('привет мир vbh про ');
const jsImageHTML = document.createElement('img');
jsImageHTML.classList = 'js-image';
jsImageHTML.src = JS_IMAGE;

document.body.append(jsImageHTML);