const developerInfo = {
    age: 42,
    experience: 3,
    name: 'akeks',
};

const developerExtraInfo = {
    height: 100,
    isJunior: false,
    name: 'Саня',
};

// ... спред оператор- РЕКОМЕНДУЕТСЯ
const developer = {
    ...developerInfo,
    ...developerExtraInfo,
    name: 'Александр',
    age: 41,
    

};

console.log('developer', developer)

//  Object.assign УСТАРЕВШИЙ

// const developer2 = Object.assign(developerInfo, developerExtraInfo);
// console.log('developer2', developer2);
