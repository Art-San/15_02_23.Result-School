// Деструктуризируем onChangeFilter() из props и вызовем его при нажатии:

const GroupList = ({
    items,
    filter,
    onChangeFilter,
    valueProperty,
    contentProperty
}) => {
    return (
        <div className="list-group">
            {items.map((item) => (
                <button
                    className={
                        "list-group-item list-group-item-action" +
                        (item[valueProperty] === filter ? " active" : "")
                    }
                    key={item[valueProperty]}
                    onClick={() => onChangeFilter(item[valueProperty])}
                >
                    {item[contentProperty]}
                </button>
            ))}
        </div>
    );
};

// Ранее мы уже создали функцию handleFilterChange():

// В EpisodesList
const handleFilterChange = (filter) => {
    setFilter(filter);
};

// Теперь нам остается только реализовать логику для самой фильтрации. 