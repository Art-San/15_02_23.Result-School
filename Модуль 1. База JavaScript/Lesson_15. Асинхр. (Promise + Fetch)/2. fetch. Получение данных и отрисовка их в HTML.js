// fetch

// https://jsonplaceholder.typicode.com/

// fetch(url)
// GET, POST. DELET

const TODOS_URL = 'https://jsonplaceholder.typicode.com/todos';

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

const createTodoElement = (text) => {
    const todoElement = document.createElement('li');  
    const todoElementAnchor = document.createElement('a');
    todoElementAnchor.href = '#';
    todoElementAnchor.textContent = text;
    todoElement.append(todoElementAnchor);
    
    return todoElement;
}

const toggleLoader = () => {
    const loaderHTML = document.querySelector('#loader');
    const isHidden = loaderHTML.hasAttribute('hidden');
    if (isHidden) {
        loaderHTML.removeAttribute('hidden');
    } else {
        loaderHTML.setAttribute('hidden', '');
    }
}


const dataContainer = document.querySelector('#data-container');

const getAllTodos = () => {
    toggleLoader();
    const result = fetch(TODOS_URL, {
        method: 'GET',
    });
    
    console.log('result', result);
    
    result
        .then((response) => {
            console.log('response', response);   
            if (!response.ok) {
                throw new Error('Ошибка запроса');
            }
            return response.json();               //   ДЕКОДИРОВАТЬ
    
        })
        .then((todos) => {
            console.log('todos', todos);
            todos.forEach((todo) => {
                const todoHTML = createTodoElement(todo.title);
                dataContainer.append(todoHTML);
            })
        })
        .catch((error) => {
            console.log('error', error);
        })
        .finally(() => {
            toggleLoader()
        })

};


getAllTodos()


// ================================================================

const POSTS_URL = 'https://jsonplaceholder.typicode.com/post'

const result = fetch(POSTS_URL)

console.log ('result', result)

result
  .then(res => {
    if(!res.ok) {
      throw new Error('some error.....')
    }
    return res.json()
  })
  .then(data => console.log('data',data))
  .catch((error) => console.log('error', error))