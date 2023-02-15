// Мы добавили гибкости компоненту, но обязали себя каждый раз 
// указывать дополнительные параметры. Часто в проектах мы сами создаём 
// какую-либо структуру данных и знаем, что в большинстве случаев 
// будем указывать одни и те же названия. 

// Чтобы не указывать каждый раз дополнительные пропсы, 
// мы можем указать параметры по умолчанию, которые будут переданы компоненту, 
// если они не были переданы из родителя. Добавим ещё одно свойство в компонент defaultProps:

GroupList.defaultProps = {
    valueProperty: "id",
    contentProperty: "text"
};

GroupList.propTypes = {
    items: PropsType.array.isRequired,
    filter: PropsType.string,
    onChangeFilter: PropsType.func.isRequired,
    valueProperty: PropsType.string, // Поля больше не обязательны
    contentProperty: PropsType.string
};

// И уберём их из вызова GroupList, чтобы проверить корректность работы:

<GroupList
    items={years}
    filter={filter}
    onChangeFilter={handleFilterChange}
/>

// Обязательно при разработке обращай внимание на правильность написания defaultProps. 
// Опечатки в коде могут сулить часы дебага из-за неочевидности проблемы. 