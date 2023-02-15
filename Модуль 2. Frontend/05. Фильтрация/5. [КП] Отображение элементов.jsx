// Давай сразу типизируем наши props:

import React from "react";
import PropTypes from "prop-types";

const GroupList = ({ items, filter, onChangeFilter }) => {
    // ...
};

GroupList.propTypes = {
    // массив строк
    items: PropTypes.arrayOf(PropsType.string).isRequired,
    // строка
    filter: PropTypes.string, 
    // функция
    onChangeFilter: PropTypes.func.isRequired 
};

// Обрати внимание, что для типизации items мы воспользовались arrayOf, 
// чтобы сказать, что это именно массив строк. Так можно поступить не только 
// с массивами или строками. PropTypes даёт много возможностей. Доходчиво они объясняются здесь.
// https://ru.reactjs.org/docs/typechecking-with-proptypes.html#proptypes

// Теперь воспользуемся нашими пропсами, чтобы заставить компонент работать:
const GroupList = ({ items, filter }) => {
    return (
        <div className="list-group">
            {items.map((item) => (
                <button
                    className={
                        "list-group-item list-group-item-action" +
                        (item === filter ? " active" : "")
                    }
                    key={item}
                >
                    {item}
                </button>
            ))}
        </div>
    );
};

// Ещё заменим количество элементов на странице (const pageSize = 6). 
// Теперь приложение выглядит так:

// Давай представим, что мы хотим сделать переиспользуемый компонент фильтра. 
// Немного изменим наше API так, чтобы у нас отдавался массив объектов (вместо массива строк). 
// В возвращаемом объекте будет id - год, а поле text - год и сезон:

export const fetchYears = () =>
    new Promise((resolve) => {
        const years = episodes.map(
            // Возьмём последние 4 символа, например из "September 27, 2015" -> получим "2015"
            ({ airDate }) => airDate.slice(-4)
        );

        const uniqYears = [...new Set(years)];

        const seasonsByYear = {
            2013: "S01",
            2014: "S01",
            2015: "S02"
        };

        const filters = uniqYears.map((year) => ({
            id: year,
            text: `${year} (${seasonsByYear[year]})`
        }));

        setTimeout(() => {
            resolve(filters);
        }, 2000);
    });

    // Тогда нам нужно изменить GroupList:

    // ...

return (
    <div className="list-group">
        {items.map((item) => (
            <button
                className={
                    "list-group-item list-group-item-action" +
                    (item.id === filter ? " active" : "")
                }
                key={item.id}
            >
                {item.text}
            </button>
        ))}
    </div>
);
};

GroupList.propTypes = {
items: PropsType.array.isRequired,
filter: PropsType.string,
onChangeFilter: PropsType.func.isRequired
};

// Так как мы делаем переиспользуемый компонент, нужно понимать, 
// что не все API будут возвращать такую структуру объекта как у нас сейчас. 
// Название полей могут отличаться от наших.

// Чтобы не зависеть от структуры объекта, добавим два новых props: 

// valueProperty - будет указывать на значение фильтра
// contentPropery - будет указывать на то, что нужно отобразить в фильтре

GroupList.propTypes = {
    items: PropsType.array.isRequired,
    filter: PropsType.string,
    onChangeFilter: PropsType.func.isRequired,
    valueProperty: PropsType.string.isRequired,
    contentProperty: PropsType.string.isRequired
};

// Добавим новый тип. И теперь наш фильтр ожидает, 
// что ему будут переданы два дополнительных props, 
// которые являются ключами объекта item:

const GroupList = ({
    items,
    filter,
    valueProperty,
    contentProperty
}) => {
    return (
        <ul className="list-group">
            {items.map((item) => (
                <li
                    className={
                        "list-group-item" +
                        (item[valueProperty] === filter ? " active" : "")
                    }
                    key={item[valueProperty]}
                >
                    {item[contentProperty]}
                </li>
            ))}
        </ul>
    );
};



// В EpisodesList
<GroupList
    items={years}
    filter={filter}
    onChangeFilter={handleFilterChange}
    valueProperty="id"
    contentProperty="text"
/>