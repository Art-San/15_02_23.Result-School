// предыдущая версия из 22
// {
//     "rules": {
//       "user": {
//         ".read": "auth  !=null",
//         "$uid": {
//             ".write": "$uid === auth.uid"
//         }
//       },
//       "quality": {
//         ".read": true,
//         ".write": false
//       },
//       "profession": {
//         ".read": true,
//         ".write": false
//       },
//       "comment": {
//         ".read": "auth  !=null",
//         	".write": true,               // удалили
//             ".indexOn": ["pageId"],
//             "$cid": {
//                 ".write":"auth !=null&& ((data.child('userId').val() === auth.uid) || ( newData.child('userId').val() === auth.uid))" // с помощью этой конструкции мы поймем
//                                                                                     // что это тот пользователь который отправляет запрос и который создал коментарий
//             }
//       }
//     }
//   }

// ==============================================================================================
// копия с Firebase Rules от 09.05.23

// {
//     "rules": {
//       "user": {
//         ".read": "auth  !=null",
//         "$uid": {
//             ".write": "$uid === auth.uid"
//         }
//       },
//       "quality": {
//         ".read": true,
//         ".write": false
//       },
//       "profession": {
//         ".read": true,
//         ".write": false
//       },
//       "comment": {
//         ".read": "auth  !=null",
//             ".indexOn": ["pageId"],
//               "$cid": {
//                  ".write":"auth !=null&& ((data.child('userId').val() === auth.uid) || ( newData.child('userId').val() === auth.uid))"
//                 }
//       }
//     }
//   }
