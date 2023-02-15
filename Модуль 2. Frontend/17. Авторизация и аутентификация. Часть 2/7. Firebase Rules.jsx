// Basic Security Rules (документация Firebase): cсылка
// https://firebase.google.com/docs/rules/basics

{
      ".read": "now < 1675616400000",  // 2023-2-6
      ".write": "now < 1675616400000",  // 2023-2-6
}

/////////////////////////////////////////////////////////////////
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
      }

    }
  }


