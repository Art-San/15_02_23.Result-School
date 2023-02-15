// Чтобы отфильтровать наши эпизоды, мы можем использовать фильтрацию 
// в самом компоненте или на стороне API. Сейчас мы посмотрим второй вариант, 
// так как он ближе к реальным условиям. Как правило, если у нас есть фильтрация в API, 
// то этим занимается бэкенд. Пофантазируем и представим, что мы пишем backend на JS:

// Передаём год
export const fetchAll = (year) =>
    new Promise((resolve) => {
        // Фильтруем все эпизоды с нужным годом выпуска
        const filterEpisodes = episodes.filter(({ airDate }) =>
            year ? airDate.slice(-4) === year : true
        );
        setTimeout(() => {
            // Передаём офильтрованный список
            resolve(filterEpisodes);
        }, 500); // Уменьшили время, чтобы было видно быстрее
    });

    // И теперь фильтр будет работать: