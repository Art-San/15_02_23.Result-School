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
    // Навесить обработчики на новую строку
    // parent.lastElementChild.querySelector(".checkbox-form__checkbox").onchange = checkbox_change;
    // parent.lastElementChild.querySelector(".task-item__delete-button").onclick = delete_click;
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
    // Навесить обработчики на новую строку
    // input.onchange = checkbox_change;
    // button.onclick = delete_click;
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
 
let newTaskBlock = document.querySelector(".create-task-block"),
    input = newTaskBlock.taskName; // Поле для названия новой задачи
 
input.value = ""; // Подготовка поля к валидации
newTaskBlock.noValidate = true;
input.required = true;
 
newTaskBlock.onsubmit = newTaskBlock_submit;
let idCounter = 3; // Максимальное значение id у существующего массива задач
 
function validateInput() {
    let text = input.value,
        task = tasks.find(e => e.text === text);
 
    input.setCustomValidity(task ? "Задача с таким названием уже существует." : "");
    return input.checkValidity();
}
function newTaskBlock_submit(event) {
    event.preventDefault();
    newTaskBlock.querySelector(".error-message-block")?.remove(); // Удалить ошибку, если раньше была
 
    if (!validateInput()) {
        let obj = input.validity,
            message = obj.valueMissing
                ? "Название задачи не должно быть пустым"
                : input.validationMessage;
        let span = document.createElement("span");
        span.className = "error-message-block";
        span.textContent = message;
        newTaskBlock.append(span);
        return;
    }
 
    ++idCounter;
    let task = {
        id: idCounter,
        text: input.value
    };
    tasks.push(task);
    input.value = ""; // Очистить поле ввода, чтобы было видно, что добавили
    renderTask(taskList, task);
}

// form ----- newTaskBlock