// Часто бывает так, что пользователи пытаются зайти на те страницы, 
// которых не существует на сайте. Это может случиться, если страница переехала 
// с одного адреса на другой. Например, раньше путь на вход в личный кабинет 
// был по адресу “lk”, сейчас он переехал, и нужно перенаправить пользователей. 

// Для решения задачи по переадресации пользователя в React Router есть компонент Redirect, 
// в который передаются параметры from и to. Посмотрим на примере:

// ...

const App = () => {
    return (
        <div>
            <Navbar />
            <h1>App</h1>
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/signin" component={SignIn} />
                <Route path="/posts/:postId?" component={Posts} />
                <Route path="/contacts" component={Contacts} />
                <Redirect from="/lk" to="/signin" />
            </Switch>
        </div>
    );
};

export default App;

// Во from мы указали, откуда нужно сделать перенаправление, 
// в to - куда. Теперь, если пользователь зайдёт по адресу /lk, 
// то его перенаправит на /signin.

// Ещё одним вариантом может быть случай, когда запрашиваемой страницы не существует. 
// В таких случаях нам нужно их перенаправить на страницу 404 (not found). 
// Сейчас, если пользователь зайдёт на страницу, которой нет у нас в роутах, 
// то он просто увидит App. Давай это исправим. 

// Для того чтобы это работало корректно, в Switch нужно передать Route, 
// который у нас будет срабатывать, если не было совпадения ни с одним из других роутов. 
// Для этого перед закрытием Switch добавим роут без path и передадим компонент, 
// который будет служить страницей 404:

import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import NotFound from "./components/notFound";
// ...

const App = () => {
    return (
        <div>
            <Navbar />
            <h1>App</h1>
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/signin" component={SignIn} />
                <Route path="/posts/:postId?" component={Posts} />
                <Route path="/contacts" component={Contacts} />
                <Redirect from="/lk" to="/signin" />
                <Route component={NotFound} />
            </Switch>
        </div>
    );
};

export default App;

// И создадим компонент NotFound:

// components/notFound.jsx
import React from "react";

const NotFound = () => {
  return <h1>Page not found</h1>;
};

export default NotFound;