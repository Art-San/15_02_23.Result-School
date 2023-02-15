// // // Ссылка на урок
// https://www.youtube.com/watch?v=7wtbNNiOh30


// =================== Wrapper ==============================

const withDefaultValue = (target, defaultValue = 0 ) => {
    return new Proxy(target, {
        get: (obj, prop) => (prop in obj ? obj[prop] : defaultValue)
    })
}

const position = withDefaultValue(
    {
        x: 24,
        y: 42
    },
    3
)

console.log('position.z', position.z) // position.z 3 ---// так как по дефолту передаем 3


// ================================= Hidden properies ================================

const withHiddenProps = (target, prefix = '_') => {
    return new Proxy(target, {
        has: (obj, prop) => (prop in obj) && (!prop.startsWith(prefix)),
        ownKeys: obj => Reflect.ownKeys(obj)
            .filter(p => !p.startsWith(prefix)),
        get: (obj, prop, receiver) => (prop in receiver)
        ? obj[prop]
        : void 0

    })
}

const data = withHiddenProps({
    name: 'vladilen',
    age: 25,
    _uid: '12345'
})

console.log('data._uid', data._uid) // data._uid undefined --- так как закрыли доступ до ключа _uid
console.log(Object.keys(data)) // ['name', 'age']



// =========================== Optimization ==========================

  const IndexedArray = new Proxy(Array, {
    construct(target, [args]) {
      const index = {}
      args.forEach(item => (index[item.id] = item))
  
      return new Proxy(new target(...args), {
        get(arr, prop) {
          switch (prop) {
            case 'push':
              return item => {
                index[item.id] = item
                arr[prop].call(arr, item)
              }
            case 'findById':
              return id => index[id]
            default:
              return arr[prop]
          }
        }
      })
    }
  })

  const users = new IndexedArray([
    { id: 11, name: 'Vladilen', job: 'Fullstack', age: 25 },
    { id: 22, name: 'Elena', job: 'Student', age: 22 },
    { id: 33, name: 'Victor', job: 'Backend', age: 23 },
    { id: 44, name: 'Vasilisa', job: 'Teacher', age: 24 }
  ])






