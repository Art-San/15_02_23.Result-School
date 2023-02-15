const clientName = 'Игорь';
let clientSpentForAllTime = 110;
let clientSpentToday = 25;

let discount = 0;

if (clientSpentForAllTime >= 100 && clientSpentForAllTime < 300) {
    discount = 10;
} else if (clientSpentForAllTime >= 300 && clientSpentForAllTime < 500) {
    discount = 20;
} else if (clientSpentForAllTime >= 500) {
    discount = 30;
}

alert(`Вам предоставляется скидка в ${discount}%!`);

clientSpentToday = clientSpentToday - (clientSpentToday * discount / 100);
clientSpentForAllTime += clientSpentToday;

alert(`К оплате ${clientSpentToday}$. За все время в нашем ресторане вы потратили ${clientSpentForAllTime}.`)

// const clientName = "Игорь"
// let clientSpentForAllTime = 610
// let clientSpentToday = 25
// let discount = 0

// if (clientSpentForAllTime > 100 && clientSpentForAllTime < 300) {
//     discount = 10
// } else if (clientSpentForAllTime > 300 && clientSpentForAllTime < 500) {
//     discount = 20
// } else {discount = 30}


// clientSpentToday = clientSpentToday - (clientSpentToday / 100 * discount)
// clientSpentForAllTime = clientSpentForAllTime + clientSpentToday


// alert(`Вам предоставляется скидка в ${discount}%!`)

// alert(`Спасибо, ${clientName}! К оплате ${clientSpentToday}$. За все время в нашем ресторане вы потратили ${clientSpentForAllTime}$.`)

// // 25 - (25 / 100 *10)
    

// console.log("сdiscountPrice", discountPrice)
// console.log("скидка", discount + "%")
// console.log("clientSpentForAllTime", clientSpentForAllTime)