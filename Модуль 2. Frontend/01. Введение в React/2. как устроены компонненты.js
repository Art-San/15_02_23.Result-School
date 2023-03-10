// https://vladilen.ru/pl/teach/control/lesson/view?id=245429199



// React компонент можно создать как обычную JavaScript функцию:

const Post = () => {
    return <div>Post</div>;
  };


//   Но также это можно сделать при помощи ES6 Классов. В данном курсе мы будем использовать
//    функциональные компоненты (компоненты, созданные через функции), так как это более новый
//     и наиболее удобный способ.

// Компонент может принимать в себя данные - props и выводить их (мы плотно поработаем
//      с ними в дальнейших уроках):

const Post1 = (props) => {
    return <div>Post: {props.title}</div>;
  };



// Такой синтаксис в JavaScript, похожий на HTML, называется JSX. Если вставить этот код в обычный 
// JavaScript файл, то он не заработает, таких конструкций нет в языке. 
// Чтобы он начал работать, нужна специальная Webpack сборка с Babel. 
// Это все может предоставить Create React App (о нем поговорим далее). 
// Под капотом этот код конвертируется в обычный JavaScript благодаря инструменту Babel, 
// протестировать конвертацию онлайн можно здесь: ссылка.


// Вот так выглядит компонент Post после конвертации в обычный JavaScript:

const Post2 = props => {
  return React.createElement("div", null, "Post: ", props.title);
};
// Согласитесь, запись через JSX выглядит намного лаконичнее.

// Как мы видим, компонент на самом деле возвращает React-элемент (React.createElement), 
// который описывает, что мы хотим увидеть на экране. С ними уже взаимодействует React.

// Эти React-элементы можно также записывать и в обычную переменную:

const title = 'Junior Frontend Developer';
const course = <h1>Course: {title}!</h1>;

// А если без JSX:

const title1 = 'Junior Frontend Developer';
const course2 = React.createElement("h1", null, "Course: ", title, "!");