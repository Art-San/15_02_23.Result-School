const goodInfo = {
    id: 1,
    price: 80,
    currency: '$',
    name: 'shoes',
};

console.log('goodInfo', goodInfo);

// ------ for in УСТАРЕВШИЙ

// for (const key in goodInfo) {
//     console.log('key', key);
//     const value = goodInfo[key];
//     console.log('value', value);
// }

// -------- object.keys создает масив из ключей 

// const keys = Object.keys(goodInfo);
// console.log('keys', keys);           // ['id', 'price', 'currency', 'name']

// --------- object.values создает масив из значений

// const value = Object.values(goodInfo);
// console.log('values', value);

// ----- -- Object.entries обьеденит в массив [key и values]

const entries = Object.entries(goodInfo);

console.log('entries', entries);         // [Array(2), Array(2), Array(2), Array(2)]  в массиве 4 масива 
// console.log('entries[0]', entries[0]);   //  ['id', 1]