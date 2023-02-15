// В предыдущей части мы разобрались, 
// как создавать формы и как идентифицировать их поля. 
// В этом разделе мы разберёмся, как управлять формами. 

// Для того чтобы разобраться, 
// мы будем делать форму “Отчёт об ошибке”. 
// Создадим компонент:

import React from "react";

const MyForm = () => {
    const handleSubmit = () => {
        // do something...
    };

    return (
        <div>
            <h2>Отчёт об ошибке</h2>

            <form onSubmit={handleSubmit}>
                <p>
                    <label htmlFor="email">Email</label>{' '}
                    <input id="email" name="email" />
                </p>
                <p>
                    <label htmlFor="link">
                        Ссылка на страницу с ошибкой
                    </label>{' '}
                    <input id="link" name="link" />
                </p>

                <p>
                    <label htmlFor="description">Описание</label>{' '}
                    <input id="description" name="description" />
                </p>

                <button type="submit">Отправить</button>
            </form>
        </div>
    );
};

// export default MyForm;

// В этой форме есть три поля: email, ссылка на страницу с ошибкой и описание ошибки:

// На данный момент, с точки зрения React, 
// наша форма является неконтролируемой. 
// Это означает то, что у нас нет прямого доступа 
// к данным полей и мы не управляем их изменением. 
// Однако в неконтролируемом режиме мы можем назначить нашим полям начальное значение.

import React from "react";

const MyForm1 = () => {
    const handleSubmit = () => {
        // do something...
    };

    return (
        <div>
            <h2>Отчёт об ошибке</h2>

            <form onSubmit={handleSubmit}>
                <p>
                    <label htmlFor="email">Email</label>{' '}
                    <input
                        id="email"
                        name="email"
                        defaultValue="mail@mail.ru"
                    />
                </p>
                <p>
                    <label htmlFor="link">
                        Ссылка на страницу с ошибкой
                    </label>{' '}
                    <input id="link" name="link" />
                </p>

                <p>
                    <label htmlFor="description">Описание</label>{' '}
                    <input id="description" name="description" />
                </p>

                <button type="submit">Отправить</button>
            </form>
        </div>
    );
};

// export default MyForm;

// С помощью атрибутов defaultValue и defaultChecked для <input type="text"> 
// и <input type="checkbox">, соответственно, мы можем задавать начальное значение. 

// Чаще всего для решения наших задач неуправляемый режим 
// не подходит (например, если мы хотим валидировать поля). 
// Чтобы управлять полями формы, нам нужно организовать 
// хранение значений полей и способ их изменения:

import React, { useState } from "react";

const MyForm2 = () => {
    const [email, setEmail] = useState('');

    const handleSubmit = () => {
        // do something...
    };

    const handleEmailChange = (e) => {
        const { value } = e.target;
        setEmail(value);
    };

    return (
        <div>
            <h2>Отчёт об ошибке</h2>

            <form onSubmit={handleSubmit}>
                <p>
                    <label htmlFor="email">Email</label>{' '}
                    <input
                        id="email"
                        name="email"
                        value={email}
                        onChange={handleEmailChange}
                    />
                </p>
                <p>
                    <label htmlFor="link">
                        Ссылка на страницу с ошибкой
                    </label>{' '}
                    <input id="link" name="link" />
                </p>

                <p>
                    <label htmlFor="description">Описание</label>{' '}
                    <input id="description" name="description" />
                </p>

                <button type="submit">Отправить</button>
            </form>
        </div>
    );
};

// export default MyForm;

// И сейчас наша форма работает примерно по такой схеме:

// 1. Мы добавили состояние для email и передали в <input>. 
// Пользователь вводит значение в этот <input>.

// 2. Срабатывает событие onChange и вызывается обработчик 
// (в нашем случае handleEmailChange()). 
// При вызове обработчика в качестве аргумента будет передано событие event, 
// в котором содержится обновленное значение из <input> (в event.target по ключу value).

// 3. Это значение будет записано в состояние, 
// и новое состояние будет передано в <input>

// 4. После того как новое значение будет установлено,
// пользователь увидит изменение у себя на экране.

// Обрати внимание, что для состояния email 
// мы указываем начальное значение в качестве пустой строки.
// Так мы говорим React, что форма управляемая, иначе будет получена ошибка:

// То же самое произойдёт, если мы не передадим обработчик в атрибут

// Не забывай указывать данные атрибуты. 

// Но у нас есть несколько полей, не только почта. 
// Неужели для каждого описывать своё состояние и обработчик? 
// Конечно же нет. Это было бы крайне неудобно. 
// Далее по уроку мы научимся с этим работать.