// // // Ссылка на урок
// https://www.youtube.com/watch?v=cS6nTVNzOPw

// const person = {
//     name: 'Vladilen',
//     age: 26
// }

// const person = Object.create(
//     {},
//     {
//     name: {
//         value: 'Vadilen',
//         enumerable: true,      // будет показыватся поле name
//         writable: true,        // можно перезаписать поле
//         configurable: true     // можно удалить поле есть "configurable: true"
//     },
//     birthYear: {
//         value: 1993,
//         enumerable: false,      // не будет показыватся поле birthYear. по умолчанию enumerable = false
//         writable: false,         // не перезаписать поле
//         configurable: false      // нельзя удалит это поле так false и по умолчанию стоит false
//     }
//   
//   }
// )

// person.name = 'Максим' // в поле name 'writable: true' // $$$key name Максим 

// for ( let key in person) {
//     console.log('$$$key', key, person[key]) //$$$key name Vadilen
// }


// ================= ГЕТАРЫ И СЕТАРЫ =================================

const person = Object.create(
    {
        calculateAge() {                                                 // прототип объекта персон
            console.log(new Date().getFullYear() - this.birthYear)
        }
    },
    {
    name: {
        value: 'Vadilen',
        enumerable: true,  
        writable: true,       
        configurable: true  
    },
    birthYear: {
        value: 1993,
        enumerable: false, 
        writable: false,      
        configurable: false  
    },
    age: {
        get() {
            return new Date().getFullYear() - this.birthYear
        },
        set (value) {
            document.body.style.background = 'red'
            console.log(`Set value ${value}`) // Set value 49
            setTimeout(() => {
                document.body.style.background = '' 
            }, 5000)
        }
    }
  }
)

// console.log('age.GET', person.age)  // person.age 30
// console.log('age.SET', person.age = 49)
person.calculateAge()


for ( let key in person) {                   // for пробегается по прототипу
    console.log('$$$key', key, person[key]) //$$$key name Vadilen + calculateAge ƒ calculateAge() { 
}

for ( let key in person) {                   // for не пробегается по прототипу
    if (person.hasOwnProperty(key)) {
    console.log('$$$key', key, person[key])  // $$$key name Vadilen
    }
}