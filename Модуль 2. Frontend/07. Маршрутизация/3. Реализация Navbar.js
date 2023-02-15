// Теперь, при нажатии на ссылку в навигационной панели, мы меняем путь, 
// но не меняем содержимое страницы. Давай добавим пути страниц. Для этого перейдём в компонент App. 

// Для того чтобы работало изменение контента в зависимости от страницы, 
// в react-router-dom есть компонент Route. Импортируем его и воспользуемся им:

import React from "react";
import { Route } from "react-router-dom";
import Navbar from "./components/navbar";
import Home from "./components/home";

const App = () => {
    return (
        <div>
            <Navbar />
            <h1>App</h1>
            <Route path="/" component={Home} />
        </div>
    );
};

export default App;

// У компонента Route мы назначили 2 атрибута: 

// 1. path – путь страницы
// 2. component – компонент, который должен быть отображён на данной странице

// Теперь мы увидим, что на странице отобразился компонент Home:


import React from "react";
import { Route } from "react-router-dom";
import Navbar from "./components/navbar";
import Home from "./components/home";
import SignIn from "./components/signIn";
import Posts from "./components/posts";
import Contacts from "./components/contacts";

const App = () => {
    return (
        <div>
            <Navbar />
            <h1>App</h1>
            <Route path="/" component={Home} />
            <Route path="/signin" component={SignIn} />
            <Route path="/posts" component={Posts} />
            <Route path="/contacts" component={Contacts} />
        </div>
    );
};

export default App;

// Теперь, при переходе по страницам, у нас появляются нужные компоненты:

// Но сейчас на каждой странице есть “Главная”. Это происходит, 
// так как в каждом пути содержится символ “/”. По умолчанию Route сравнивает, 
// присутствуют ли в пути переданные символы и, если есть, то срабатывает. 
// Чтобы сравнение пути было “строгое”, у Route нужно добавить атрибут exact:

import React from "react";
import { Route } from "react-router-dom";
import Navbar from "./components/navbar";
import Home from "./components/home";
import SignIn from "./components/signIn";
import Posts from "./components/posts";
import Contacts from "./components/contacts";

const App = () => {
    return (
        <div>
            <Navbar />
            <h1>App</h1>
            <Route exact path="/" component={Home} />
            <Route path="/signin" component={SignIn} />
            <Route path="/posts" component={Posts} />
            <Route path="/contacts" component={Contacts} />
        </div>
    );
};

export default App;

// Чтобы лучше понять, как работает сравнение, можно представить себе 
// примерно функции сравнения строк: 


// Если нет exact
const matchPath = (url, path) => url.includes(path) 
// matchPath("/post", "/") -> true

// Если есть exact
const matchPathExact = (url, path) => url === path 
// matchPathExact("/post", "/") -> false

// Добавим остальные роуты:

// Из этого следует то, что в случае, если нет атрибута exact, 
// Route будет вызываться и на вложенные страницы. Например, 
// путь “/post/id” тоже будет срабатывать для роута:

{/* <Route path="/post" component={Posts} /> */}