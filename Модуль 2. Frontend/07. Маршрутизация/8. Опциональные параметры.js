// Иногда в проекте нам нужно использовать опциональные (необязательные) параметры в URL. 
// Чтобы их рассмотреть, немного изменим структуру роутов. По пути “/posts” 
// мы всегда будем выводить компонент Posts, независимо от того, есть ли postId. 
// Компонент Posts сам будет решать, вывести PostList или Post. 

// Чтобы указать, что параметр является опциональным, 
// в строке после него нужно добавить знак вопроса:

<Route path="/posts/:postId?">
    {(props) => <Post {...props} posts={posts} />}
</Route>

// Теперь всегда будет выводиться компонент Post. 
// Поставим на его место компонент Posts и удалим PostsList:

import React from "react";
import { Route, Switch } from "react-router-dom";
import Navbar from "./components/navbar";
import Home from "./components/home";
import SignIn from "./components/signIn";
import Posts from "./components/posts";
import Contacts from "./components/contacts";

// Список постов перенесли в Posts

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
            </Switch>
        </div>
    );
};

export default App;

// Перейдём в Posts и отредактируем его так, чтобы выводить PostList или Post:

import React from "react";
import PostList from "./postList";
import Post from "./post";

const Posts = ({ match }) => {
    const posts = [
        { id: 1, title: "Post 1" },
        { id: 2, title: "Post 2" },
        { id: 3, title: "Post 3" }
    ];

    // Получение URL параметра
    const postId = match.params.postId;

    // Логика получения записи перенесена из Post
    const getPost = (postId) => posts.find(({ id }) => String(id) === postId);

    // Если есть postId, то возвращаем Post, иначе PostList
    return postId ? (
        <Post post={getPost(postId)} id={postId} />
    ) : (
        <PostList posts={posts} />
    );
};

export default Posts;

// А Post можно упростить:

import React from "react";

const Post = ({ post, id }) => {
    return <h1>{post ? post.title : `post with id: ${id} is not found`}</h1>;
};

export default Post;

// Важно сказать, что в роуты можно передавать несколько URL-параметров, 
// а не только один. Например, если бы мы строили каталог сайта, 
// то можно было бы указывать категории и подкатегории:

<Route path="/catalog/:category?/:subCategoy?">
    {({ match }) => <pre>{JSON.stringify(match.params)}</pre>}
</Route>

// А так как это строка, то в некоторых случаях её можно сгенерировать 
// из нужных параметров. Например, в Wordpress можно настраивать разный URL постов.
//  Можно получить настройку и из неё склеить список параметров.
// Например, мы получаем конфигурацию URL:

// Последовательность параметров в URL полученных из CMS
const pathConfig = ['year', 'mounth', 'date', 'slug']
// Паттерн для роута
const routePath = "/:" + pathConfig.join('/:') // -> /:year/:mounth/:date/:slug

<Route path={routePath} component={Post}/>

При обращении на URL “/2022/02/12/my-post” будет срабатывать наш роут.