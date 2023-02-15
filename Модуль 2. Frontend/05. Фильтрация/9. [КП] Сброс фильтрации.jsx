// Чтобы отобразить все элементы, есть два распространённых способа: 

// Создается дополнительный фильтр (кнопка “все элементы”), 
// и при нажатии на него происходит сброс.

// Создаётся отдельная кнопка для сброса всех фильтров, сортировки и т. д.

// Начнём с первого варианта. 
// Для его реализации достаточно дополнить список вариантов фильтров при их запросе:

// В EpisodesList
useEffect(() => {
    fetchYears().then((response) =>
        setYears([ ...response, { text: "Все эпизоды" } ])
    );
}, []);

// Таким образом, когда мы будем нажимать кнопку, 
// фильтр будет установлен в значение undefined. 
// Так как свойства id нет, в запросе к API передастся тоже undefined, 
// API вернёт полный список: 

// Чтобы не было ошибок key, в такой реализации нужно его заменить:

const GroupList = ({
    items,
    filter,
    onChangeFilter,
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
                    key={item[contentProperty]}
                    onClick={() => onChangeFilter(item[valueProperty])}
                >
                    {item[contentProperty]}
                </li>
            ))}
        </ul>
    );
};

// Перейдём ко второму способу, который более изящный, 
// удобный и с более понятной очевидной логикой. 

// Создадим кнопку и функцию для установки фильтра в начальное состояние:

const EpisodesList = () => {
    const [episodes, setEpisodes] = useState([]);
    const [years, setYears] = useState([]);

    const [filter, setFilter] = useState();

    const count = episodes.length;
    const pageSize = 6;

    const [currentPage, setCurrentPage] = useState(1);

    const handlePageChange = (pageIndex) => {
        setCurrentPage(pageIndex);
    };

    const pageEpisodes = paginate(episodes, currentPage, pageSize);

    const getEpisodes = (year) => {
        fetchAll(year).then((response) => setEpisodes(response));
        setCurrentPage(1);
    };

    useEffect(() => {
        getEpisodes(filter);
    }, [filter]);

    useEffect(() => {
        fetchYears().then((response) => setYears(response));
    }, []);

    const handleFilterChange = (filter) => {
        setFilter(filter);
    };

    const handleReset = () => {
        setFilter(); // Ничего не устанавливаем (undefined)
    };

    return (
        <div className="container pt-2">
            <div className="row">
                <div className="col-4">
                    {
                        // Проверить есть ли фильтры
                        !!years.length && (
                            <>
                                <GroupList
                                    items={years}
                                    filter={filter}
                                    onChangeFilter={handleFilterChange}
                                    valueProperty="id"
                                    contentProperty="text"
                                />
                                <hr />
                                <div className="d-grid">
                                    <button
                                        onClick={handleReset}
                                        className="btn btn-m btn-primary"
                                    >
                                        Очистить
                                    </button>
                                </div>
                            </>
                    )}
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

// Мы добавили на страницу кнопку и функцию для неё. 
// Кроме того, добавили проверку на наличие активных фильтров 
// (показываем, если только есть список годов выпуска !!years.length), 
// чтобы кнопка и GroupList отобразились только после загрузки фильтра. 
// Вот такой компонент получим:


// Данный способ в целом предпочтительнее. Код становится более очевидным, 
// а также в функцию handleReset() можно добавить другие изменения состояния (например, сброс сортировки). 

// Выводы

// В данном уроке мы научились работать с фильтрацией, узнали как работает хук useEffect() 
// и, что он позволяет делать. 

// При разработке компонентов их props нужно типизировать и, при необходимости, указывать defaultProps.

// Нужно отметить, что при изменении значения фильтра нужно изменять значение текущей страницы для пагинации, 
// чтобы избежать неверной работы приложения. 

// Полезные ссылки

// State and Lifecycle:
// https://reactjs.org/docs/state-and-lifecycle.html

// PropTypes | Пример использования возможных валидаторов: https://ru.reactjs.org/docs/typechecking-with-proptypes.html#proptypes
// 

// Set: https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Set