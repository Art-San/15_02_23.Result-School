const myNumber = 42;

// getItem - получить
// getItem - добавить
// removeItem - удаляет определенный ключ.
// clear - удаляет все 

// localStorage работает только со строками и не с какими больше типоми данных

// localStorage.removeItem('number');   
// console.log('number', localStorage.getItem('number')); 
// localStorage.setItem('number', myNumber);
// console.log('number 1', typeof localStorage.getItem('number'));
// localStorage.clear();


// ЕСТЬ НЬЮАНСЫ ПРИ РАБОТЕ С локалсторедж

const object = {
    name: 'Max',
    age: 20
}

// с помощью JSON.stringify() записываем объект в локал сторедж ввиде строки
// localStorage.setItem('person', JSON.stringify(object));


// А теперь мы хотим получит эту строчку из локал сторидж

const raw = localStorage.getItem('person');

raw.name = 'Vlag';
// console.log(raw) // похоже на объект {"name":"Max","age":20} но это строка
// ЧТО ЛИБО поменять не получется так как это строка 

// Чтоб получить объект вместо строки используем JSON.parse

// console.log(JSON.parse(raw))
const person = JSON.parse(raw);
person.name = 'Vlad';
// console.log('person', person);

window.addEventListener('storage', event => {
    console.log(event)
});

// window.onstorage = () => {} // ===== Аналог написанного выше

чем отличается локал-сторидж от куки
1. Он больше по объему чем куки (обычно где-то 5 мегабайт)
2. Куки улетают вместе с запросами на сервер (это может прочитать и спарсить сервер)
Локал сторидж не куда не улетает это наше локал хранилище