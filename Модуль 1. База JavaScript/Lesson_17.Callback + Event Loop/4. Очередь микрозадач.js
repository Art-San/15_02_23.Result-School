// 1 'Давайте начинать'
// Я в промисе
// 'Давайте заканчивать'
// 'возвращение результата из промиса
// 'приветю я сет тайм аут'
// 'Я тоже из тай аута, олько жду подольше

// before promise
// One
// Zero
// Zero Promise
// Zero Promise Invoked



const getData = (callback) => {
    fetch("https://jsonplaceholder.typicode.com/users/1")
      .then((response) => response.json())
      .then((user) => {
        console.log("Success");
        callback(user);
      })
      .catch((error) => {
        console.log(error);
      });
  };
 
  getData(() => {
    console.log("user received");
    const promise = new Promise((resolve) => {
      setTimeout(() => {
        resolve("promise resolved");
      }, 500);
      console.log("in promise");
      setTimeout(() => {
        console.log("last set timeout");
      }, 400);
    });
    promise.then((result) => {
      console.log(result);
    });
  });
  console.log("End");
  




// console.log('Давайте начинать');

// setTimeout(() => {
//     console.log('приветю я сет тайм аут');
// }, 1000);

// const promise = new Promise((resolve) => {
//     console.log('Я в промисе');

//     resolve('возвращение результата из промиса');
// });

// setTimeout(() => {
//     console.log('Я тоже из тай аута, олько жду подольше');
    
// }, 2000);

// promise.then((result) => [
//     console.log(result)
// ])



// console.log('Давайте заканчивать')

// 1. Выполнение мАкрозадач
// 2. Выплнение мИкрозадач
// 3. Выплнение Callback queue


//       МИКРО ЗАДАЧИ ЭТО КОД КОТОРЫЙ НАХОДИТСЯ В then catch finally

    //   *************************************

    //             microtask queue

    //   *************************************



                 // *         *
                 // *         *
                 // *         *
                 // *         *
                 // *         *
                 // *         *
                 // ***********

    //   *************************************

    //            Callback queue

    //   *************************************

//       Для web Api (setTimeout, setInterval) создается очередь Callback queue.

//    Сначала выполняется  Call Stack потом Callback queue