
// Колбэк-функция (или обратный вызов) - это функция, 
// переданная в другую функцию в качестве аргумента, 
// которая затем вызывается по завершению какого-либо действия.


const FIRST_TODO_URL = 'https://jsonplaceholder.typicode.com/todos/1';

const getTodo = (callback) => {
    fetch(FIRST_TODO_URL)
        .then((response) => response.json())
        .then((todo) => {
            callback(todo);
        })
        .catch((error) => {
            console.log('error', error);
        })
};

getTodo((todoItem) => {
    console.log('todoItem', todoItem)
});