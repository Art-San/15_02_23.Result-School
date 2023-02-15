// Вторым способом избавиться от нестрогого сравнения 
// путей является использование компонента Switch:

mport React from "react";
import { Route, Switch } from "react-router-dom";
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
            <Switch>
                <Route path="/" component={Home} />
                <Route path="/signin" component={SignIn} />
                <Route path="/posts" component={Posts} />
                <Route path="/contacts" component={Contacts} />
            </Switch>
        </div>
    );
};

export default App;

// Нужно обернуть Route в Switch. 
// Однако сейчас на любой странице мы увидим только “Главная”. Почему так происходит?

// Это происходит из-за принципа работы Switch. 
// Он нужен для того, чтобы возвращать один Route, 
// и при поиске совпадений адресов выберет первый подходящий и вернёт только его. 
// Сравнение происходит последовательно. Есть два пути решения:

// Вариант 1. Перенести Route для Home вниз:

<Switch>
    <Route path="/signin" component={SignIn} />
    <Route path="/posts" component={Posts} />
    <Route path="/contacts" component={Contacts} />
    <Route path="/" component={Home} />
</Switch>

// Вариант 2. Вернуть exact к Route с компонентом Home:

<Switch>
    <Route path="/" exact component={Home} />
    <Route path="/signin" component={SignIn} />
    <Route path="/posts" component={Posts} />
    <Route path="/contacts" component={Contacts} />
</Switch>

// Давай задержимся на втором варианте и рассмотрим поведение Switch. 
// Такое поведение заставляет нас продумывать последовательность роутов от частных к общим.
// Рассмотрим на примере. 

// Допустим, что мы хотим выводить конкретные записи. Добавим роут “/posts/some-post”. 

// Если мы будем вызывать роут для SomePost ниже, чем Posts, 
// то мы никогда его не увидим (ниже не рабочий вариант):

<Switch>
    <Route path="/" exact component={Home} />
    <Route path="/signin" component={SignIn} />
    <Route path="/posts" component={Posts} />
    <Route path="/posts/some-post" component={SomePost} />
    <Route path="/contacts" component={Contacts} />
</Switch>

// Следовательно, дочерние страницы нужно определять выше родительских (ниже рабочий вариант):

<Switch>
    <Route path="/" exact component={Home} />
    <Route path="/signin" component={SignIn} />
    <Route path="/posts/some-post" component={SomePost} />
    <Route path="/posts" component={Posts} />
    <Route path="/contacts" component={Contacts} />
</Switch>

При работе с Switch нужно всегда помнить о таком поведении. 