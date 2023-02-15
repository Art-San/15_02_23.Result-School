// Для того чтобы отображать только часть записей, нам нужно при 
// переключении между страницами получать новый массив из массива эпизодов. 
// Специальная функция будет выбирать нам эпизоды, начиная с индекса равного:

const index = (page - 1) * pageSize
// page = 1 -> index = 0
// page = 2 -> index = pageSize
// page = 3 -> index = 2 * pageSize
// ...

// Создадим переменные в EpisodesList и функцию для создания нового массив:

const EpisodesList = () => {
    const count = episodes.length;
    const pageSize = 8;
  
    const [currentPage, setCurrentPage] = useState(1);
  
    const handlePageChange = (pageIndex) => {
      setCurrentPage(pageIndex);
    };
  
    const paginate = (items, pageNumber, pageSize) => {
      const startIndex = (pageNumber - 1) * pageSize;
      return [...items].splice(startIndex, pageSize);
    };

    const pageEpisodes = paginate(episodes, currentPage, pageSize);
  
    return (
      <div className="container">
        <div className="row">
          {pageEpisodes.map((episode) => (
            <Episode key={episode.id} {...episode} />
          ))}
        </div>
        <div className="row">
          <Pagination
            itemsCount={count}
            pageSize={pageSize}
            currentPage={currentPage}
            onPageChange={handlePageChange}
          />
        </div>
      </div>
    );
  };


//   Мы создали функцию paginate(), в ней нам важно создать новый массив, 
//   а не менять существующий (чтобы не удалить эпизоды). 
//   Помните, что метод splice() изменяет текущий массив, 
//   поэтому мы сперва создали новый через Spread оператор ([...items]). 

// Теперь мы можем вынести функцию paginate(), чтобы сделать код чище, 
// а ещё потому, что мы можем использовать её не только внутри компонента EpisodesList, 
// но и в других. Создадим в папку src папку utils и в ней файл paginate.js:

// в paginate.js
export const paginate = (items, pageNumber, pageSize) => {
    const startIndex = (pageNumber - 1) * pageSize;
    return [...items].splice(startIndex, pageSize);
  };


  // episodesList.jsx

import React, { useState } from "react";
// ...
import { paginate } from "../utils/paginate";

const EpisodesList = () => {
  // ...
};

export default EpisodesList;