// contextmenu

// preventDefault заблокировал правую кнопку


document.addEventListener('contextmenu', (event) => {
    console.log(event)
    event.preventDefault();
});


// change, input

const checkTaskNameInputOnValidation = (value) => {
    if (!value || value.includes('@')) {
        return false;
    }
    return true;
}


const createTaskBlock = document.querySelector('.create-task-block');
const taskNameInput = createTaskBlock.querySelector('.create-task-block__input');

taskNameInput.addEventListener('change', (event) => {
    const { target } = event;
    const { value } = target;
    const isValid = checkTaskNameInputOnValidation(value);
    const messageBlockFromDOM = document.querySelector('.error-message-block');

    if (!isValid) {
        const newMessageBlock = document.createElement('span');
        newMessageBlock.className = 'error-message-block';
        newMessageBlock.textContent = 'Ошибка! Текст для задачи не должен быть пустым и не должен содержать символ собаки "@"';
        createTaskBlock.append(newMessageBlock);
    } else if (isValid && messageBlockFromDOM) {
        messageBlockFromDOM.remove();
    }
});