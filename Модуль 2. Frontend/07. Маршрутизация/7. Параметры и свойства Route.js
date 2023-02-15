// Когда мы используем в Route компонент, то он не только его вызывает, 
// но и добавляет свои props. Давай посмотрим в DevTools на примере компонента Home:

Мы видим 3 props: 

// 1. Объект history предоставляет полезные свойства и методы для перемещения 
// (переходы на страницах, перемещения пользователя)

// 2. Объект location с информацией о том, где мы сейчас находимся

// 3. Объект match с информацией о том, как path у Route соответствует текущему URL

// В данный момент у нас для Главной совпадение с “/” и свойство isExact === true.
// Если мы перейдём по ссылке “/contacts”, то у Route для “/contacts” совпадение будет полным 
// и isExact будет равно true. А если, например, на “/contacts/123”, 
// то уже isExact будет равно false.

// Теперь представим, что мы хотим не только вызвать компонент в роуте,
//  но и передать ему некоторые свои props. Для этого можно воспользоваться атрибутом render 
//  у компонента Route. Посмотрим несколько вариантов записи на примере Home:

// Через атрибут render. Не передаются history, location, match
// {/* <Route path="/" render={() => <Home withSidebar/>} />

// Через атрибут render. Передаются history, location, match
<Route 
    path="/"
    render={(routeProps) => <Home {...routeProps} withSidebar/>} 
/>

// Передать как потомка. Не передаются history, location, match
<Route path="/">
    <Home withSidebar/>
</Route>

// Передать потомка как render-функцию. Передаются history, location, match
<Route path="/">
    { (routeProps) => <Home {...routeProps} withSidebar/> }
</Route> */


// Во всех вариантах записи у Home добавляется собственный атрибут withSidebar. 
// Попробуй каждый вариант и посмотри с помощью DevTools, какие props получает компонент. 

// URL-параметры
// Допустим, мы хотим на странице “/posts” выводить все статьи, 
// а, например на “/posts/123” хотим выводить какую-то конкретную запись. 

// Для этого мы должны указать URL-параметры. Добавим новый роут и у него укажем:

{/* <Switch>
    <Route path="/" exact component={Home} />
    <Route path="/signin" component={SignIn} />
    <Route path="/posts/:postId" component={Posts} />
    <Route path="/posts" component={Posts} />
    <Route path="/contacts" component={Contacts} />
</Switch> */}

// URL-параметры указываются в виде “:{param}” (двоеточие, название переменной). 

// Теперь, перейдя по адресу “/posts/231”, мы увидим, что в props в matсh по ключу params попало postId:

// Сделаем новые компоненты PostList и Post (пока пустые) и добавим их в роуты. 
// Также добавим несколько примеров постов и передадим их в PostsList и Post:

import React from "react";
import { Route, Switch } from "react-router-dom";
import Navbar from "./components/navbar";
import Home from "./components/home";
import SignIn from "./components/signIn";
import PostsList from "./components/postList";
import Post from "./components/post";
import Contacts from "./components/contacts";

const posts = [
    { id: 1, title: "Post 1" },
    { id: 2, title: "Post 2" },
    { id: 3, title: "Post 3" }
];

const App = () => {
    return (
        <div>
            <Navbar />
            <h1>App</h1>
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/signin" component={SignIn} />
                <Route path="/posts/:postId">
                    {(props) => <Post {...props} posts={posts} />}
                </Route>
                <Route path="/posts">
                    {(props) => <PostsList {...props} posts={posts} />}
                </Route>
                <Route path="/contacts" component={Contacts} />
            </Switch>
        </div>
    );
};

export default App;

// Теперь перейдём в PostList и выведем наши записи:

import React from "react";
import { Link } from "react-router-dom";

const PostList = ({ posts }) => {
    return (
        <>
            {posts.map((post) => (
                <p key={post.id}>
                    {post.title} <Link to={`/posts/${post.id}`}>читать</Link>
                </p>
            ))}
        </>
    );
};

export default PostList;

// И теперь реализуем логику вывода записи. 
// Для получения postId воспользуемся объектом match из props:

import React from "react";

const Post = ({ match }) => {
    const postId = match.params.postId;
    return <h1>Запись {postId}</h1>;
};

export default Post;

// Теперь мы видим наш список записей и можем перейти на конкретную запись. 
// И давай выведем весь контент записи в компоненте Post:

import React from "react";

const Post = ({ match, posts }) => {
    const postId = match.params.postId;

    // В хранилище записей id - число, 
    // а значения в match.params всегда строки
    const getPost = (postId) => posts.find(({ id }) => String(id) === postId);
    const post = getPost(postId);

    // Выведем заголовок если есть запись и сообщение об ошибке если нет
    return (
        <h1>{post ? post.title : `post with id: ${postId} is not found`}</h1>
    );
};

export default Post;