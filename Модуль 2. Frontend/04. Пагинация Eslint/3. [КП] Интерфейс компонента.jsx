// Создадим в папке components файл pagination.jsx с одноимённым компонентом:

import React from "react";

const Pagination = () => {
  return null;
};

export default Pagination;

// И подключим его в EpisodesList:


const EpisodesList = () => {
    return (
      <div className="container">
        <div className="row">
          {episodes.map((episode) => (
            <Episode key={episode.id} {...episode} />
          ))}
        </div>
        <div className="row">
          <Pagination /> {/* Тут вызов компонента пагинации */}
        </div>
      </div>
    );
  };


//   Когда мы создаём переиспользуемые компоненты нам нужно подумать об интерфейсе 
//   нашего компонента. Т.е. о тех параметрах, которые нужны ему, чтобы отображаться, 
//   какие данные мы ему передадим, какие функции и т.д. 


// Одним из способов для реализации таких компонентов является их использование 
// до реализации. Поэтому мы использовали Pagination до того, как реализовали.


// Пойдём дальше. Мы понимаем, что компонент Pagination должен состоять 
// из списка страниц (1, 2, 3 и т.д.). Нам нужно каким-то образом получить этот список. 
// Чтобы его получить, нам нужно разделить количество эпизодов на количество записей, 
// которые мы хотим видеть на странице. Создадим константы для этих переменных 
// и передадим в компонент: 

import React from "react";
import { episodes } from "../fakeStorage/episode";
import Episode from "./episode";

const EpisodesList = () => {
  const count = episodes.length; // количество записей
  const pageSize = 8; // количество записей на странице, которое хотим выводить

  return (
    <div className="container">
      <div className="row">
        {episodes.map((episode) => (
          <Episode key={episode.id} {...episode} />
        ))}
      </div>
      <div className="row">
        <Pagination
          itemsCount={count}
          pageSize={pageSize}
        />
      </div>
    </div>
  );
};


// И ещё нам нужна функция, которая будет отлавливать нажатие для переключения страниц:

const EpisodesList = () => {
    const count = episodes.length;
    const pageSize = 8;
    
    // Принимает pageIndex 
    const handlePageChange = (pageIndex) => {
      console.log(pageIndex);
    }
  
    return (
      <div className="container">
        <div className="row">
          {episodes.map((episode) => (
            <Episode key={episode.id} {...episode} />
          ))}
        </div>
        <div className="row">
          <Pagination
            itemsCount={count}
            pageSize={pageSize}
            onPageChange={handlePageChange}
          />
        </div>
      </div>
    );
  };