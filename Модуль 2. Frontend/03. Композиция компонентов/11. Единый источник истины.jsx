// На текущий момент в нашем приложении есть недостаток - 
// у нас нет “единого источника истины”. Что это значит?

// Допустим, мы хотим сделать так, чтобы активен мог быть только один элемент меню. 
// Значит нам нужно сделать так, чтобы при нажатии на один пункт атрибут active 
// у других становился false. Изменим handleItemClick() в Navbar:

import React, { useState } from "react";
import NavLink from "./navLink";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [menuItems, setMenuItems] = useState(/* ... */);

  const handleMenuClick = () => {/* ... */};
  const handleItemClick = (id) => {
    const newMenuItems = menuItems.map((item) =>({
      ...item,
      // Аналог выражения item.id === id ? true : false
      active: item.id === id
    }));
    setMenuItems(newMenuItems);
  };

  return (
    <div>
      <button
        className="btn btn-sm btm-primary"
        onClick={handleMenuClick}
      >
        меню
      </button>
      {open && (
        <ul className="list-group">
          {menuItems.map((item) => (
            <NavLink
              key={item.id}
              {...item}
              onActiveChange={handleItemClick}
            />
          ))}
        </ul>
      )}
    </div>
  );
};

export default Navbar;

// Это происходит потому, что наши данные никак не синхронизированы. 
// Значение active только однажды устанавливается из props, а в дальнейшем выводится из useState():

import React from "react";

const NavLink = (props) => {
  // Из props устанавливается значение только один раз
  const [active, setActive] = useState(props.active);

  const handleClick = () => {/* ... */};
  const getClasses = () => {/* ... */};

  return (
    <li className={getClasses()} onClick={handleClick}>
      <a href={props.link}>{props.text}</a>
    </li>
  );
};

export default NavLink;

// Значит нам нужно избавиться от собственного значения в NavLink. 
// Но в таком случае у нас нет active.

import React from "react";

const NavLink = (props) => {

  // Вызываем только метод из props
  const handleClick = () => {
    props.onActiveChange(props.id);
  };

  const getClasses = () => {
    let classes = "list-group-item";
    // Заменено на значение из props
    return (classes += props.active ? " active" : "");
  };

  return (
    <li className={getClasses()} onClick={handleClick}>
      <a href={props.link}>{props.text}</a>
    </li>
  );
};

// И теперь компонент всегда будет отражать состояние 
// из родительского компонента. Такие компоненты называются управляемыми.

// Синхронизация нескольких компонентов

// Давай сперва приведём немного в порядок нашу страницу. Сейчас она выглядит так:

// Сделаем её красивее с помощью bootstrap. Перейдём в компонент Page и значительно изменим вёрстку. 

import React from "react";
import Navbar from "./navbar";

const Page = () => {
    const logoUrl = "https://picsum.photos/30";
    const siteName = "Example.com";

    return (
        <main className="d-flex flex-nowrap" style={{ height: "100vh" }}>
            <div
                className="d-flex flex-column flex-shrink-0 p-3 bg-light"
                style={{ width: "280px" }}
            >
                <div className="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-dark text-decoration-none">
                    <img src={logoUrl} alt="" className="bi pe-none me-2" />
                    <span className="fs-4">{siteName}</span>
                </div>
                <hr />
                <Navbar />
            </div>
            <div className="p-4">
                <h1 className="h3">Контент</h1>
            </div>
        </main>
    );
};

export default Page;

const NavLink = (props) => {
    // Вызываем только метод из props
    const handleClick = () => {
        props.onActiveChange(props.id);
    };

    // Теперь для ссылки
    const getClasses = () => {
        let classes = "nav-link";
        // Заменено на значение из props
        return (classes += props.active ? " active" : "");
    };

    return (
        <li className="nav-item" onClick={handleClick}>
            <a href={props.link} className={getClasses()}>
                {props.text}
            </a>
        </li>
    );
};

const Navbar = () => {
    // .....

    return (
        <div>
            <button
                className="btn btn-sm btm-primary"
                onClick={handleMenuClick}
            >
                меню
            </button>
            {open && (
                <ul className="nav nav-pills flex-column mb-auto">
                    {menuItems.map((item) => (
                        <NavLink
                            key={item.id}
                            {...item}
                            onActiveChange={handleItemClick}
                        />
                    ))}
                </ul>
            )}
        </div>
    );
};

// Теперь при открытом меню у вас будет выглядеть страница так:

// Теперь давай представим, что мы хотим выводить “хлебные крошки” 
// перед заголовком, по нажатию на ссылку, как будто будет меняться страница, 
// и “хлебные крошки” будут показывать, где мы сейчас находимся. 

// Сделаем новый компонент Breadcrumb.

import React from "react";

const Breadcrumbs = () => {
    return (
        <nav>
            <ol className="breadcrumb">
                <li className="breadcrumb-item">Главная</li>
                <li className="breadcrumb-item active" aria-current="page">
                    Текущая страница
                </li>
            </ol>
        </nav>
    );
};

export default Breadcrumbs;

// И выведем его на странице:

import React from "react";
import Navbar from "./navbar";
import Breadcrumbs from "./breadcrumb";

const Page = () => {
    const logoUrl = "https://picsum.photos/30";
    const siteName = "Example.com";

    return (
        <main className="d-flex flex-nowrap" style={{ height: "100vh" }}>
            <div
                className="d-flex flex-column flex-shrink-0 p-3 bg-light"
                style={{ width: "280px" }}
            >
                <div className="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-dark text-decoration-none">
                    <img src={logoUrl} alt="" className="bi pe-none me-2" />
                    <span className="fs-4">{siteName}</span>
                </div>
                <hr />
                <Navbar />
            </div>
            <div className="p-4">
                <div>
                    <Breadcrumbs />
                </div>
                <h1 className="h3">Контент</h1>
            </div>
        </main>
    );
};

export default Page;

// Теперь там, где текст “Текущая страница”, нужно вывести выбранную страницу в меню, 
// но, если это главная, то вывести только главную. Но сейчас компонент “хлебных крошек” 
// никак не связан с меню.


// Сейчас Navbar передаёт своё состояние в NavLink, но так как нам понадобилось 
// синхронизировать ещё и Breadcrumb, то нам нужно переместить состояние в их общего родителя т.е. Page


// Прежде чем это сделаем, ещё уберём лишнее, чтобы приблизить наш пример к реальности. 
// Мы уберём открытие и закрытие меню по кнопке.

import React, { useState } from "react";
import NavLink from "./navLink";

const Navbar = () => {
	
  // Удалено состояние open
    const [menuItems, setMenuItems] = useState([
        { id: "main", text: "Главная", active: true }, // Добавляем пункт active
        { id: "blog", text: "Блог", active: false },
        { id: "contacts", text: "Контакты", active: false }
    ]);

    const handleItemClick = (id) => {
        const newMenuItems = menuItems.map((item) => ({
            ...item,
            active: item.id === id
        }));
        setMenuItems(newMenuItems);
    };

    return (
        <div>
            {/* Убрана кнопка и условный рендеринг */}
            <ul className="nav nav-pills flex-column mb-auto">
                {menuItems.map((item) => (
                    <NavLink
                        key={item.id}
                        {...item}
                        onActiveChange={handleItemClick}
                    />
                ))}
            </ul>
        </div>
    );
};

export default Navbar;

// Подъём состояния
// Давай перенесём состояние из Navbar в Page.

const Navbar = () => {
  //  Переносим отсюда в Page
  const [menuItems, setMenuItems] = useState(/* ... */);
  const handleItemClick = (id) => {/* ... */};

  return (
      <div>
          <ul className="nav nav-pills flex-column mb-auto">
              {menuItems.map((item) => (
                  <NavLink
                      key={item.id}
                      {...item}
                      onActiveChange={handleItemClick}
                  />
              ))}
          </ul>
      </div>
  );
};



import React, { useState } from "react";
import Navbar from "./navbar";
import Breadcrumbs from "./breadcrumb";

const Page = () => {
    const [menuItems, setMenuItems] = useState([
        { id: "main", text: "Главная", active: true }, // Добавляем пункт active
        { id: "blog", text: "Блог", active: false },
        { id: "contacts", text: "Контакты", active: false }
    ]);

    const handleItemClick = (id) => {
        const newMenuItems = menuItems.map((item) => ({
            ...item,
            active: item.id === id
        }));
        setMenuItems(newMenuItems);
    };

    const logoUrl = "https://picsum.photos/30";
    const siteName = "Example.com";

    return (
        <main className="d-flex flex-nowrap" style={{ height: "100vh" }}>
            <div
                className="d-flex flex-column flex-shrink-0 p-3 bg-light"
                style={{ width: "280px" }}
            >
                <div className="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-dark text-decoration-none">
                    <img src={logoUrl} alt="" className="bi pe-none me-2" />
                    <span className="fs-4">{siteName}</span>
                </div>
                <hr />
                <Navbar menuItems={menuItems} onItemClick={handleItemClick} />
            </div>
            <div className="p-4">
                <div>
                    <Breadcrumbs />
                </div>
                <h1 className="h3">Контент</h1>
            </div>
        </main>
    );
};

export default Page;

// Вернёмся в Navbar, чтобы получить props, теперь это menuItems и onItemClick:


import React from "react";
import NavLink from "./navLink";

const Navbar = (props) => {
    return (
        <div>
            <ul className="nav nav-pills flex-column mb-auto">
                {props.menuItems.map((item) => (
                    <NavLink
                        key={item.id}
                        {...item}
                        onActiveChange={props.onItemClick}
                    />
                ))}
            </ul>
        </div>
    );
};

export default Navbar;

// Теперь нам нужно передать текущую страницу в компонент Breadcrumb. 
// На самом деле, в нашем кейсе кроме передачи страницы нам нужно, 
// чтобы при клике на “Главная” пользователь как будто бы возвращался на главную. 
// Для этого реализуем функцию и передадим в Breadcrumb:

const Page = () => {
  const [menuItems, setMenuItems] = useState([
      { id: "main", text: "Главная", active: true }, // Добавляем пункт active
      { id: "blog", text: "Блог", active: false },
      { id: "contacts", text: "Контакты", active: false }
  ]);

  const handleItemClick = (id) => {
      const newMenuItems = menuItems.map((item) => ({
          ...item,
          active: item.id === id
      }));
      setMenuItems(newMenuItems);
  };

  const handleSetMainActive = () => {
      const newMenuItems = menuItems.map((item) => ({
          ...item,
          active: item.id === "main"
      }));
      setMenuItems(newMenuItems);
  };

  const currentActivePage = menuItems.find((item) => item.active);

  const logoUrl = "https://picsum.photos/30";
  const siteName = "Example.com";

  return (
      <main className="d-flex flex-nowrap" style={{ height: "100vh" }}>
          <div
              className="d-flex flex-column flex-shrink-0 p-3 bg-light"
              style={{ width: "280px" }}
          >
              <div className="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-dark text-decoration-none">
                  <img src={logoUrl} alt="" className="bi pe-none me-2" />
                  <span className="fs-4">{siteName}</span>
              </div>
              <hr />
              <Navbar menuItems={menuItems} onItemClick={handleItemClick} />
          </div>
          <div className="p-4">
              <div>
                  <Breadcrumbs
                      page={currentActivePage}
                      onGoMain={handleSetMainActive}
                  />
              </div>
              <h1 className="h3">Контент</h1>
          </div>
      </main>
  );
};


// Обрати внимание, что при определении страницы мы использовали id, 
// в случае, если твое хранилище данных отдаёт постоянный идентификатор, 
// лучше сравнивать по нему, а не по какому-то полю. 

// Теперь переданные props используем в Breadcrumbs:

import React from "react";

const Breadcrumbs = (props) => {
    const isMainPage = props.page.id === "main";
    const mainClasses = "breadcrumb-item" + (isMainPage ? " active" : "");

    return (
        <nav>
            <ol className="breadcrumb">
                <li className={mainClasses} onClick={props.onGoMain}>Главная</li>

                {!isMainPage && (
                    <li className="breadcrumb-item active">
                        {props.page.text}
                    </li>
                )}
            </ol>
        </nav>
    );
};

export default Breadcrumbs;

// Посмотрим, что получилось. Если страница выбрана, то увидим:

// А при нажатии на главную у нас будет меняться активная ссылка:


// *********************************************
// Деструктуризация аргументов

// Как мы видим, наши переменные увеличились и стали менее удобными. 
// Чтобы вернуть их “короткие”, мы можем деструктуризовать из props.

// Можно это сделать inline в аргументах или в теле функции.

// inline
const Component = ({ prop1, prop2 }) => { ... }
// Не inline
const Component = (props) => {
  const { prop1, props2 } = props
}

// Часто можно встретить в коде такой пример деструктуризации:

const Component = ({ prop1, prop2, ...rest }) => {...}

// Таким образом, можно извлечь некоторые данные из изначальных props, а rest передать дальше потомку

const props = { id: 1, text: "hello", active: true, onClick: Funtion }
const { id, text, ...rest } = props // rest = { active: true, onClick: Funtion }

// Такой метод не удаляет из props переменные, а создаёт новый объект. 
// Вообще деструктуризация сейчас используется повсеместно, поэтому предлагаю тебе почитать о ней 
// подробнее (ссылка). https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment

// Давай с новыми знаниями модифицируем наш код. 

const Breadcrumbs = ({ page, onGoMain }) => {
  const isMainPage = page.id === "main";
  const mainClasses = "breadcrumb-item" + (isMainPage ? " active" : "");

  return (
      <nav>
          <ol className="breadcrumb">
              <li className={mainClasses} onClick={onGoMain}>
                  Главная
              </li>

              {!isMainPage && (
                  <li className="breadcrumb-item active">{page.text}</li>
              )}
          </ol>
      </nav>
  );
};


const Navbar = ({onItemClick, menuItems}) => {
  return (
      <div>
          <ul className="nav nav-pills flex-column mb-auto">
              {menuItems.map((item) => (
                  <NavLink
                      key={item.id}
                      {...item}
                      onActiveChange={onItemClick}
                  />
              ))}
          </ul>
      </div>
  );
};

// Выводы

// В данном уроке мы поняли, что компоненты могут быть частями друг друга. 
// Компонент, в котором находится другой, называется родительским. 
// Компонент, который находится в другом называется дочерним. 

// Мы поняли, что у компонентов может быть своё состояние, 
// от которого будет зависеть отображение и функционал. 
// Чтобы задать состояние компонента, нужно использовать хук useState(). 

// У компонента могут быть props, их передаёт родительский компонент дочернему. 
// props - это объект, который можно получить как аргумент функции компонента. 

// В props могут передаваться не только данные, но и функции 
// (например, для изменения состояния родительского компонента).
//  При вызове таких функций состояние родителя будет изменяться, 
//  и изменённое состояние будет передано потомку. 

// Если мы хотим, чтобы изменение состояния родительского компонента 
// непосредственно влияло на работу дочернего, то нужно дочерний компонент 
// сделать управляемым (подробнее о них еще поговорим в уроке по формам).


// Бывают случаи, когда нам нужно синхронизировать поведение нескольких дочерних компонентов. 
// Для этого нужно, чтобы такие компоненты находились в одном родителе, 
// а потомки получали нужные данные из него, в том числе и функции для изменения состояния родителя. 

// Деструктурирующее присваивание:
https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment