// {
//     "userId": 1,
//     "id": 1,
//     "title": "delectus aut autem",
//     "info": {
//         "desc": "delectus aut autem",
//         "isActive": true
//     },
//     "tags": [
//         {
//             "name": "my name",
//             "value": 1000
//         }
//     ]
// }

export interface Root {
  userId: number
  id: number
  title: string
  info: Info
  tags: Tag[]
}

export interface Info {
  desc: string
  isActive: boolean
}

export interface Tag {
  name: string
  value: number
}

//=========  так не надо делать ===================

export interface IUser {
  userId: number
  id: number
  title: string
  info: {
    desc: string
    isActive: boolean
  }
  tags: [
    {
      name: string
      value: number
    }
  ]
}
