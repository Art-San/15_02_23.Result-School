// Сейчас мы разберемся, как все-таки можно “изменить” наш props 
// на примере изменения active. Схематически можно представить так:




// Для реализации этой схемы передадим в NavLink проп onActiveChange, 
// в который передадим функцию handleItemClick() из Navbar. Также передадим id:


// в Navbar
import React, { useState } from "react";
import NavLink from "./navLink";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [menuItems, setMenuItems] = useState(/* ... */);

  const handleMenuClick = () => {/* ... */};
  const handleItemClick = (id) => {
    console.log(id); // Пока просто выводит в консоль
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
              id={item.id}
              text={item.text}
              active={item.active}
              link={item.link}
              onActiveChange={handleItemClick}
            />
          ))}
        </ul>
      )}
    </div>
  );
};

export default Navbar;


// В NavLink добавим кнопку, чтобы сравнить вызов props.onActiveChange() и handleClick().


// в NavLink
import React from "react";

const NavLink = (props) => {
  const [active, setActive] = useState(props.active);

  const handleClick = () => {
    setActive((prevState) => !prevState);
  };
  const getClasses = () => {/* ... */};

  return (
    <div>
      {/* Вызов функции (добавлена кнопка для наглядности) */}
      <button
        onClick={() => props.onActiveChange(props.id)}
      >
        toggle active
      </button>
      <li className={getClasses()} onClick={handleClick}>
        <a href={props.link}>{props.text}</a>
      </li>
    </div>
  );
};

export default NavLink;


// Для того чтобы увидеть, что props.active меняется, зайдём в Dev Tools.

// Мы передали функцию onActiveChange() через props из родительского компонента в дочерний, 
// и теперь в потомке нам доступна функция родителя. Сама функция будет изменять состояние родителя, 
// и переданный от родителя props.active будет автоматически обновляться. 

// Функция handleClick() будет изменять только состояние потомка – active. 