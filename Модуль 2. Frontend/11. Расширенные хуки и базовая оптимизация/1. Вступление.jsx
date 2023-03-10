// Начальный проект: https://drive.google.com/drive/folders/1--rvqO5YhpGcxf9lHEmI020rbhB-9QvK
// Убедитесь, что у вас установлена последняя версия npm.

// В этом уроке мы изучим различные более продвинутые хуки 
// и базовую оптимизацию. Но говорить о хуках сложно, 
// не понимая принципов работы с данными в React. 
// Поэтому для начала мы вспомним, как нужно работать с данными.

// Когда мы изучали композицию компонентов, 
// для передачи данных мы стали использовать 
// props – объект с входными параметрами 
// и state – внутренние данные компонента. 
// Данные обрабатывались, создавался JSX, 
// который возвращался для отрисовки:

// В тот момент, когда менялись props или state, 
// происходил повторный рендер (ререндер). 
// Для этого мы использовали некоторый обновляющий handler:

// Теперь мы видим, что для вызова повторного 
// рендера нужно обновить props или state компонента. 
// Чем чаще мы вызываем рендер, тем больше создаётся 
// нагрузка на устройство пользователя, 
// и тем самым падает производительность

// Одним из способов оптимизировать React-приложения 
// является предотвращение ненужного изменения props и/или state. 
// Как это сделать, мы рассмотрим позже. 


// Обновление данных в React зависит от типа данных. 
// У примитивных типов данных нет никаких особенностей по обновлению:

const Parent = () => {
    const [count, setCount] = useState(0);

    return (
        <div>
            <button onClick={() => setCount((prevCount) => prevCount + 1)}>
                +
            </button>
            <Child count={count} />
        </div>
    );
};

const Child = ({ count }) => {
    return <div>Count: {count}</div>;
};


// Но особенность есть у ссылочных типов данных: объекты, массивы, функции. 
// Чтобы вызвать повторный рендер у компонента, 
// в случае с ссылочными типами данных, 
// нужно передать обновленные данные с измененной на них ссылкой:

const Parent = () => {
    const [values, setValues] = useState({ email: "" });

    const handleChange = (event) => {
        const { value, name } = event.targer;
        
        // Передаем новый объект
        setValues({
            ...values,
            [name]: value
        });
    };

    return (
        <div>
            <input value={values.email} onChange={handleChange} />
            <Child values={values} />
        </div>
    );
};

const Child = ({ values }) => {
    return <div>Почта: {values.email}</div>;
};

// Также на этом примере стоит отметить, 
// что когда родительский компонент заново рендерился, 
// он вызывал рендер своих потомков. 
// Это тоже важный момент – ререндер родителя вызывает ререндер потомка:


// Новую ссылку на объект можно сделать одним из вариантов:


const obj1 = { name: "John" }; // объект
const obj2 = Object.assign({}, obj1); // новый объект
const obj3 = { ...obj1 }; // новый объект

console.log(obj1 === obj2); // false
console.log(obj1 === obj3); // false
console.log(obj2 === obj3); // false

Для массивов:

const arr1 = []; // массив
const arr2 = [...arr1]; // новый массив
const arr3 = arr1.slice(); // новый массив

console.log(arr1 === arr2); // false
console.log(arr1 === arr3); // false
console.log(arr2 === arr3); // false


// Также затронем сериализацию. 
// Если объект или массив не содержит функций, 
// то можно сказать, что он может быть сериализован.

// Сериализация — это преобразование объекта или дерева 
// объектов в какой-либо формат таким образом, 
// чтобы потом его можно было восстановить из этого формата.


// Т. е. например сериализованные данные будут 
// пригодны для хранения и передачи по сети. 
// Прежде чем хранить или передавать структуру данных, 
// её сериализуют. Чаще всего в JS под этим 
// будет подразумеваться преобразование объекта в строку JSON:


const user = { name: "John", age: "24" };
const serializedUser = JSON.stringify(user);
console.log(serializedUser); // Строка -> '{"name":"John","age":"24"}'

// Восстанавливаем из строки
console.log(JSON.parse(serializedUser)); // { name: "John", age: "24" }


// Функции (или экземпляры классов) – несериализуемы. 
// Их нельзя превратить в структуру для передачи по сети. 

// Мы можем сделать выводы: 

// 1. Чтобы вызвать повторный рендер, нужно обновить props и/или state

// 2. Ссылочные типы данных будут считаться новыми, 
// если у них изменится ссылка

// 3. Ссылочные типы данных в контексте оптимизации 
// React-приложения можно разделить 
// на 2 вида: сериализуемые и несериализуемые

// 4 Ререндер родителя вызывает ререндер потомка


// Как оптимизировать наш React-приложение 
// (в том числе с помощью хуков), мы рассмотрим в следующих частях. 