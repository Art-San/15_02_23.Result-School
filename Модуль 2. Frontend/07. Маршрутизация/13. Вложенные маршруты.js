// В нашем приложении может быть несколько вложенных страниц. Например, 
// мы работаем в большой компании и у нас есть общие контакты и контакты по департаментам:

<Route path="/contacts/departaments-1" component={...} />
<Route path="/contacts/departaments-2" component={...} />
<Route path="/contacts" component={Contacts} />

// Чтобы не раздувать роуты в компоненте App, перенесём их в компонент Contacts, 
// а в App оставим только роут “/contacts” :

import React from "react";
import { Switch, Route, Link } from "react-router-dom";
import ContactDepartaments1 from "./contactDepartaments1";
import ContactDepartaments2 from "./contactDepartaments2";

const Contacts = () => {
    return (
        <>
            <h1>Контакты</h1>
            <ul>
                <li>
                    <Link to="/contacts/departaments-1">Департамент 1</Link>
                </li>
                <li>
                    <Link to="/contacts/departaments-2">Департамент 2</Link>
                </li>
            </ul>
            <Switch>
                <Route
                    path="/contacts/departaments-1"
                    component={ContactDepartaments1}
                />
                <Route
                    path="/contacts/departaments-2"
                    component={ContactDepartaments2}
                />
            </Switch>
        </>
    );
};

export default Contacts;

// Компоненты для департаментов аналогичны, например ContactDepartaments1:

import React from "react";

const ContactDepartaments1 = () => {
    return <h1>Департамент 1</h1>;
};

export default ContactDepartaments1;

// И теперь мы всегда видим контакты. По нажатию на департамент увидим заголовок ниже:

// Подобное можно реализовать и без Switch.

// Итоги
// Маршрутизацию делаем с помощью библиотеки react-router-dom. 
// Мы можем организовывать роуты с помощью Switch и без него, в случае, 
// если нам необязательно выбирать только один роут. 
// По умолчанию пути в Route определяются по наличию подстроки, 
// а если нужно “строгое” сравнение, то нужно добавлять атрибут exact. 

// Библиотека дает нам возможность изменять адрес страницы и контент на ней без перезагрузки. 
// Это можно делать с помощью компонента Link или, используя методы history. 
// При выборе метода push() или replace() стоит руководствоваться желанием создать положительный UX.

// Библиотека даёт нам возможность делать переадресацию пользователя между страницами.

// Если нужно использовать данные из библиотеки в дочерних компонентах, 
// то можно воспользоваться хуками, чтобы не передавать данные как props. 