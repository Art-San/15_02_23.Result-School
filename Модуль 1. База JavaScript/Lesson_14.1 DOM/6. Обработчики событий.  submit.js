

const createTaskForm = document.querySelector('.create-task-block');
createTaskForm.addEventListener('submit', (event) => {
    console.log(event);
    event.preventDefault();
    const { target } = event;
    const taskNameInput = target.taskName;
    const inputValue = taskNameInput.value;
    console.log('inputValue', inputValue);
    if (inputValue) {
        alert(`вы создали задачу ${inputValue}`)

    } else {
        alert('введите правельные данные');
    }
    
});