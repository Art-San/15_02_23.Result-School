// Теперь в handleItemClick() компонента Navbar передается id. 
// Здесь нам нужно реализовать переключение active.

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
  const handleItemClick = (id) => {
    // По клику пересоздаём массив, через метод map
    const newMenuItems = menuItems.map((item) => {
      if (item.id === id) {
        /*
        *  Если id равен id элемента, то в объекте 
        *  меняем поле active, а остальное оставляем неизменным.
        *  spread-оператор в начале, 
        *  чтобы не перезаписать вычисленное значение.
        */
        return { ...item, active: !item.active };
      }
      return item; // Если не равен то не изменяем
    });
    // Устанавливаем новое состояние
    setMenuItems(newMenuItems);
  };

  return (
    <div>
      <button
        className="btn btn-sm btn-primary"
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