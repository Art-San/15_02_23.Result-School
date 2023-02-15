
//--- addEventListener 


// на первую кнопку работает код (вдавливается)

// const firstNavButton = document.querySelector('.main-navigation__button-item');
// firstNavButton.addEventListener('click', (event) => {
//     console.log(event.target);
//     // const target = event.target;  // устаревшая
//     const { target } = event;    // современая запись
//     target.classList.add('main-navigation__button-item_selected');

// });

// const allNavButtons = document.querySelector


const allNavButtons = document.querySelectorAll('.main-navigation__button-item');
allNavButtons.forEach((button) => {
    button.addEventListener('click', (event) => {
        allNavButtons.forEach((button) => {
            button.classList.remove('main-navigation__button-item_selected');
        });
        const { target } = event;
        target.classList.add('main-navigation__button-item_selected');
    });
});
