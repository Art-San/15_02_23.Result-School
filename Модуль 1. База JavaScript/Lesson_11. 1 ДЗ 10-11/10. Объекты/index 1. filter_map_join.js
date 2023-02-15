//  ---- Вывод заголовка 
const body = document.querySelector('body')
const heder = 'у которых status равен "online".'
// const h1 = document.querySelector('h1')
// h1.append(heder)
console.log('heder', heder)
body.innerHTML = ` <h1>${heder}</h1>`
// ===============================================================
//        Правильное решение
//=================================================================
const users = [
  {
    username: "David",
    status: "online",
    lastActivity: 10
  },
  {
    username: "Lucy",
    status: "offline",
    lastActivity: 22
  },
  {
    username: "Bob",
    status: "online",
    lastActivity: 104
  }
];

const usersOnline = users.filter((person) => person.status === "online");
const usersOnlineNames = usersOnline
  .map((person) => person.username)
  .join(", ");
alert(`Сейчас в онлайн следующие пользователи: ${usersOnlineNames}`);





//    мще решение такое же как правильное 
//==============================================================
// const users = [
//   {
//     username: "David",
//     status: "online",
//     lastActivity: 10
//   },
//   {
//     username: "Lucy",
//     status: "offline",
//     lastActivity: 22
//   },
//   {
//     username: "Bob",
//     status: "online",
//     lastActivity: 104
//   }
// ];

// // const usersOnline = []

// function getUsersOnline(arr) {
//   const usersOnline = arr
//     .filter((user) => user.status === "online")
//   return usersOnline
// }
// const men = getUsersOnline(users)
// const string = men.map((user) => user.username).join(", ")


// //===================================================================
// const userFilter = users.filter((user) => user.status === "online")
// const userName = userFilter.map((name) => name.username).join(", ")

// console.log('userName', userName)
// console.log(`Сейчас в онлайн следующие пользователи: ${userName}`)