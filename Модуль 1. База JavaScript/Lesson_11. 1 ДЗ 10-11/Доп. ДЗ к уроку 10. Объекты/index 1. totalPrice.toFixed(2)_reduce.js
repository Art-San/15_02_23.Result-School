//  ---- Вывод заголовка 
const body = document.querySelector('body')
const heder = `интернет-магазин по доставке еды`
// const h1 = document.querySelector('h1')
// h1.append(heder)
body.innerHTML = ` <h1>${heder}</h1>`
// ===============================================================
//        Правильное решение
//=================================================================

const groceries = {
  "73Wakv": {
    name: "Orange Juice",
    price: 1.5,
    discount: 10
  },
  "5L3db9": {
    name: "Chocolate",
    price: 2,
    discount: 0
  }
  // more items...
};

function getTotalPriceOfShoppingBag(shoppingBagArray) {
  if (shoppingBagArray.length === 0) {                          // на случай если корзина пуста
    return 0
  }
  const totalPrice = shoppingBagArray.reduce((acc, {productId, count}) => {
    if (!groceries[productId]) return acc                         // на случай если нет товара
    const {price, discount} = groceries[productId]
    const priceWithDiscount = price - (price / 100) * discount
    console.log('sumDiscount', priceWithDiscount)
   return acc + priceWithDiscount * count
  }, 0)
 
  return Number(totalPrice.toFixed(2))
}



const shoppingBag = [
  { productId: "73Wakv", count: 3 },
  { productId: "5L3db9", count: 23 }
];

const totalPrice = getTotalPriceOfShoppingBag(shoppingBag);
console.log("totalPrice", totalPrice); // Возвращает 50.05
