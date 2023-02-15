// const peopleWaiting = ['Кристина', 'Олег', 'Кирилл', 'Мария', 'Светлана', 'Артем', 'Глеб'];
// const receivedParcel = peopleWaiting.splice(0, 2);

// console.log('receivedParcel', receivedParcel);
// console.log('peopleWaiting', peopleWaiting);

// peopleWaiting.shift();
// console.log('peopleWaiting', peopleWaiting);

// peopleWaiting.splice(0, 4);
// console.log('peopleWaiting', peopleWaiting);

// https://www.cyberforum.ru/javascript-beginners/thread2861899.html

const peopleWaiting = ['Кристина', 'Олег', 'Кирилл', 'Мария', 'Светлана', 'Артем', 'Глеб'];

function giveParcel(queue) { // Выдать посылку
  console.log('queue1', queue);
  const client = queue.shift();

  alert(`${client} получил(а) посылку. В очереди осталось ${queue.length} человек.`);
}
 
function leaveQueueWithoutParcel(queue) { // Уйти из очереди
  console.log('queue2', queue);
  const client = queue.pop();
  alert(`${client} не получил(а) посылку и ушел(ла) из очереди.`);
}
 
function clearQueue(queue) { // Очистить очередь
  console.log('queue3', queue);
  while (queue.length) {
    leaveQueueWithoutParcel(queue);
  }
}


giveParcel(peopleWaiting);
giveParcel(peopleWaiting);
giveParcel(peopleWaiting);
clearQueue(peopleWaiting);







// console.log('giveParcel', giveParcel);
// console.log('peopleWaiting)', peopleWaiting);

// const footballersGoals = [20, 4, 35, 30, 31, 21];
// footballersGoals.sort((a, b) => a - b);
// console.log('footballersGoals', footballersGoals);