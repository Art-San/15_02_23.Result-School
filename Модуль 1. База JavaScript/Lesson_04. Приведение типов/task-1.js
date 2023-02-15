let name = 'Aleksander';
console.log(Number(name), Boolean(name), String(name));

let age = 42;            
console.log(Number(age), Boolean(age), String(age));

let hotSun = true;
console.log(Number(hotSun), Boolean(hotSun), String(hotSun));

let numberOfStars = null;
console.log(Number(numberOfStars), Boolean(numberOfStars), String(numberOfStars));

let waterInSea;
console.log(Number(waterInSea), Boolean(waterInSea), String(waterInSea));

let hotel = {
    name: 'Imperial',
    floors: 10,
    discounts: true,
};
console.log(Number(hotel), Boolean(hotel), String(hotel));

// let id = Symbol('id');
// console.log(Number(id), Boolean(id), String(id));

let bigIntNumber = 20n;
console.log( Number(bigIntNumber), Boolean(bigIntNumber), String(bigIntNumber));