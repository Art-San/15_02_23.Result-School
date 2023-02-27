// ApiEndpoints: ссылка
// https://vladilen.notion.site/Api-Endpoints-9c0dc0d186c84447b293c0ac986e6c00
// =============================================================================================

// Auth

// interface Tokens {
// 	userId: string
// 	accessToken: string
// 	refreshToken: string
// 	exporesIn: number
// }


// | Url                          | Type |                  Body                             |     Desc      | Return |
// | ---                          | ---  | ---                                               | ---           | -- -   |
// | /api/auth/signUp             | post | email, password, sex, profession, quality[], name | register      | Tokens |
// | /api/auth/signInWithPassword | post | email, password                                   | login         | Tokens |
// | /api/auth/token              | post | refresh_token                                     | refresh token | Tokens |

// ===============================================================================================


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


// Profession

// interface Profession {
// 	name: string
// }

// | URL             | Auth  | Type | Body | Query | Return       |
// | ---             | ---   | ---  | ---  | ---   | ---          |
// | /api/profession | false | get  | null | null  | Profession[] |


// Quality

// interface Quality {
// 	name: string
// 	color: string
// }

// | URL          | Auth  | Type | Body | Query | Return    |
// | ---          | ---   | ---  | ---  | ---   | ---       |
// | /api/quality | false | get  | null | null  | Quality[] |


// User

// interface User {
// 	name: string
// 	email: string
// 	password: string
// 	completedMeetings: number
// 	image: string
// 	rate: number
// 	sex: 'male' | 'female' | 'other'
// 	profession: Profession
// 	qualities: Quality[]
// }

// | URL           | Auth | Type  | Body | Query | Return |
// | ---           | ---  | ---   | ---  | ---   | ---    |
// | /api/user/:id | true | patch | User | null  | User   | // patch обновлен 
// | /api/user     | true | get   | null | null  | User[] |