// Исходники код: ссылка
// https://drive.google.com/drive/folders/1Q6PcLJ62EayETDkJ7tx-meXiRdcrxGOm?usp=sharing


https://vladilen.notion.site/Api-Endpoints-9c0dc0d186c84447b293c0ac986e6c00


// Comment

// interface Comment {
// 	content: string
// 	pageId: 
// 	userId: string
// }


// | URL              | Auth | Type   | Body    | Query            | Return    |
// | ---              | ---  | ---    | ---     | ---              | ---       |
// | /api/comment     | true | get    | null    | orderBy, equalTo | Comment[] |
// | /api/comment     | true | post   | Comment | null             | Comment   |
// | /api/comment/:id | true | delete | null    | null             | null      |