Цель урока:
1. Узнать, как разработать фильтр

Содержание урока:

1. Разработка компонента фильтрации
2. Рефакторинг

Дополнительные материалы:
1. Flex: ссылка
2. Flexbox: ссылка

Код:
1. Исходный код: ссылка
// https://drive.google.com/drive/folders/1hb6hTn2BLlOODckJh-gLuWplh4p3qmxl?usp=sharing
2. Итоговый код приложения из конспекта (получится после прочтения): ссылка
https://codesandbox.io/s/react-konspekty-5-filtraciya-g92rm5
// В этой статье мы будем фильтровать наши эпизоды по году выпуска.

// Для этого нам нужно сперва получить список годов выпуска эпизодов 
// и сделать фейковое API для получения фильтрованного списка эпизодов, 
// который мы создали в конспекте прошлого урока.

// Но сперва мы сделаем компонент, который будет фильтровать наш список. 
// Создадим компонент GroupList. Возьмём для этого вёрстку из Bootstrap:

// https://getbootstrap.com/docs/5.0/components/list-group/#links-and-buttons

import React from "react";

const GroupList = () => {
    return (
        <div className="list-group">
            <button className="list-group-item list-group-item-action active">
                An active item
            </button>
            <button className="list-group-item list-group-item-action">
                A second item
            </button>
            <button className="list-group-item list-group-item-action">
                A third item
            </button>
            <button className="list-group-item list-group-item-action">
                A fourth item
            </button>
            <button className="list-group-item list-group-item-action">
                And a fifth one
            </button>
        </div>
    );
};

export default GroupList;

// И в EpisodesList выведем наш фильтр, слегка изменив вёрстку:

// ...
import GroupList from "./groupList";

const EpisodesList = () => {
    const count = episodes.length;
    const pageSize = 8;

    const [currentPage, setCurrentPage] = useState(1);

    const handlePageChange = (pageIndex) => {
        setCurrentPage(pageIndex);
    };

    const pageEpisodes = paginate(episodes, currentPage, pageSize);

    return (
        <div className="container pt-2">
            <div className="row">
                <div className="col-4">
                    <GroupList />
                </div>
                <div className="col-8">
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
            </div>
        </div>
    );
};

export default EpisodesList;

// И для красоты слегка изменим стили у компонента Episode:

const Episode = (props) => {
    const { name, episode } = props;
    return (
        <div className="col-4 mb-2">
            <div className="card" style={{ height: "100%" }}>
                <div className="card-body">
                    {/* Добавился класс fs-6 */}
                    <h5 className="card-title fs-6"> 
                        {name} {episode}
                    </h5>
                    <h6 className="card-subtitle mb-2 text-muted small">
                        {props.airDate}
                    </h6>
                </div>
            </div>
        </div>
    );
};

// Теперь мы увидим следующее:

// Теперь пора подумать об интерфейсе нашего нового компонента. 
// Так как мы будем фильтровать по году выпуска, то нужно его передать. 
// Однако у нас нет такого поля в данных эпизода, но у нас есть свойство airDate. 
// Мы можем написать фейковое API, которые вернёт нам список годов выпуска. 