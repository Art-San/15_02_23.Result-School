// import './index.css';
// // // import JS_IMG from '../assets/js-img.png';  // не работает

// console.log('Привет мир');


// const jsImageHTML = document.createElement('img');
// jsImageHTML.className = 'js-image';
// jsImageHTML.src = '../assets/js-img.png';
// // jsImageHTML.src = JS_IMG;                      // НЕ РАБОТАЕТ
// document.body.prepend(jsImageHTML);

// const headerHTML = document.createElement('h1');
// headerHTML.textContent = 'I love JavaScript  ghh ';
// document.body.prepend(headerHTML);



// ***************************************************
// *
// *  ПРАВИЛЬНЫЙ ОТВЕТ ИЗ УРОКА
// *
// ***************************************************

import "./index.css";
// import JSImage from "../assets/js-img.png";

const mainTitle = document.createElement("h1");
mainTitle.textContent = "I love JavaScript привет";
const JSImageHTML = document.createElement("img");
// JSImageHTML.src = JSImage;
JSImageHTML.src = "../assets/js-img.png";

document.body.append(mainTitle, JSImageHTML);