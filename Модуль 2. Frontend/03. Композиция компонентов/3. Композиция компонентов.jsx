// Композиция компонентов, по сути – способ использования компонентов
//  как частей внутри друг друга и внутри нашего приложения. 
//  В React-приложениях компоненты используются внутри друг друга, 
//  в одном может использоваться несколько других. 
//  Подобно конструктору lego мы составляем наше приложение из компонентов словно из деталей 
//  и можем менять их последовательность как нам нужно. 


// Для демонстрации этого рассмотрим пару примеров.

// Импортируем в page.jsx компонент Navbar и используем его.


import React from "react";
import Navbar from "./navbar";

const Page = () => {
  const logoUrl = "https://picsum.photos/100";
  const siteName = "example.com";

  return (
    <>
      <header>
        <div>{siteName}</div>{" "}
        <img src={logoUrl} alt="logo" />
         <Navbar />
      </header>
      <footer>подвал</footer>
    </>
  );
};

export default Page;

// Таким образом, мы видим, что компоненты могут быть частями друг друга 
// и их можно создавать для разделения вёрстки и логики.


// Перейдём ко второму примеру. 
// Сперва создадим файл с новым компонентом NavLink 
// (файл navLink.jsx именование в lowerCamelCase).

// в navLink.jsx
import React from "react";

const NavLink = () => {
  return <li>Some text</li>;
};

// export default NavLink;

// Подключим его в Navbar и используем как элемент меню.

// в navbar.jsx
import React, { useState } from "react";
import NavLink from "./navLink";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [menuItems, setMenuItems] = useState(["Главная", "Блог", "Контакты"]);

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
					
{/* Не забываем про key */}
          {menuItems.map((item) => (
            <NavLink key={item} /> 
          ))}
        </ul>
      )}
    </div>
  );
};

// export default Navbar;

// Сейчас, открыв меню, увидим 3 одинаковых компонента.

// Создавать для каждого элемента отдельный компонент с различным содержимым нелогично 
// и неудобно, но мы хотим убрать логику и часть кода в отдельный компонент. 
// Что делать? Для решения нашей задачи воспользуемся передачей данных в компонент.