// Итоговый код конспекта по ссылке.
// https://codesandbox.io/s/react-konspekty-10-formy-chast-2-8hvrxx?file=/src/App.js

// В данном конспекте мы реализуем форму оформления заказа, 
// познакомимся с новыми типами полей и узнаем о том, как ускорить работу с формами.

// Для начала мы изменим структуру нашего проекта:

// Переименуем форму, которую мы сделали в конспекте 
// “Формы. Часть 1” из MyForm в FeedbackForm, 
// так нам будет легче идентифицировать формы в проекте. 

// В папке components создадим папку feedback-form и переместим 
// туда файл с FeedbackForm и файл validationSchema:

// App.js
import "./styles.css";
import FeedbackForm from "./components/feedback-form/feedbackForm";

const App = () => {
    return (
        <div className="container mt-4">
            <FeedbackForm />
        </div>
    );
}

export default App;



// components/myForm.jsx -> components/feedback-form/feedbackForm.jsx
import React, { useState, useEffect } from "react";
import TextField from "../textField";
import { validate } from "../../utils/validator";
import { validationSchema } from "./validationSchema";

const FeedbackForm = () => {
    const [values, setValues] = useState({
        email: "",
        link: "",
        description: "",
        password: ""
    });

    const [errors, setErrors] = useState({});
    const isValid = Object.keys(errors).length === 0;

    useEffect(() => {
        const errors = validate(values, validationSchema);
        setErrors(errors);
    }, [values]);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (isValid) {
            // отправляем только если валидно
            console.log("Отправлено!");
        }
    };

    const handleChange = (e) => {
        const { value, name } = e.target;
        setValues((prev) => ({
            ...prev,
            [name]: value
        }));
    };

    const { email, link, description, password } = values;

    return (
        <div className="container mt-5">
            <div className="row">
                <div className="col-md-6 offset-md-3 shadow p-4">
                    <h2>Отчёт об ошибке</h2>

                    <form onSubmit={handleSubmit}>
                        <TextField
                            id="email"
                            name="email"
                            label="Email"
                            value={email}
                            onChange={handleChange}
                            error={errors.email}
                        />

                        <TextField
                            id="link"
                            name="link"
                            label="Ссылка на страницу с ошибкой"
                            value={link}
                            onChange={handleChange}
                            error={errors.link}
                        />

                        <TextField
                            id="description"
                            name="description"
                            label="Описание"
                            value={description}
                            onChange={handleChange}
                            error={errors.description}
                        />

                        <TextField
                            id="password"
                            name="password"
                            label="Пароль"
                            value={password}
                            onChange={handleChange}
                            error={errors.password}
                            type="password"
                        />

                        <button
                            className="btn btn-primary w-100 mx-auto"
                            disabled={!isValid}
                            type="submit"
                        >
                            Отправить
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default FeedbackForm

// Не забываем обновить импорты в компоненте формы согласно новой структуре.

// Далее, чтобы формы у нас были в едином стиле, 
// мы создадим обёрточный компонент. Сейчас в компоненте 
// FeedbackForm есть несколько <div> и <h2> , 
// в которые оборачивается <form>. Их мы и вынесем в отдельный компонент.

// Создаём компонент FormLayout. Он будет принимать children и заголовок:

// components/formLayout.jsx
import React from "react";
import PropTypes from "prop-types";

const FormLayout = ({ children, title }) => {
    return (
        <div className="container mt-5">
            <div className="row">
                <div className="col-md-6 offset-md-3 shadow p-4">
                    <h2>{title}</h2>
                    {children}
                </div>
            </div>
        </div>
    );
};

FormLayout.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.node,
        PropTypes.arrayOf(PropTypes.node)
    ]),
    title: PropTypes.string.isRequired
};

export default FormLayout;

// Теперь воспользуемся им в нашем FeedbackForm:

import React, { useState, useEffect } from "react";
import TextField from "../textField";
import { validate } from "../../utils/validator";
import { validationSchema } from "./validationSchema";
import FormLayout from "../formLayout";

const FeedbackForm = () => {
    // ...

    return (
        <FormLayout title="Отчёт об ошибке">
            <form onSubmit={handleSubmit}>
                {/* ... */}
            </form>
        </FormLayout>
    );
};

export default FeedbackForm;


// Ранее мы уже говорили, что будем реализовывать 
// форму оформления заказа. Чтобы мы могли 
// просматривать различные формы в нашем приложении, 
// реализуем несколько страниц с помощью React Router. 
// Для этого совершим несколько действий:

// Создадим в папке src папку pages. 
// В ней будут лежать компоненты, 
// которые будут вызваны на конкретной странице.

// Создадим в папке pages компоненты-страницы: MainPage, 
// FeedbackPage и OrderPage. Последующие компоненты 
// в папке pages будем именовать с постфиксом Page. 
// Так нам будет легче ориентироваться в будущем. 
// Глядя на название компонента нам будет сразу ясно, 
// что этот компонент отвечает за контент на странице.

// В MainPage выведем ссылки на разные страницы:

// pages/mainPage.jsx
import React from "react";
import { Link } from "react-router-dom";

const MainPage = () => {
    return (
        <div>
            <p>
                <Link to="/feedback">Обратная связь</Link>
            </p>
            <p>
                <Link to="/order">Оформление заказа</Link>
            </p>
        </div>
    );
};

export default MainPage;

// Как мы можем видеть (в атрибуте to у Link), 
// страницы с обратной связью будут находиться 
// по адресам /feedback и /order соответственно.

// В FeedbackPage вернём форму:

// pages/feedbackPage.jsx
import React from "react";
import FeedbackForm from "../components/feedback-form/feedbackForm";

const FeedbackPage = () => {
    return <FeedbackForm />;
};

export default FeedbackPage;

// Пока на странице оформления заказа 
// выводим только заголовок. Форму реализуем позже:

// pages/orderPage.jsx
import React from "react";

const OrderPage = () => {
    return <h1>Оформление заказа</h1>;
};

export default OrderPage;

// У нас созданы все необходимые сейчас 
// компоненты. Добавим роутер в index.js:

// index.js
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import App from "./App";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
    <BrowserRouter>
        <StrictMode>
            <App />
        </StrictMode>
    </BrowserRouter>
);

// В App создадим маршрутизацию:
import "./styles.css";
import { Route, Switch } from "react-router-dom";
import MainPage from "./pages/mainPage";
import FeedbackPage from "./pages/feedbackPage";
import OrderPage from "./pages/orderPage";

const App = () => {
    return (
        <div className="container mt-4">
            <Switch>
                <Route path="/" exact component={MainPage} />
                <Route path="/feedback" component={FeedbackPage} />
                <Route path="/order" component={OrderPage} />
            </Switch>
        </div>
    );
};

export default App;

// Теперь на экране мы увидим

// Главная страница: