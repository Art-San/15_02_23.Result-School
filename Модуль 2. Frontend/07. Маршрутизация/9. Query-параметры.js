// Обрати внимание!
// Если на 02:54 при выводе через console.log() у тебя возникают ошибки, 
// то выводи объект search в хуке useEffect():

useEffect(() => console.log(search), [search]);

// Query-параметры – это параметры запроса в URL, перечисленные после знака “?” 
// (очень часто таким образом организуют хранение фильтров или страниц пагинации).

// Перейдём на адрес “/posts?fromUrl=https://example.partner.com&block=pr_1” и посмотрим в DevTools:

// Перейдём на адрес “/posts?fromUrl=https://example.partner.com&block=pr_1” 
// и посмотрим в DevTools:

npm i query-string

// Эта библиотека предназначена для того, чтобы парсить URL Query параметры 
// в виде строки и создавать из них обычные объекты. 

// Перейдём в Posts и прочитаем query-параметры. 
// Импортируем библиотеку и извлечём location из props:


import React from "react";
import PostList from "./postList";
import Post from "./post";
import qs from "query-string";

const Posts = ({ match, location }) => {
    const posts = [
        { id: 1, title: "Post 1" },
        { id: 2, title: "Post 2" },
        { id: 3, title: "Post 3" }
    ];

    const search = qs.parse(location.search);

    const postId = match.params.postId;
    const getPost = (postId) => posts.find(({ id }) => String(id) === postId);

    return postId ? (
        <Post post={getPost(postId)} id={postId} />
    ) : (
        <PostList posts={posts} />
    );
};

export default Posts;

// Давай сымитируем то, что пользователь пришёл по рекламе с другого сайта, 
// и ему нужно отобразить блок с предложением для него:

import React, { useState, useEffect } from "react";
import PostList from "./postList";
import Post from "./post";
import qs from "query-string";

const Posts = ({ match, location }) => {
    const [showOffer, setShowOffer] = useState(false);

    const posts = [
        { id: 1, title: "Post 1" },
        { id: 2, title: "Post 2" },
        { id: 3, title: "Post 3" }
    ];

    const search = qs.parse(location.search);
    const { fromUrl, block } = search;

    useEffect(() => {
        if (!showOffer && fromUrl && block) {
            setShowOffer(true);
        }
    }, [fromUrl, block, showOffer]);

    const postId = match.params.postId;
    const getPost = (postId) => posts.find(({ id }) => String(id) === postId);

    return (
        <>
            {showOffer && <div>Специальное предложение</div>}
            {postId ? (
                <Post post={getPost(postId)} id={postId} />
            ) : (
                <PostList posts={posts} />
            )}
        </>
    );
};

export default Posts;

// В реальном проекте можно было бы еще отправить какое-нибудь событие и, 
// может быть, выдавать конкретный оффер в зависимости от параметров. 