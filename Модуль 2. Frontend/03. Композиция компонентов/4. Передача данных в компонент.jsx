// Модифицируем наш массив пунктов меню, чтобы они стали похожи на реальный пример. 
// Для этого переделаем массив строк в массив объектов.

// Чтобы задать начальное значение, модифицируем наш массив. 
// Далее передадим атрибуты в NavLink.

import React, { useState } from "react";
import NavLink from "./navLink";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [menuItems, setMenuItems] = useState([
    // Нам нужен id для key и text для отображения текста
    { id: 'main', text: 'Главная' },
    { id: 'blog', text: 'Блог' },
    { id: 'contacts', text: 'Контакты' },
  ]);

  const handleMenuClick = () => {/* ... */};
  const handleItemClick = (id) => {/* ... */};

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
            <NavLink key={item.id} text={item.text}/>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Navbar;

// Давай поймем, что мы сделали. Мы указали атрибут text компоненту. 
// Атрибуты, которые мы передаем компонентам появляются в объекте props, 
// который передается как аргумент в функцию компонента. 



// Если теперь мы выведем в консоль props у компонента NavLink, то увидим объект, 
// в котором есть text. Представим, что мы вызвали компонент таким образом: 
// <NavLink text={'Главная'}/>

import React from "react";

const NavLink = (props) => {
	
// И выведем props
  console.log(props);
  // выведется в консоли: { text: 'Главная' }

  return <li>Some text</li>;
};

export default NavLink;

// Поменяем NavLink, чтобы выводить правильный текст.

import React from "react";

const NavLink = (props) => {
  return <li className="list-group-item">{props.text}</li>;
};

export default NavLink;

// Представим, что при нажатии мы хотим отслеживать выбран пункт меню или нет 
// и менять стиль в зависимости от этого.

import React from "react";

const NavLink = (props) => {
  const [active, setActive] = useState(false);

  // Отслеживание нажатия
  const handleClick = () => {
    setActive((prevState) => !prevState);
  };

  // Создание стиля
  const getClasses = () => {
    let classes = "list-group-item";
    return (classes += active ? " active" : "");
  };

  return (
    <li className={getClasses()} onClick={handleClick}>
      {props.text}
    </li>
  );
};

export default NavLink;


// И сделаем так, чтобы начальное состояние active передавалось из родителя. 
// Модифицируем массив с элементами меню.


import React, { useState } from "react";
import NavLink from "./navLink";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [menuItems, setMenuItems] = useState([
    { id: "main", text: "Главная", active: true }, // Добавляем пункт active
    { id: "blog", text: "Блог", active: false },
    { id: "contacts", text: "Контакты", active: false },
  ]);

  const handleMenuClick = () => {/* ... */};
  const handleItemClick = (id) => {/* ... */};

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
						
{/* Передаём в props */}
            <NavLink
              key={item.id}
              text={item.text}
              active={item.active}
            />
          ))}
        </ul>
      )}
    </div>
  );
};

export default Navbar;





import React from "react";

const NavLink = (props) => {
  const [active, setActive] = useState(props.active);

  const handleClick = () => {
    setActive((prevState) => !prevState);
  };

  const getClasses = () => {
    let classes = "list-group-item";
    return (classes += active ? " active" : "");
  };

  return (
    <li className={getClasses()} onClick={handleClick}>
      {props.text}
    </li>
  );
};

export default NavLink;