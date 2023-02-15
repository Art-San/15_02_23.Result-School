// const allElements = document.querySelector('*');

// allElements.forEach((elem) => {
//     elem.addEventListener('click', () => {
//         // alert(`Всплытие: ${elem.tagName}`);
//     })
// });

const allElements = document.querySelectorAll('*');

// allElements.forEach((elem) => {
//     elem.addEventListener('click', () => {         //  ВСПЛЫТИЕ
//         alert(`Всплытие: ${elem.tagName}`);
//     });
    
    // elem.addEventListener('click', () => {      // ПОГРУЖЕНИЕ
    //     alert(`погружение: ${elem.tagName}`);
    // }, true);

  
  
    allElements.forEach((elem) => {  
        elem.addEventListener('click', (event) => {
            if (event.currentTarget.tagName === 'FORM') {
                event.stopPropagation();                  //  ОСТАНОВКА ВСПЛЫТИЯ
            }
            
            alert(`Всплытие: ${elem.tagName}`);
        });
});

