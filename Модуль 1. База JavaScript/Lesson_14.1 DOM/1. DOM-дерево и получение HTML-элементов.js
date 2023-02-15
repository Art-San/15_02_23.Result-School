// --------------- устаревшие

// // // через айди ID
// const tasksBlok = document.getElementById('tasks');
// console.log('tasksBlok', tasksBlok);

// // // получуние по классу
// const allNavButtons = document.getElementsByClassName('main-navigation__button-item');
// console.log('allNavButtons', allNavButtons);

// // // по тегу
// const allButton = document.getElementsByTagName('button');
// console.log('button', allButton)


// --------------- querySelector  рекомендуется

// // id (#)
// const tasksBlok2 = document.querySelector('#tasks'); //  Решетка (#) перред именем ID
// console.log('tasksBlok2', tasksBlok2);

// // Class (.)
// const mainNavigation = document.querySelector(".main-navigation");  // Точка (.) перед именем CLASS 
// console.log('mainNavigation', mainNavigation);

// // Teg ()
// const firstButton = document.querySelector('button'); // перед именем TEGA ни чего не ставим
// console.log('firstButton', firstButton);

// // Атрибут [data-button-id="3"]
// const trirdNavigationButton = document.querySelector('[data-button-id="3"]'); // для отрибута [] и двойные ковычки
// console.log('trirdNavigationButton', trirdNavigationButton)

// // ---------------- querySelectorAll

// const allNnavigationButton = document.querySelectorAll(".main-navigation__button-item");
// console.log('allNnavigationButton', allNnavigationButton)


// // ----------------  forEach
// allNnavigationButton.forEach((button, index) => {
//     console.log('allNnavigationButton2', index, button);
// });

const createtaskBlock = document.querySelector(".create-task-block");
const submitButton = createtaskBlock.querySelector('[type="submit"]');
console.log('submitButton', submitButton)

// нужно запомнить что использовать надо querySelector и querySelectorAll.

