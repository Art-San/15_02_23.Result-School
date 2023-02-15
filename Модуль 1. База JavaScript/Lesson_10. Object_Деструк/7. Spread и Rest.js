const citiesRussia = ['Москва', 'Санкт-Петербург', 'Казань', 'Новосибироск'];
const citiesEurope = ['Берлин', 'Прага', 'Париж'];

// console.log('...citiesRussia', ...citiesRussia);
// console.log('citiesEurope', citiesEurope);

const citiesRussiaWithPopulation = {
    Москва: 20,
    СанктПерербург: 8,
    Казань: 5,
    Новосибирск: 3
}


const citiesEuropeWithPopulation = {
    Москва: 26,
    Берлин: 10,
    Прага: 3,
    Париж: 2
}

// console.log('{...citiesRussiaWithPopulation}', {...citiesRussiaWithPopulation});
// console.log({...citiesEuropeWithPopulation, ...citiesRussiaWithPopulation});
// console.log({...citiesRussiaWithPopulation, ...citiesEuropeWithPopulation});


// ----------------    Spread

// const citiesRussiaWithPopulation = {...citiesRussia}
// const citiesEuropeWithPopulation = {...citiesEurope}

// console.log('...citiesRussiaWithPopulation', ...citiesRussiaWithPopulation);
// console.log('citiesEuropeWithPopulation', citiesEuropeWithPopulation);

// const allCities = [...citiesRussia, 'Вашингтон', ...citiesEurope];

// const allCities = citiesEurope.concat(citiesRussia);

// console.log('allCities', allCities);

/// Practice

// const numbers = [5, 37, 42, 17];
// // console.log(Math.max(5, 37, 42, 17)); // 42
// // console.log(Math.min(5, 37, 42, 17)); // 5
// console.log(Math.max(...numbers));          // 42
// console.log(Math.max.apply(null, numbers)); // 42 (ТОЖЕ САМОЕ ЧТО СТРЕМЯ ТОЧКАМИ ТОЛЬКО УСТАРЕВШЕЕ)

// const divs = document.querySelectorAll('div');
// const nodes = [...divs];
// console.log('nodes', nodes, Array.isArray(nodes));
// console.log(divs, Array.isArray(divs));


/// --------------   Rest

// function sum(a, b, ...rest) {
//     console.log('rest', rest);
//     return a + b;
// }
// const numbers = [1, 2, 3, 4, 5];

// // spred !!
// console.log(sum(...numbers));


// ------- МАСИВ И ФУНКЦИЯ

function sum(a, b, ...rest) {

    return (a + b) * rest.reduce((a, i) => a + i, 0);
}
const numbers = [1, 2, 3, 4, 5, 6, 7, 8];


// console.log(sum(...numbers));

// const a = numbers[0];
// const b = numbers[1];

// const [a, b, ...other] = numbers;

// console.log(a, b, other);

// ------  ОБЪЕКТ

const person = {
    name: 'maks',
    age: 41,
    city: 'Moscow',
    country: "Russia"
}

const {name, age, ...address} = person;
console.log(name, age, address);






