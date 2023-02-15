const tasks = [
    {
        id: 1,
        completed: false,
        text: 'Посмотреть новый урок по JavaScript',
    },
    {
        id: 2,
        completed: false,
        text: 'Выполнить тест после урока',
    },
    {
        id: 3,
        completed: false,
        text: 'Выполнить ДЗ после урока',
    },
];
function renderTask2(parent, task) {
    let str = `<div class="task-item" data-task-id="${task.id}">
<div class="task-item__main-container">
  <div class="task-item__main-content">
    <form class="checkbox-form">
      <input class="checkbox-form__checkbox" type="checkbox" id="task-${task.id}">
      <label for="task-${task.id}"></label>
    </form>
    <span class="task-item__text">${task.text}</span>
  </div>
  <button class="task-item__delete-button default-button delete-button" data-delete-task-id="${task.id}">
    Удалить
  </button>
</div>
</div>`;
    parent.insertAdjacentHTML("beforeend", str);
}
 
function renderTask(parent, task) {
    let divTaskItem = document.createElement("div"),
        divTaskItemMainContainer = document.createElement("div"),
        divTaskItemMainContent = document.createElement("div"),
        formCheckbox = document.createElement("form"),
        checkboxFormCheckbox = document.createElement("input"),
        checkboxFormLabel = document.createElement("label"),
        spanTaskItemText = document.createElement("span"),
        deleteButtonDefault = document.createElement("button");
    divTaskItem.className = "task-item";
    divTaskItem.dataset.taskId = task.id;
    divTaskItemMainContainer.className = "task-item__main-container";
    divTaskItemMainContent.className = "task-item__main-content";
    formCheckbox.className = "checkbox-form";
    checkboxFormCheckbox.className = "checkbox-form__checkbox";
    checkboxFormCheckbox.type = "checkbox";
    checkboxFormCheckbox.id = "task-" + task.id;
    checkboxFormLabel.htmlFor = "task-" + task.id;
    spanTaskItemText.className = "task-item__text";
    spanTaskItemText.innerText = task.text;
    deleteButtonDefault.className = "task-item__delete-button default-button delete-button";
    deleteButtonDefault.dataset.deleteTaskId = task.id; // Исправлено
    deleteButtonDefault.textContent = " Удалить ";
    formCheckbox.append(checkboxFormCheckbox, " ", checkboxFormLabel);
    divTaskItemMainContent.append(formCheckbox, " ", spanTaskItemText);
    divTaskItemMainContainer.append(divTaskItemMainContent, " ", deleteButtonDefault)
    divTaskItem.append(divTaskItemMainContainer);
 
    parent.append(divTaskItem);
}


//  div1 ----- divTaskItem

// div2 ---- divTaskItemMainContainer

// div3 ---- divTaskItemMainContent

// form ------ formCheckbox

// input ----------- checkboxFormCheckbox

// label ---------  checkboxFormLabel

// span  ----------- spanTaskItemText

// button ------- deleteButtonDefault 
 
let taskList = document.querySelector(".tasks-list");
for (let task of tasks)
    renderTask(taskList, task);
 
let newTaskBlock = document.querySelector(".create-task-block");
newTaskBlock.onsubmit = newTaskBlock_submit;
let idCounter = 3; // Максимальное значение id у существующего массива задач
 
function newTaskBlock_submit(event) {
    event.preventDefault();
    let newTaskBlockInput = this.querySelector(".create-task-block__input");
    ++idCounter;
    let task = {
        id: idCounter,
        text: newTaskBlockInput.value
    };
    tasks.push(task);
    newTaskBlockInput.value = ""; // Очистить поле ввода, чтобы было видно, что добавили
    renderTask(taskList, task);
}

// form ----- newTaskBlock
// input  -----  newTaskBlockInput