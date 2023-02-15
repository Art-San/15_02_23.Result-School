const clientName = prompt('Введите имя клиента');
let clientSpentToday = prompt('Сколько клиент потратил сегодня?');
let clientSpentForAllTime = prompt('Сколько клиент потратил за все время?');

clientSpentForAllTime = Number(clientSpentForAllTime);
clientSpentToday = Number(clientSpentToday);

let discount = 0;

if (!clientSpentToday || !clientSpentForAllTime) {
    alert('Сумма, которую клиент потратил за все время и которую потратил сегодня, должна быть числом! Перезагрузите страницу, чтобы повторить попытку.');
} else {
    if (clientSpentForAllTime >= 100 && clientSpentForAllTime < 300) {
        discount = 10;
    } else if (clientSpentForAllTime >= 300 && clientSpentForAllTime < 500) {
        discount = 20;
    } else if (clientSpentForAllTime >= 500) {
        discount = 30;
    } 
}
    
    alert(`Вам предоставляется скидка в ${discount}%!`);
    
    clientSpentToday = clientSpentToday - (clientSpentToday * discount / 100);
    clientSpentForAllTime += clientSpentToday;
    
    alert(`Спасибо, ${clientName}! К оплате ${clientSpentToday}$. За все время в нашем ресторане вы потратили ${clientSpentForAllTime}$.`);




    // let clientName = prompt('Введите имя клиента')
    // let clientSpentToday = prompt('Сколько клиент потратил сегодня?')
    // let clientSpentForAllTime = prompt('Сколько клиент потратил за все время?')
    // clientSpentToday = Number(clientSpentToday)
    // console.log("clientSpentToday'", clientSpentToday)
    // clientSpentForAllTime = Number(clientSpentForAllTime)
    // console.log("clientSpentToday'", clientSpentForAllTime)
    // let discount = 0;

    // if (!clientSpentToday || !clientSpentForAllTime ) {
    //     alert("должно бать число")
    // } else {
    //     if (clientSpentForAllTime >= 100 && clientSpentForAllTime < 300) {
    //         discount = 10;
    //     } else if (clientSpentForAllTime >= 300 && clientSpentForAllTime < 500) {
    //         discount = 20;
    //     } else if (clientSpentForAllTime >= 500) {
    //         discount = 30;
    //     }
    //     alert(`Вам предоставляется скидка в ${discount}%!`);
        
    //     clientSpentToday = clientSpentToday - (clientSpentToday * discount / 100);
    //     clientSpentForAllTime += clientSpentToday;
        
    //     alert(`К оплате ${clientSpentToday}$. За все время в нашем ресторане вы потратили ${clientSpentForAllTime}.`)
    // }
