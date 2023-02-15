// Условный рендеринг – это рендеринг компонента или элемента в зависимости от условия.

// Существует несколько видов того, как мы можем реализовать условный рендеринг. 
// Мы уже написали один пример условного рендеринга. 
// Давай вынесем отрисовку пунктов меню в отдельный метод, чтобы разобраться.

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

  // Создание пунктов меню
  const renderMenu = () => {
    return (
      // Если переменна open равна true то мы выводим пункты меню, иначе мы не выводим ничего.
      open && (
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
      )
    );
  };

  return (
    <div>
      <button
        className="btn btn-sm btm-primary"
        onClick={handleMenuClick}
      >
        меню
      </button>
      {renderMenu()}
    </div>
  );
};

// Можно этот пример записать и в тернарном виде. 
// В таком случае, если условие не выполняется, 
// мы вернём null или можем вернуть другой элемент (например стрелку).

const renderMenu = () => {
    return open ? (
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
    ) : null;
  };



//   Чтобы закрепить полученные знания, сделаем ещё один пример, 
//   где будем выводить стрелочку вверх или вниз внутри кнопки ”меню” в зависимости от переменной open.

import React, { useState } from "react";

const Navbar1 = () => {
  const [open, setOpen] = useState(false);
  const [menuItems, setMenuItems] = useState(["Главная", "Блог", "Контакты"]);

  const handleMenuClick = () => { /* ... */ };
  const handleItemClick = (id) => { /* ... */ };
  const renderMenu = () => { /* ... */ };

  // Стрелочка вверх
  const arrowTop = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      fill="currentColor"
      class="bi bi-arrow-up"
      viewBox="0 0 16 16"
    >
      <path
        fill-rule="evenodd"
        d="M8 15a.5.5 0 0 0 .5-.5V2.707l3.146 3.147a.5.5 0 0 0 .708-.708l-4-4a.5.5 0 0 0-.708 0l-4 4a.5.5 0 1 0 .708.708L7.5 2.707V14.5a.5.5 0 0 0 .5.5z"
     />
    </svg>
  );

  // Стрелочка вниз
  const arrowDown = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      fill="currentColor"
      class="bi bi-arrow-down"
      viewBox="0 0 16 16"
    >
      <path
        fill-rule="evenodd"
        d="M8 1a.5.5 0 0 1 .5.5v11.793l3.146-3.147a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 .708-.708L7.5 13.293V1.5A.5.5 0 0 1 8 1z"
      />
    </svg>
  );

  // Функция для отображения стрелочек
  const renderArrow = () => {
    return open ? arrowDown : arrowTop;
  };

  return (
    <div>
      <button
        className="btn btn-sm btm-primary"
        onClick={handleMenuClick}
      >
        {/*вызываем renderArrow() внутри кнопки*/}
        меню {renderArrow()}
      </button>
      {renderMenu()}
    </div>
  );
};

// Кроме отдельных частей мы можем использовать условный рендеринг для всего компонента. 
// Опять представим, что мы делаем шаблон и ещё наш пользователь не указал пункты меню. 
// В этом случае мы выведем ему текст.

import React, { useState } from "react";

const Navbar2 = () => {
  const [open, setOpen] = useState(false);
  const [menuItems, setMenuItems] = useState(["Главная", "Блог", "Контакты"]);

  const handleMenuClick = () => { /* ... */ };
  const handleItemClick = (id) => { /* ... */ };
  const renderMenu = () => { /* ... */ };

  const arrowTop = <svg>{/* ... */}</svg>;
  const arrowDown = <svg>{/* ... */}</svg>;

  const renderArrow = () => { /* ... */ };


  // Проверяем количество пунктов меню, и если равно 0, то выводим текст
  if (menuItems.length === 0) {
    return "Not menu items";
  }

  // В остальных случаях выводим основное содержимое
  return (
    <div>
      <button
        className="btn btn-sm btm-primary"
        onClick={handleMenuClick}
      >
        меню {renderArrow()}
      </button>
      {renderMenu()}
    </div>
  );
};

// Как раз такие подходы к реализации рендеринга называются условным рендерингом.

// В этом уроке мы с разобрали фундаментальные концепции, по которым работает React. 
// В дальнейшем мы постоянно будем их использовать, поэтому важно понять и осознать данный материал. 