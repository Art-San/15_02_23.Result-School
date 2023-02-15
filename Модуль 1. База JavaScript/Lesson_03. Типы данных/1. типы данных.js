// 7 примитивов и объект не примитив (сложный тип данных)

// 1. string

const favoriteDrink = 'Tea';
console.log(favoriteDrink);

// 2. number
const numberOfCaps = 5;
console.log(numberOfCaps);

// 3. boolean
const isColdDrink = false;
console.log(isColdDrink);

// 4. null- пусто, значение не известно
const studentFavoritDrink = null;
console.log('studentFavoritDrink', studentFavoritDrink); // studentFavoritDrink null

// 5. undefined- значение не было присвоено
let carOwner;
console.log('carOwner', carOwner);  // carOwner undefined

// 6. object
const drink = {
    favoriteDrink: 'Tea',
    numberOfCaps: 5,
    isColdDrink: true,
};
console.log(drink);

// 7. symbol
const id = Symbol('id');
console.log(id);

// 8. bigInt - большое число -(2 в 53 степени - 1)
// const bigIntNumber = BigInt(10); 
const bigIntNumber = 10n; 

console.log(bigIntNumber);