// Мы уже говорили, что внутри JSX мы можем использовать JS-выражения. 
// В том числе мы можем выводить данные из массивов с помощью таких выражений. 
// Выглядят они так:

<div>{array.map(arrayItem => <span>{arrayItem}</span>)}</div>

// Внутри JSX мы перебираем элементы массива и возвращаем нужные нам React-элементы.

// В нашем примере выведем список пунктов меню.

import React, { useState } from "react";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [menuItems, setMenuItems] = useState([
    "Главная",
    "Блог",
    "Контакты",
  ]);

  const handleMenuClick = () => {
    setOpen((prevState) => !prevState);
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
        <ul>
          {menuItems.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

// Ты можешь заметить атрибут key у тега <li>. 
// Этот атрибут (ключ) должен содержать уникальное значение для каждого элемента списка 
// (не для всего приложения, а только для текущего списка). 
// Это нужно React, чтобы оптимизировать отрисовку элементов страницы при изменении массивов. 
// Наличие атрибута key позволяет React'у проводить точечные изменения для изменившегося элемента, 
// а не для всех элементов списка.

// Давай добавим стилей.

import React, { useState } from "react";

const Navbar1 = () => {
  const [open, setOpen] = useState(false);
  const [menuItems, setMenuItems] = useState(["Главная", "Блог", "Контакты"]);

  const handleMenuClick = () => {
    setOpen((prevState) => !prevState);
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
            <li className="list-group-item" key={item}>
              {item}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

// Нужно помнить, что мы можем через useState() менять любые данные, в том числе и содержание массивов. 
// Если бы мы захотели изменить пункты меню при нажатии на кнопку, 
// то нам нужно было бы создать handleChangeMenu(), 
// вызвать там setMenuItems() и передать туда новый массив элементов. Например, вот так:

const handleChangeMenu = () => {
    setMenuItems(['New menu item 1', 'New menu item 2']);
  }

//   Либо добавить к предыдущим, используя callback функцию:

const handleChangeMenu1 = () => {
    setMenuItems((prevItems) => prevItems.push('New menu item 1'));
  }

  