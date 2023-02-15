// Мы уже реализовали функцию handlePageChange(), 
// которая передаётся в компонент в атрибуте onPageChange. 
// Вызовем её так, чтобы передать текущую страницу. 

const Pagination = (props) => {
    const { itemsCount, pageSize, onPageChange } = props;
    const pageCount = Math.ceil(itemsCount / pageSize);
    if (pageCount === 1) return null;
    const pages = _.range(1, pageCount + 1);
    return (
      <nav>
        <ul className="pagination">
          {pages.map((page) => (
            <li key={page} className="page-item">
              {/* Поменяли на кнопку, чтобы не было ошибок */}
              <button
                className="page-link"
                onClick={() => onPageChange(page)} 
              >
                {/*  Передаём callback в котором вызываем onPageChange(page) */}
                {page}
              </button>
            </li>
          ))}
        </ul>
      </nav>
    );
  };

//   Теперь при нажатии на кнопку мы можем видеть номер страницы:

// Сейчас для отслеживания текущей страницы в EpisodesList добавим состояние 
// и будем менять его при переключении страниц. 



const EpisodesList = () => {
    const count = episodes.length;
    const pageSize = 8;
  
    const [currentPage, setCurrentPage] = useState(1);
  
    const handlePageChange = (pageIndex) => {
      setCurrentPage(pageIndex);
    };
  
    return (
      <div className="container">
        <div className="row">
          {episodes.map((episode) => (
            <Episode key={episode.id} {...episode} />
          ))}
        </div>
        <div className="row">
          {/* Передадим в компонент пагинации */}
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

//   И давай отобразим в пагинации с помощью стилей текущую страницу: 


const Pagination = (props) => {
    const { itemsCount, pageSize, onPageChange, currentPage } = props;
    const pageCount = Math.ceil(itemsCount / pageSize);
    if (pageCount === 1) return null;
    const pages = _.range(1, pageCount + 1);
    return (
      <nav>
        <ul className="pagination">
          {pages.map((page) => (
            <li
              key={page}
              className={"page-item" + (currentPage === page ? " active" : "")}
            >
              <button className="page-link" onClick={() => onPageChange(page)}>
                {page}
              </button>
            </li>
          ))}
        </ul>
      </nav>
    );
  };

//   Сохраним и посмотрим результат:

// При переключении активная страница будет синей.


