// Допустим, мы хотим обрабатывать каким-то образом нажатие на пункт меню. 
// Давай добавим обработчики.

// Но пока мы не получаем "идентификатор" пункта меню.

import React, { useState } from "react";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [menuItems, setMenuItems] = useState(["Главная", "Блог", "Контакты"]);

  const handleMenuClick = () => {
    setOpen((prevState) => !prevState);
  };

  // Обработчик нажатия
  const handleItemClick = () => {
    console.log("click");
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
            <li
              className="list-group-item"
              key={item}
              onClick={handleItemClick} 
            >
              {item}
            </li>
          ))}
        </ul>
      )} 
    </div>
  );
};

// Давай модифицируем handleItemClick() и его вызов, чтобы получать "идентификатор", 
// которым в нашем примере будет текст пункта меню.

import React, { useState } from "react";

const Navbar1 = () => {
  const [open, setOpen] = useState(false);
  const [menuItems, setMenuItems] = useState(["Главная", "Блог", "Контакты"]);

  const handleMenuClick = () => {
    setOpen((prevState) => !prevState);
  };

  // Добавили id
  const handleItemClick = (id) => {
    console.log(id);
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
          {/* Передали анонимную функцию в которой вызываем handleItemClick(item) */}
          {menuItems.map((item) => (
            <li
              className="list-group-item"
              key={item}
              onClick={() => handleItemClick(item)}
            >
              {item}
            </li>
          ))}
        </ul>
      )}
    </div> 
  );
};

// В реальных условиях handleItemClick() мог бы вызывать функцию аналитики или менял адрес страницы.