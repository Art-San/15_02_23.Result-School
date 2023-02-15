// Сам React разработан таким образом, что он не зависит от браузера. За рендеринг, 
// отрисовку React-элементов в браузере отвечает другая библиотека – React DOM.
https://www.npmjs.com/package/react-dom

// Благодаря этому, на React мы можем разрабатывать не только браузерные интерфейсы, но и, 
// к примеру, интерфейсы для мобильных приложений. 
// Там уже вместо React DOM будет использоваться React Native.
https://www.npmjs.com/package/react-native

// Таким образом React отвечает за работу с компонентами, React-элементами и тд, 
// а за визуализацию в различных окружениях отвечают другие библиотеки (такие как React DOM).

// Вот так происходит монтирование компонента в DOM-дерево:

import React from "react";
import ReactDOM from "react-dom/client";

const Post = (props) => {
  return <div>Post: {props.title}</div>;
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Post title={'Hello World'} />);

// В элемент по селектору #root произойдет вставка <div>Post: Hello World</div>