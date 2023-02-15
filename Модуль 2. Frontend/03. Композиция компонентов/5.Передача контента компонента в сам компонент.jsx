// Мы разобрались, как передавать атрибуты (props), но что, 
// если мы хотим передавать не только значения, но и дочерний компонент? 
// Для этого в React используется children.

import React, { useState } from "react";
import NavLink from "./navLink";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [menuItems, setMenuItems] = useState([
    { id: "main", text: "Главная", active: true },
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
	
    <NavLink key={item.id} text={item.text} active={item.active}>
	
      <a>{item.text}</a>
	
    </NavLink>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Navbar;

// И уже в NavLink выведем наш children.

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
      {props.children}
    </li>
  );
};

export default NavLink;

// Добавим немного смысла выводимому потомку. Для этого добавим элементам массива menuItems 
// поле link со ссылкой на страницу и выведем её.

import React, { useState } from "react";
import NavLink from "./navLink";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [menuItems, setMenuItems] = useState([
    {
      id: "main",
      text: "Главная",
      active: true,
      link: "#main",
    },
    {
      id: "blog",
      text: "Блог",
      active: false,
      link: "#blog",
    },
    {
      id: "contacts",
      text: "Контакты",
      active: false,
      link: "#contacts",
    },
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
            <NavLink
              key={item.id}
              text={item.text}
              active={item.active}
            >
              <a href={item.link}>{item.text}</a>
            </NavLink>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Navbar;


// В нашем случае использовать children некорректно, 
// т.к. link – непосредственный атрибут NavLink. Обычно children используют, 
// когда содержимое никак не связано с компонентом. Например, в диалоговых окнах.

// Например, в библиотеке material-ui есть компонент Tooltip. 

<Tooltip title="текст для отображения">
  <Button>Нажми на кнопку</Button>
</Tooltip>

// Текст появляется при наведении, именно выводом текста занимается Tooltip. 
// Button и Tooltip в данном примере из библиотеки @material-ui/core.

// К самому компоненту относится выводимый текст, а вот кнопка к нему не относится, 
// и содержание никак не влияет на работу компонента.

// Давай отрефакторим код так, чтобы сделать link атрибутом NavLink.

import React, { useState } from "react";
import NavLink from "./navLink";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [menuItems, setMenuItems] = useState(/* ... */);

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
            <NavLink
              key={item.id}
              text={item.text}
              active={item.active}
              link={item.link}
            />
          ))}
        </ul>
      )}
    </div>
  );
};

export default Navbar;



// В NavLink.

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
      <a href={props.link}>{props.text}</a>
    </li>
  );
};

export default NavLink;

// Таким образом, в случае, если ссылка будет выводиться как-то не так, 
// мы будем искать ошибки в NavLink и нам не нужно будет подниматься на уровень выше в Navbar.