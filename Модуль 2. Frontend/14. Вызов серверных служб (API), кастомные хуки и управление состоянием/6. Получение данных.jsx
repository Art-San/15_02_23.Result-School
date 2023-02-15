// Для получения данных по HTTP используется метод GET.
// Метод GET запрашивает содержимое указанного ресурса в запросе.
// В данном случае ресурс — products:

// GET https://example.com/api/products

// Простым примером GET-запроса может быть обращение к главной странице сайта.
// Когда в браузере мы пытаемся открыть какой-то сайт, то происходит GET-запрос на сервер.

// В GET-запросе можно передавать параметры.
// Для этого после указания ресурса нужно написать вопрос,название параметра,
// равно и значение параметра:

// GET https://example.com/path/resource?count=10

// Если нужно добавить несколько параметров, то можно это сделать через символ &:

// GET https://example.com/path/resource?count=10&param2=value2

// Для практики по получению данных мы используем один
// из старых проектов из конспектов про Пагинацию (начальный проект https://codesandbox.io/s/react-konspekty-4-paginaciya-ssudls?file=/src/App.js)
// Там мы отображали эпизоды мультсериала “Рик и Морти”,
// данные хранились в статическом файле. Сейчас мы сделаем так,
// чтобы получать их по API (ссылка на документацию по фейковому API https://rickandmortyapi.com/documentation/#get-all-episodes). 

// Итоговый код приложения из статьи: https://codesandbox.io/s/react-konspekty-14-axios-post-gotovyy-7fwxou?file=/src/App.js

// Первым делом установим Axios командой:

npm i axios

// Затем создадим внутри проекта папку api, а в ней файл request.js. В файле напишем:

import axios from "axios";

// Создаём экземпляр axios и пишем в нём путь до api
const request = axios.create({
  baseURL: "https://rickandmortyapi.com/api"
});

// Функция для получения всех эпизодов
export const getEpisodes = async () =>
  request.get("/episode").then(({ data }) => data);

//   Теперь перейдём в папку с components, а там в episodesList.jsx:

import React, { useState, useEffect } from "react";
import Episode from "./episode";
import Pagination from "./pagination";
import { paginate } from "../utils/paginate";
// import { episodes } from "../fakeStorage/episodes";
import { getEpisodes } from "../api/request";

const EpisodesList = () => {
  const [episodes, setEpisodes] = useState([]);

  useEffect(() => {
    getEpisodes().then((data) => {
      setEpisodes(data.results);
    });
  }, []);

  const count = episodes.length;
  const pageSize = 8;

  const [currentPage, setCurrentPage] = useState(1);

  const handlePageChange = (pageIndex) => {
    setCurrentPage(pageIndex);
  };

  const pageEpisodes = paginate(episodes, currentPage, pageSize);

  return (
    <div className="container pt-4">
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

export default EpisodesList;

// Так мы получили несколько эпизодов. В документации указано,
// что в ответе сразу приходит не только список эпизодов,
// но и общее количество и количество страниц. Изменим пагинацию так,
// чтобы использовались данные из ответа:

import React, { useState, useEffect } from "react";
import Episode from "./episode";
import Pagination from "./pagination";
import { getEpisodes } from "../api/request";

const initEpisodesData = {
  results: [],
  info: { count: 0 }
};

const EpisodesList = () => {
  const [episodesData, setEpisodes] = useState(initEpisodesData);
  
  const {
    results: episodes,
    info: { count }
  } = episodesData;

  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    getEpisodes().then((data) => {
      setEpisodes(data);
    });
  }, []);

  
  // Укажем фиксированное количество, столько отдаёт API (по документации)
  const pageSize = 20; 

  const handlePageChange = (pageIndex) => {
    setCurrentPage(pageIndex);
  };

  return (
    <div className="container pt-4">
      <div className="row">
        {episodes.map((episode) => (
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

export default EpisodesList;

// Теперь количество страниц отображается соответственно ответу сервера,
// однако переключение страниц не даёт результата. Чтобы менять “страницу” в ответах,
// согласно документации, https://rickandmortyapi.com/documentation/#info-and-pagination
// нужно передавать GET-параметр page=НОМЕР_СТРАНИЦЫ

// Научим наше API принимать номер страницы для параметров:

import axios from "axios";

const request = axios.create({
  baseURL: "https://rickandmortyapi.com/api"
});

export const getEpisodes = async (page) =>
  request
    .get("/episode", {
      params: { page }
    })
    .then(({ data }) => data);


    // Мы добавили вторым параметром в метод axios.get() 
    // объект params и в него передали переменную page. 
    // Axios сам превратит данные в нужный вид (query-параметр, добавит ? и т. д.). 

    // Теперь при переключении страницы мы будем передавать номер текущей страницы в наш запрос:

    import React, { useState, useEffect } from "react";
    import Episode from "./episode";
    import Pagination from "./pagination";
    import { getEpisodes } from "../api/request";
    
    const initEpisodesData = {
      results: [],
      info: { count: 0 }
    };
    
    const EpisodesList = () => {
      const [episodesData, setEpisodes] = useState(initEpisodesData);
    
      const {
        results: episodes,
        info: { count }
      } = episodesData;
    
      const [currentPage, setCurrentPage] = useState(1);
    
      useEffect(() => {
        getEpisodes(currentPage).then((data) => {
          setEpisodes(data);
        });
      }, [currentPage]);
    
      const pageSize = 20;
    
      const handlePageChange = (pageIndex) => {
        setCurrentPage(pageIndex);
      };
    
      return (
        <div className="container pt-4">
          <div className="row">
            {episodes.map((episode) => (
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
    
    export default EpisodesList;

    // Теперь у нас всё работает замечательно, но нет обработки ошибок. Давай добавим:

    const EpisodesList = () => {
	
        // ...
        
          useEffect(() => {
            getEpisodes(currentPage)
              .then((data) => {
                setEpisodes(data);
              })
              .catch((e) => alert(e));
          }, [currentPage]);
        
          // ...
        };
        
        export default EpisodesList;

    // Можно просто добавить catch(). В нём мы получим ошибку 
    // и в данном случае просто выводим пользователю во всплывающем окне. 
    // Также при желании можно сохранить ошибку в состояние 
    // и стилизованно отобразить на странице. 

    // Итоговый проект по получению данных с пагинацией: ссылка. 
    https://codesandbox.io/s/react-konspekty-14-axios-get-paginaciya-k1ixrb?file=/src/App.js