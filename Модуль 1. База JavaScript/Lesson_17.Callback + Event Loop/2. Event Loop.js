// Event Loop (событийный цикл)

function sayHello(name) {
    console.log(`Hello, ${name}`);
}

console.log('start');
sayHello('Maksim');
setTimeout(() => {
    sayHello('Charlie');
}, 0)

sayHello('Antony');
console.log('end');

// Call Stack


                 // *         *
                 // *         *
                 // *         *
                 // *         *
                 // *         *
                 // *         *
                 // ***********
// Задача попадает в стакн, выполняется и иудаляется и так по очереди 




                 // *         *
                 // *         *
                 // *         *
                 // *         *
                 // *         *
                 // *         *
                 // ***********

    //   *************************************

    //                Callback queue

    //   *************************************

//       Для web Api (setTimeout, setInterval) создается очередь Callback queue.

//    Сначала выполняется  Call Stack потом Callback queue