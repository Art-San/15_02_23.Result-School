// https://vladilen.ru/pl/teach/control/lesson/view?id=250439361


// Итоговый код приложения из конспекта (получится после прочтения):
// https://codesandbox.io/s/react-konspekty-4-paginaciya-ssudls?file=/src/App.js

// Постраничная навигация или коротко «пагинация» – это способ для получения 
// некоторого количества записей из хранилища для дальнейшего отображения на странице. 
// Ещё под пагинацией подразумевают компонент, который осуществляет переключение между 
// страницами. 

// У нас есть некоторое хранилище с записями, например, база данных на сервере, 
// с которой мы общаемся через API. Когда мы заходим на страницу с определённым номером, 
// то обращаемся к хранилищу и говорим ему отдать записи, начиная с определённой позиции 
// и количество записей. 

// В ответ хранилище отдаёт нам запрошенные записи, если они у него есть. 
// олучив данные из хранилища, мы выводим их на странице и создаём переключатель. 

// Давайте сделаем компонент для пагинации, но сперва сделаем фейковое хранилище и выведем из него записи. 

// Начальная настройка
// Представим, что мы создаём базу эпизодов мультсериала “Рик и Морти” 
// для нашего онлайн-кинотеатра. В папке src нашего проекта создадим папку fakeStorage, 
// а в ней файл episodes.js

// В episodes.js
export const episodes = [
    {
      id: 1,
      name: "Pilot",
      airDate: "December 2, 2013",
      episode: "S01E01",
      created: "2017-11-10T12:56:33.798Z",
    },
    {
      id: 2,
      name: "Lawnmower Dog",
      airDate: "December 9, 2013",
      episode: "S01E02",
      created: "2017-11-10T12:56:33.916Z",
    },
    {
      id: 3,
      name: "Anatomy Park",
      airDate: "December 16, 2013",
      episode: "S01E03",
      created: "2017-11-10T12:56:34.022Z",
    },
    {
      id: 4,
      name: "M. Night Shaym-Aliens!",
      airDate: "January 13, 2014",
      episode: "S01E04",
      created: "2017-11-10T12:56:34.129Z",
    },
    {
      id: 5,
      name: "Meeseeks and Destroy",
      airDate: "January 20, 2014",
      episode: "S01E05",
      created: "2017-11-10T12:56:34.236Z",
    },
    {
      id: 6,
      name: "Rick Potion #9",
      airDate: "January 27, 2014",
      episode: "S01E06",
      created: "2017-11-10T12:56:34.339Z",
    },
    {
      id: 7,
      name: "Raising Gazorpazorp",
      airDate: "March 10, 2014",
      episode: "S01E07",
      created: "2017-11-10T12:56:34.441Z",
    },
    {
      id: 8,
      name: "Rixty Minutes",
      airDate: "March 17, 2014",
      episode: "S01E08",
      url: "https://rickandmortyapi.com/api/episode/8",
      created: "2017-11-10T12:56:34.543Z",
    },
    {
      id: 9,
      name: "Something Ricked This Way Comes",
      airDate: "March 24, 2014",
      episode: "S01E09",
      created: "2017-11-10T12:56:34.645Z",
    },
    {
      id: 10,
      name: "Close Rick-counters of the Rick Kind",
      airDate: "April 7, 2014",
      episode: "S01E10",
      created: "2017-11-10T12:56:34.747Z",
    },
    {
      id: 11,
      name: "Ricksy Business",
      airDate: "April 14, 2014",
      episode: "S01E11",
      created: "2017-11-10T12:56:34.850Z",
    },
    {
      id: 12,
      name: "A Rickle in Time",
      airDate: "July 26, 2015",
      episode: "S02E01",
      created: "2017-11-10T12:56:34.953Z",
    },
    {
      id: 13,
      name: "Mortynight Run",
      airDate: "August 2, 2015",
      episode: "S02E02",
      created: "2017-11-10T12:56:35.158Z",
    },
    {
      id: 15,
      name: "Total Rickall",
      airDate: "August 16, 2015",
      episode: "S02E04",
      created: "2017-11-10T12:56:35.261Z",
    },
    {
      id: 16,
      name: "Get Schwifty",
      airDate: "August 23, 2015",
      episode: "S02E05",
      created: "2017-11-10T12:56:35.364Z",
    },
    {
      id: 17,
      name: "The Ricks Must Be Crazy",
      airDate: "August 30, 2015",
      episode: "S02E06",
      created: "2017-11-10T12:56:35.467Z",
    },
    {
      id: 18,
      name: "Big Trouble in Little Sanchez",
      airDate: "September 13, 2015",
      episode: "S02E07",
      created: "2017-11-10T12:56:35.569Z",
    },
    {
      id: 19,
      name: "Interdimensional Cable 2: Tempting Fate",
      airDate: "September 20, 2015",
      episode: "S02E08",
      created: "2017-11-10T12:56:35.669Z",
    },
    {
      id: 20,
      name: "Look Who's Purging Now",
      airDate: "September 27, 2015",
      episode: "S02E09",
      created: "2017-11-10T12:56:35.772Z",
    },
  ];

//   В папке components создадим файл episodesList.jsx, а в нём компонент EpisodesList. 


import React from "react";

const EpisodesList = () => {
  return <div>EpisodesList</div>;
};

export default EpisodesList;

// И выведем в app.jsx:

import EpisodesList from "./components/episodesList";

function App() {
  return (
    <div className="App">
      <EpisodesList />
    </div>
  );
}

// Далее выведем наши эпизоды :

import React from "react";
import { episodes } from "../fakeStorage/episode"; // Добивим импорт

const EpisodesList = () => {
  return (
    <div className="container">
      <div className="row">
        {/* Добавим вывод эпизодов */}
        {episodes.map((episode) => (
          <div
            key={episode.id}
            style={{ height: "200px" }}
            className="col-3"
          >
            {episode.name}
          </div>
        ))}
      </div>
    </div>
  );
};

export default EpisodesList;

// Теперь для красоты уберём карточку эпизода в отдельный компонент Episode:


import React from "react";

const Episode = (props) => {
  const { name, airDate, episode } = props;
  return (
    <div className="col-4 mb-2">
      <div className="card" style={{ height: "100%" }}>
        <div className="card-body">
          <h5 className="card-title">
            {name} {episode}
          </h5>
          <h6 className="card-subtitle mb-2 text-muted">
            {airDate}
          </h6>
        </div>
      </div>
    </div>
  );
};

export default Episode;

// И используем Episode в EpisodesList:

import React from "react";
import { episodes } from "../fakeStorage/episode";
import Episode from "./episode"; // Импорт компонента 

const EpisodesList = () => {
  return (
    <div className="container">
      <div className="row">
        {episodes.map((episode) => (
          <Episode key={episode.id} {...episode} />
        ))}
      </div>
    </div>
  );
};

export default EpisodesList;

// Сейчас ты должен видеть на экране вывод нескольких карточек с эпизодами:

// Первоначальная настройка закончена. Перейдём, собственно, к постраничной навигации.