// Promise.all()

// Метод Promise.all(iterable) возвращает промис, 
// который выполнится тогда, когда будут выполнены все промисы, 
// переданные в виде перечисляемого аргумента, 
// или отклонено любое из переданных промисов.

// Promise.all([
//     new Promise(),
//     new Promise(),
//     new Promise(),
//     new Promise(),
// ]);

const TODOS_URL = 'https://jsonplaceholder.typicode.com/todos';
const todosIds = [43, 10, 5, 100, 101];
const dataConteiner = document.querySelector('#data-container');

const createTodoElement = (text) => {
    const todoElement = document.createElement('li');  // вроде как создали тег ЛИ
    const todoElementAnchor = document.createElement('a');
    todoElementAnchor.href = '#';
    todoElementAnchor.textContent = text;
    todoElement.append(todoElementAnchor);
    
    return todoElement;
}

const getTodosByIds = (ids) => {
    const requests = ids.map((id) => fetch(`${TODOS_URL}/${id}`));
    Promise.all(requests)
        .then((responses) => {
            console.log('requests', requests)
            const dataResults = responses.map((response) => response.json());
            return Promise.all(dataResults);
        })
        .then((todos) => {
            console.log('todos', todos);
            todos.forEach((todo) => {
                const todoHTML = createTodoElement(todo.title);
                dataConteiner.append(todoHTML)
            })
        })
        .catch((error) => {
            console.log(error)
        })
};

getTodosByIds(todosIds)