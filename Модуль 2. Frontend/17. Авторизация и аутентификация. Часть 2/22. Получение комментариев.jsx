// Фильтрация данных (документация Firebase): cсылка
// https://firebase.google.com/docs/database/rest/retrieve-data#section-rest-filtering
// Installation & Setup for REST API (документация Firebase): cсылка
// https://firebase.google.com/docs/database/rest/retrieve-data#section-rest-filtering
// Index Data (документация Firebase): cсылка
// https://firebase.google.com/docs/database/security/indexing-data


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
        	".write": true,
            ".indexOn": ["pageId"] // добавили индекс
      }
    }
  }


async function getComments() {
    try {
        const { content } = await commentService.getComments(userId)
        setComments(content)
    } catch (error) {
        errorCatcher(error)
    } finally {
        setLoading(false)
    }
}

getComments: async (pageId) => {
    const { data } = await httpService.get(commentEndpoint, {
        params: {
            orderBy: '"pageId"',
            equalTo: `"${pageId}"`
        }
    })
    return data
}