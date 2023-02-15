// ---------------------------  от Владилена
// ----------------------------------------------------------------------
const users = [
  {
      username: 'David',
      status: 'online',
      lastActivity: 10
  }, {
      username: 'Lucy', 
      status: 'offline',
      lastActivity: 22
  }, {
      username: 'Bob', 
      status: 'online',
      lastActivity: 104
  }
]

const usersOnline = users.filter((person) => person.status === 'online');
console.log('onlineUsers', usersOnline);
const usersOnlineNames = usersOnline.map((person) => person.username).join(', ');
console.log('usersOnlineNames', usersOnlineNames);
// alert(`Сейчас в онлайн следующие пользователи: ${usersOnlineNames}`);



//         ---------------- Которое я отправил
// ---------------------------------------------------------------------------------------
// const users = [
//     {
//       username: 'David',
//       status: 'online',
//       lastActivity: 10
//     },
//     {
//       username: 'Lucy',
//       status: 'offline',
//       lastActivity: 22
//     },
//     {
//       username: 'Bob',
//       status: 'online',
//       lastActivity: 104
//     }
//   ];

//   let onlineUsers = users.filter(a => a.status === 'online');
//   let usersOnlineNames = onlineUsers.map(a => a.username).join(', ');
//   alert(`Сейчас в онлайн следующие пользователи: ${usersOnlineNames}`);

//   console.log('onlineUsers', onlineUsers);
//   console.log(`Сейчас в онлайн следующие пользователи: ${usersOnlineNames}`);


  // const filterSalaries = salariesOfDeveloper.filter((salary, index, array) => {
//     // return salary > 500;                                                       // [600, 2000]   
//     return index % 2 === 0;
   
    
// })
// console.log('filterSalaries', filterSalaries);



  

       
  
  
  
  // let users1 = users
  //           .filter(e => e.status === 'online')
  //           .map(e => e.username)
  //           .join`, `;
  //       console.log(users1);

  //     let onlineUsers = [users1];
  //     console.log('typof onlineUsers', onlineUsers )




  // console.log('Сейчас в онлайн следующие пользователи: David, Bob')