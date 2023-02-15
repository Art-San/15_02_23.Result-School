// Итоговый код приложения из конспекта (получится после прочтения):
// https://codesandbox.io/s/react-konspekty-7-marshrutizaciya-gs77h8

// Данный урок будет основан на 5-й версии React Router. Создадим новое приложение. 
// Откроем новую папку, откроем терминал и выполним команду:
npx create-react-app@5.0.0 react-router

// И откроем в редакторе созданную папку. Теперь в ней установим зависимость:
npm i react-router-dom@5.3.0

// Немного о react-router-dom. Это библиотека, предназначенная для маршрутизации страниц 
// в React (роутинг) в браузерном окружении. Также она может предоставить возможность сделать 
// таким образом, что смена адреса страницы и контента будет происходить без перезагрузки. 
// Таким образом, мы реализуем single-page application (SPA).

// Перейдём в папку проекта и удалим лишние файлы. Оставим только App.js и index.js:

// src/index.js
import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./app/app";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
    <BrowserRouter>
        <React.StrictMode>
            <App />       Так должно быть
        </React.StrictMode>
    </BrowserRouter>
);

// А в компоненте App просто вернём пустую страницу с заголовком:

// ./app/app.jsx
const App = () => {
    return (
        <div>
            <h1>App</h1>
        </div>
    );
};

export default App;

// Перейдём к использованию React Router. 
// Чтобы его использовать, нам нужно обернуть наше приложение в компонент BrowserRouter:

// import React from "react";
// import { createRoot } from "react-dom/client";
// import { BrowserRouter } from "react-router-dom";
// import App from "./app/app";

// const rootElement = document.getElementById("root");
// const root = createRoot(rootElement);

// root.render(
//     <BrowserRouter>
//         <React.StrictMode>
//             <App />
//         <React.StrictMode>
//     </BrowserRouter>
// );

{/* Теперь мы можем использовать роутер. 
Сделаем заготовки навигационной панели и страниц: */}

// app/components/navbar.jsx
import React from "react";

const Navbar = () => {
    return (
        <ul>
            <li>
                <a href="/">Главная</a>
            </li>
            <li>
                <a href="/singin">Вход в кабинет</a>
            </li>
            <li>
                <a href="/posts">Записи</a>
            </li>
            <li>
                <a href="/contacts">Контакты</a>
            </li>
        </ul>
    );
};

export default Navbar;

{/* Здесь у нас список страниц и их адреса. Выведем навигационную панель: */}

import Navbar from "./components/navbar";

const App = () => {
    return (
        <div>
            <Navbar />
            <h1>App</h1>
        </div>
    );
};

export default App;

{/* И создадим заготовки страниц - компоненты: Home, SingIn, Posts, Contacts. 
Каждый из них возвращает свой заголовок, например, Home: */}

import React from "react";

const Home = () => {
    return <h1>Главная</h1>;
};

export default Home;

// Теперь мы можем приступить к выводу наших страниц. 

