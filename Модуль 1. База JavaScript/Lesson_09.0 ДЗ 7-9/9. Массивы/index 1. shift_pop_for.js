//  ---- Вывод заголовка 
const body = document.querySelector('body')
const heder = 'Сейчас вам необходимо'
// const h1 = document.querySelector('h1')
// h1.append(heder)
console.log('heder', heder)
body.innerHTML = ` <h1>${heder}</h1>`
// =====================================================================
//                    Правильное решение
// ==================================================================
const peopleWaiting = [
    "Кристина",
    "Олег",
    "Кирилл",
    "Мария",
    "Светлана",
    "Артем",
    "Глеб"
  ];
  
  const giveParcel = () => {
    const clientName = peopleWaiting.shift();
    alert(
      `${clientName} получил(а) посылку. В очереди осталось ${peopleWaiting.length} человек.`
    );
  };
  
  const leaveQueueWithoutParcel = () => {
    const clientName = peopleWaiting.pop();
    alert(`${clientName} не получил(а) посылку и ушел(ла) из очереди`);
  };
  
  giveParcel();
  giveParcel();
  giveParcel();
  
  for (let i = peopleWaiting.length; i > 0; i -= 1) {
    leaveQueueWithoutParcel();
  }

  
// ============================================================================ 
// // мое  решение
// ================================================================================
// const peopleWaiting = [
//     "Кристина",
//     "Олег",
//     "Кирилл",
//     "Мария",
//     "Светлана",
//     "Артем",
//     "Глеб"
// ];


// function giveParcel() {
//     for (let i = 0; i < 3; i++) {
//         const name = peopleWaiting.shift()
//         alert( `${name} получил(а) посылку. В очереди осталось ${peopleWaiting.length} человек.`)
//     }
         
// }

// function leaveQueueWithoutParcel(a = peopleWaiting) {
//     for (let i = a.length; i > 0; i -= 1) {
//         const  name = a.pop()
//         alert(`${name} не получил(а) посылку и ушел(ла) из очереди.`)
//     }
// }
// giveParcel()
// leaveQueueWithoutParcel()



