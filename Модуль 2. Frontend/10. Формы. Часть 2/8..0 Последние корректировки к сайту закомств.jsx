// Также обратите внимание!

// Для того, чтобы компоненты selectField и multiSelectField сделать 
// полностью переиспользуемыми, мы рекомендуем перенести преобразование 
// данных из этих компонентов в registerForm. Для этого:

// 1. В компонентах selectField и multiSelectField заменяем преобразование 
// в массив optionsArray на следующее:

const optionsArray =
    !Array.isArray(options) && typeof options === "object"
        ? Object.values(options)
        : options;

// Теперь мы не привязываемся к конкретным полям в переиспользуемом компоненте.


// В selectField в шаблоне также обновляем вывод элементов:

{optionsArray.length > 0 &&
    optionsArray.map((option) => (
        <option value={option.value} key={option.value}>
            {option.label}
        </option>
    ))}

// 2.В компоненте registerForm находим место запроса professions 
// и qualities из API, и после успешного получения 
// в методе then() делаем преобразование. В итоге получится так:

useEffect(() => {
    api.professions.fetchAll().then((data) => {
        const professionsList = Object.keys(data).map((professionName) => ({
            label: data[professionName].name,
            value: data[professionName]._id
        }));
        setProfession(professionsList);
    });
    api.qualities.fetchAll().then((data) => {
        const qualitiesList = Object.keys(data).map((optionName) => ({
            label: data[optionName].name,
            value: data[optionName]._id,
            color: data[optionName].color
        }));
        setQualities(qualitiesList);
    });
}, []);


// Также в useState() с qualities начальным параметром передаем пустой массив:

const [qualities, setQualities] = useState([]);


// Теперь в компоненты селектов будут приходить сразу массивы. 
// Но теперь получается, что professions и qualities в API имеют такую структуру:

const qualities = {
    tedious: {
        _id: "67rdca3eeb7f6fgeed471198",
        name: "Нудила",
        color: "primary"
    },
    ...
};
const professionsObject = {
    doctor: { 
        _id: "67rdca3eeb7f6fgeed471818", 
        name: "Доктор" 
    },
    ...
};


// А после отправки формы в объекте data данные 
// о профессии и качествах будут иметь вид:


{
    profession: "67rdca3eeb7f6fgeed471820",
    qualities: [
        { 
            value: "67rdca3eeb7f6fgeed471100", 
            label: "Странный", 
            color: "secondary"
        },
        ...
    ],
    ...
}


// Как мы видим, у объекта качества названия ключей отличаются 
// от тех, что в API (name→label, _id→value). 
// Также profession содержит в себе строку вместо объекта.


// В дальнейших уроках мы вернемся к этому вопросу и еще пересмотрим 
// структуру отправляемых данных. Но сейчас мы их согласуем 
// (то есть сделаем так, чтобы после отправки в объекте была такая же структура, 
//     как у первоначальных данных). Это также поможет вам 
//     в реализации домашнего задания. Для этого:

// 1. В registerForm в handleSubmit() нам необходимо преобразовать данные. 
// Функция получится такая:


const handleSubmit = (e) => {
    e.preventDefault();
    const isValid = validate();
    if (!isValid) return;
    const { profession, qualities } = data;
    console.log({
        ...data,
        profession: getProfessionById(profession),
        qualities: getQualities(qualities)
    });
};

// Таким образом мы получим новый объект. 
// В дальнейшем его нужно будет выводить не в консоль, 
// а в функцию регистрации (об этом в следующих уроках).

2. Создаем функции getProfessionById() и getQualities()

const getProfessionById = (id) => {
    for (const prof of professions) {
        if (prof.value === id) {
            return { _id: prof.value, name: prof.label };
        }
    }
};
const getQualities = (elements) => {
    const qualitiesArray = [];
    for (const elem of elements) {
        for (const quality in qualities) {
            if (elem.value === qualities[quality].value) {
                qualitiesArray.push({
                    _id: qualities[quality].value,
                    name: qualities[quality].label,
                    color: qualities[quality].color
                });
            }
        }
    }
    return qualitiesArray;
};

// 1. Готово! Объект имеет первоначальную структуру.

// В исходных файлах, приложенных к данному уроку, вы сможете найти финальную версию кода.