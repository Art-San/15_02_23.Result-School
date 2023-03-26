Модуль 2. Frontend 
// 2. Компоненты
2. Первый React-компонент
3. Указание дочерних компонентов
4. Вложенные выражения
5. Установка атрибутов
6. Динамический рендер классов
7. Обработка событий
8. useState()
9. Рендер списка из массива
10. Передача аргументов событий
11. Условный рендеринг

// 3. Композиция компонентов
2. Рефакторинг кода
3. Композиция компонентов
4. Передача данных в компонент
5. Передача контента компонента в сам компонент
6. Debug. Отладка React-приложений
7. Props vs State
8. Создание и обработка событий
9. Обновление состояния
10. Передача атрибутов одной сущности
11. Единый источник истины

// 4. Пагинация
2. Simple React Snippets
3. [КП] Интерфейс компонента
4. [КП] Отображение разбиения на страницы
5. [КП] Обработка изменений страницы
6. [КП] Разбиение данных на страницы
7. [КП] Проверка типов с помощью PropTypes
8. [КП] Настройка ESLint

// 5. Фильтрация
2. [КП] Интерфейс компонента фильтрации
3. [КП] Расширение API
4. [КП] useEffect()
5. [КП] Отображение элементов
6. [КП] Свойства по умолчанию
7. [КП] Обработка выбора
8. [КП] Реализация фильтрации
9. [КП] Сброс фильтрации
10. [КП] Рефакторинг // исправление ошибок 1-общие количечтво пользователей 2- пагинаия (показывает лишние страницы)






<div className="d-flex">
            {professions && (
                <div className="d-flex flex-column flex-shrink-0 p-3">
                    <GroupList
                        selectedItem={selectedProf}
                        items={professions}
                        onItemSelect={handleProfessionSelect}
                    />
                    <button
                        className="btn btn-secondary mt-2"
                        onClick={clearFilter}
                    >
                        {" "}
                        Очистить
                    </button>
                </div>
            )}
            <div className="d-flex flex-column">
                <SearchStatus length={count} />
                {count > 0 && (
                    <table className="table">
                        <thead>
                            <tr>
                                <th scope="col">Имя</th>
                                <th scope="col">Качества</th>
                                <th scope="col">Профессия</th>
                                <th scope="col">Встретился, раз</th>
                                <th scope="col">Оценка</th>
                                <th scope="col">Избранное</th>
                                <th />
                            </tr>
                        </thead>
                        <tbody>
                            {usersCrop.map((user) => (
                                <User {...rest} {...user} key={user._id} />
                            ))}
                        </tbody>
                    </table>
                )}
                <div className="d-flex justify-content-center">
                    <Pagination
                        itemsCount={count}
                        pageSize={pageSize}
                        currentPage={currentPage}
                        onPageChange={handlePageChange}
                    />
                </div>
            </div>
        </div>