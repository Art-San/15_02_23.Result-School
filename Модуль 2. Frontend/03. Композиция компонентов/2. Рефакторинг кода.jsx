Итоговый код приложения из конспекта (получится после прочтения): ссылка
https://codesandbox.io/s/react-konspekty-3-kompoziciya-komponentov-4ql51j

// Создадим два файла page.jsx и navbar.jsx, page.jsx подключим в app.jsx

import "./App.css";
import Page from "./components/page";

const App = () => {
  return (
    <div className="App">
      <Page />
    </div>
  );
}

export default App;

import React from "react";


// В page.jsx создадим компонент Page.


const Page = () => {
  const logoUrl = "https://picsum.photos/100";
  const siteName = "example.com";

  return (
    <>
      <header>
        <div>{siteName}</div>
        <img src={logoUrl} alt="logo" />
      </header>
      <footer>подвал</footer>
    </>
  );
};

// export default Page;


// В navbar.jsx создадим компонент Navbar.

import React, { useState } from "react";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [menuItems, setMenuItems] = useState(["Главная", "Блог", "Контакты"]);

  const handleMenuClick = () => {
    setOpen((prevState) => !prevState);
  };

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

// export default Navbar;