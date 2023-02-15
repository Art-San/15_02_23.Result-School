// ======   class  Получаем значение класса 

const tasksWrapper = document.querySelector('.tasks__wrapper');
console.log(tasksWrapper.className);

//------------ изменяем class
// tasksWrapper.className =  "tasks__wrapper_1"     
// console.log(tasksWrapper.className);


//-------------- ПОЛУЧАЕМ id

const tasksBlock = document.querySelector('#tasks');
console.log('tasksBlock.id', tasksBlock.id);

//----------------- изменяем Id
// tasksBlock.id = 'tasks';                       
// console.log('tasksBlock.id', tasksBlock.id);


// // ---------------получаем текст КНОПКИ  innerText

const submitButton = document.querySelector('.create-task-block__button');
console.log(submitButton.innerText);

// -------- получаем с помощью textContent аналог innerText
// console.log(submitButton.textContent);

//-------------------- МЕНЯЕМ ТЕКСТ КНОПКИ
submitButton.innerText = 'Создать новую задачу'



// //----------------- ПОЛУЧАЕМ HTML   innerHtml
// //   выполняет код (обрабытывает теги)

// console.log(tasksBlock.innerHTML);

// // tasksBlock.innerHTML = ''; // все в tasksBlock удалится

// // tasksBlock.innerHTML = '<b>удалено</b>';



// // children доступен только для чтения

const createTaskForm = document.querySelector('.create-task-block');
console.log(createTaskForm.children);




// // ПОЛУЧАЕМ дата-атрибуты

const firstNavButton = document.querySelector('.main-navigation__button-item');
console.log(firstNavButton.dataset.buttonId);


//  ИЗМЕНЯЕМ дата-атрибуты
// firstNavButton.dataset.buttonId = '10';



//  // ------------ style

console.log(firstNavButton.style);
firstNavButton.style.fontWeight = 'bold';
firstNavButton.style.boxShadow = 'inset 0 0 0 3px #fff';
