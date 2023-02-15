// делигирования событий

// const allNavigationButtons = document.querySelectorAll('.main-navigation__button-item');

// allNavigationButtons.forEach((button) => {
//     button.addEventListener('click', (event) => {
//         const targetButton = event.target;
//         allNavigationButtons.forEach((navButtom) => {
//             navButtom.classList.remove('main-navigation__button-item_selected');
//         });
//         targetButton.classList.add('main-navigation__button-item_selected');
//     });
// });


// ЭТО КОД ИЗ УРОКА 5. ОБРАБОТЧИК СОБЫТИЙ CLICK
// РАБОТАЮТ ЩДИНАКОВО НО ЕСТЬ ОТЛИЧИЯ
// const allNavButtons = document.querySelectorAll('.main-navigation__button-item');
// allNavButtons.forEach((button) => {
//     button.addEventListener('click', (event) => {
//         allNavButtons.forEach((button) => {
//             button.classList.remove('main-navigation__button-item_selected');
//         });
//         const { target } = event;
//         target.classList.add('main-navigation__button-item_selected');
//     });
// });


const allNavigationButtons = document.querySelectorAll('.main-navigation__button-item');
const mainNavigation = document.querySelector('.main-navigation');

mainNavigation.addEventListener('click', (event) => {
    // console.log('target', event.target);
    const isNavButton = event.target.closest('.main-navigation__button-item');
    // console.log(isNavButton);
    console.log('КЛИК НА КОНТЕЙНЕР');

    if (isNavButton) {
        // do something
        allNavigationButtons.forEach((navButtom) => {
            navButtom.classList.remove('main-navigation__button-item_selected');
        });
        event.target.classList.add('main-navigation__button-item_selected');
    }
});

const firstNavButton = document.querySelector('.main-navigation__button-item');
firstNavButton.addEventListener('click', (event) => {
    console.log('ПЕРВАЯ КНОПКА', event.target);
});

document.body.addEventListener('click', (event) => {
    console.log('КЛИК НА БОДИ', event.target)
});



html
document.querySelector(‘#main-description’);
document.querySelector('.user-name-title');
document.querySelector(‘[name=”age”]’);
// document.querySelectorAll(‘.div’);
element.dataset.mainId = ‘1’
textContent
// add, prepend, insertAdjacentElement
remove
addEventListener
