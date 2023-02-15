// Каждый раз создавать новые обработчики 
// для изменения каждого поля слишком неудобно 
// и расточительно по времени. 
// Нам нужно единое состояние для хранения 
// всех значений полей и метод для их изменения:

import React, { useState } from "react";

const MyForm = () => {
    const [values, setValues] = useState({
        email: "gnggn",
        link: "",
        description: ""
    })
    

    const handleSubmit = () => {
        // do something...
    }

    const handleChange = (e) => {
        const { value, name } = e.target
        setValues((prev) => ({
            ...prev,
            [name]: value
        }))
    }

    // Деструктуризируем для удобства
    const { email, link, description } = values

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
                        onChange={handleChange}
                    />
                </p>
                <p>
                    <label htmlFor="link">
                        Ссылка на страницу с ошибкой
                    </label>{' '}
                    <input
                        id="link"
                        name="link"
                        value={link}
                        onChange={handleChange}
                    />
                </p>

                <p>
                    <label htmlFor="description">Описание</label>{' '}
                    <input
                        id="description"
                        name="description"
                        value={description}
                        onChange={handleChange}
                    />
                </p>

                <button type="submit">Отправить</button>
            </form>
        </div>
    );
};
export default MyForm;

// В объекте values ключи совпадают со значениями атрибутов name. 
// Таким образом, зная name, в функции handleChange() 
// мы можем определенному полю в объекте values обновлять значение.

// Если мы захотим добавить ещё поля, то нужно будет только 
// добавить состояния в values и вывести в верстку новые поля.