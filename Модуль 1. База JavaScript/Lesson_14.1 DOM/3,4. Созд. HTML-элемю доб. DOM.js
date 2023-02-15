// createElement

/*
*************************************************************************************
*    createElement--------- В HTML-документах создаёт элемент c тем тегом, 

*    что указан в аргументе или HTMLUnknownElement, если имя тега не распознаётся.
*
*    var element = document.createElement(tagName, [options]);
*
*    element — созданный объект элемента.
*
*    tagName — строка, указывающая элемент какого типа должен быть создан.
*    nodeName создаётся и инициализируется со значением tagName.
*
*    options — необязательный параметр
*
*************************************************************************************
*/



const newNawBatton = document.createElement('a');
newNawBatton.className = 'main-navigation__button-item';
newNawBatton.href = '#tasks_expired';
newNawBatton.dataset.buttonId = '4';
newNawBatton.textContent = 'Просроченые Задачи';

console.log('newNawBatton', newNawBatton);
 
/*
*************************************************************************************
*
*    // append- добавляет в конец prepend - добавит в начало
*
*************************************************************************************
*/

const mainNavigation = document.querySelector('.main-navigation')
mainNavigation.append(newNawBatton);


//  insertAdjacentElement---
// 'beforebegin': перед самим элементом targetElement.
// 'afterbegin': внутри элемента targetElement, перед его первым потомком.
// 'beforeend': внутри элемента targetElement, после его последнего потомка.
// 'afterend': после самого элемента targetElement.

// mainNavigation.insertAdjacentElement('afterbegin', newNawBatton);


// Удаление - remove

// mainNavigation.remove();

// closest

// const taskItemText = document.querySelector('.task-item__text');
// console.log('taskItemText', taskItemText);

// const taskItem = taskItemText.closest('.task-item')

// console.log('taskItem', taskItem);

// classList; add - добавляет новый класс к существующему


// const firsNavigationButton = document.querySelector('.main-navigation__button-item');
// firsNavigationButton.classList.add('main-navigation__button-item_selected');
 
// remove - удаление

// firsNavigationButton.classList.remove('main-navigation__button-item_selected');

// toggle --- смотрит если переданный класс сущ. тогда он его удаляет, 
// если не сущ тогда добавляет.

// firsNavigationButton.classList.toggle('main-navigation__button-item_selected');

// firsNavigationButton.classList.toggle('main-navigation__button-item_selected');

// Атрибуты


// hasAttribute --- проверяет есть ли атрибут

// const createTaskInput = document.querySelector('.create-task-block__input');
// console.log(createTaskInput.hasAttribute('type'));


// getAttribute --- выдает значения атрибута

// console.log(createTaskInput.getAttribute('value'));


// removeAttribute ---- удаление атрибута

// createTaskInput.removeAttribute('placeholder');

// setAttribute --- добавляет атрибуты

// createTaskInput.setAttribute('placeholder', 'Создам задачу');