// Литеральные немного напоминают енам

let v: 'string' = 'string'

type actionType = 'up' | 'down'

const performAction1 = (action: actionType): -1 | 1 => {
  switch (action) {
    case 'down':
      return -1
    case 'up':
      //   return 3
      return 1
  }
}
const performAction2 = (action: actionType | IComplexAction) => {
  switch (action) {
    case 'down':
      return -1
    case 'up':
      //   return 3
      return 1
  }
}

// performAction('ter')

interface IComplexAction {
  s: string
}
