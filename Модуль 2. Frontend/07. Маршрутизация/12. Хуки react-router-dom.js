// В нашем примере мы учитываем небольшую вложенность компонентов и поэтому 
// нам удобно передавать методы для работы с историей. 
// Однако вложенность может быть большой и нужно будет передавать props через 
// большое количество компонентов. Чтобы этого не делать, можно воспользоваться специальными хуками. 

// Перенесём функцию для работы с кнопкой перехода 
// из записи к списку и воспользуемся хуком useHistory():

import React from "react";
import { useHistory } from "react-router-dom";

// Убрал из дестркуктуризации
const Post = ({ post, id }) => {
    // Получение истории
    const history = useHistory();

    // Перенесена функция из Posts
    const goToList = () => {
        post ? history.push("/posts") : history.replace("/posts");
    };

    return (
        <>
            <button onClick={goToList} type="button">
                В список записей
            </button>
            <h1>{post ? post.title : `post with id: ${id} is not found`}</h1>
        </>
    );
};

export default Post;

// И нужно убрать из Posts:

// ...

const Posts = () => {
    // ...

    // Функция goToList перенесена в Post

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

// Также в Posts мы можем заменить match на хук useParams():

import React, { useState, useEffect } from "react";
import PostList from "./postList";
import Post from "./post";
import qs from "query-string";
import { useParams } from "react-router-dom";

const Posts = ({ location }) => {
    const { postId } = useParams(); // Можно сразу получить postId
    const getPost = (postId) => posts.find(({ id }) => String(id) === postId);

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
    }, [fromUrl, block]);

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

// И ещё мы можем вынести отдельно компонент со специальным предложением 
// и воспользоваться хуком useLocation():

import React from "react";
import { useParams } from "react-router-dom";
import PostList from "./postList";
import Post from "./post";
import Offer from "./offer";

const Posts = () => {
    const { postId } = useParams();
    const getPost = (postId) => posts.find(({ id }) => String(id) === postId);

    const posts = [
        { id: 1, title: "Post 1" },
        { id: 2, title: "Post 2" },
        { id: 3, title: "Post 3" }
    ];

    return (
        <>
            <Offer />
            {postId ? (
                <Post post={getPost(postId)} id={postId} />
            ) : (
                <PostList posts={posts} />
            )}
        </>
    );
};

export default Posts;

// В компоненте Offer:

import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import qs from "query-string";

const Offer = () => {
    const [showOffer, setShowOffer] = useState(false);

    // Хук useLocation()
    const { search } = useLocation();
    const { fromUrl, block } = qs.parse(search);

    useEffect(() => {
        if (!showOffer && fromUrl && block) {
            setShowOffer(true);
        }
    }, [fromUrl, block]);

    return showOffer ? <div>Специальное предложение</div> : null;
};

export default Offer;

// На этих примерах мы посмотрели использование хуков из библиотеки react-router-dom. 
// Также мы увидели, что если пользоваться хуками, нам не нужно для этого использовать props. 

