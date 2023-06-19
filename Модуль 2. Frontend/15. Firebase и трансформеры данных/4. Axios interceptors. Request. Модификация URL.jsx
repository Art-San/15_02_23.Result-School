// Документация Axios (Interceptors): ссылка
// https://axios-http.com/docs/interceptors

// при созданнии базы такие правила были созданы
{
    "rules": {
      ".read": "now < 1689613200000",  // 2023-7-18
      ".write": "now < 1689613200000",  // 2023-7-18
    }
  }

// .. а это правила были уже в конце
{
    "rules": {
      "user": {
        ".read": "auth  !=null",
        "$uid": {
            ".write": "$uid === auth.uid"
        }
      },
      "quality": {
        ".read": true,
        ".write": false
      },
      "profession": {
        ".read": true,
        ".write": false
      },
      "comment": {
        ".read": "auth  !=null",
            ".indexOn": ["pageId"],
              "$cid": {
                 ".write":"auth !=null&& ((data.child('userId').val() === auth.uid) || ( newData.child('userId').val() === auth.uid))"
                }
      }
    }
  }

  аутентификация / authentication
  // говорится 16. Авторизация и аутентификация. Часть 1 
  // 5. Принципы регистрации в Firebase
  api-key появляется когда в базе будет создан раздел аутентификация