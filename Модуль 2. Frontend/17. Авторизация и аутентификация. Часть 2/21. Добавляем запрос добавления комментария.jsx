// https://console.firebase.google.com/project/fast-company-firebase-609da/database/fast-company-firebase-609da-default-rtdb/rules


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
//       "comment": {                    // добавленно для комментариев
//         ".read": "auth  !=null",
//         ".write": true
//       }
//     }
//   }