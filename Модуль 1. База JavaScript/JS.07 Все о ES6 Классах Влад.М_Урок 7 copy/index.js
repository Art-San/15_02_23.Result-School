// // // Ссылка на урок
// https://www.youtube.com/watch?v=uLY9GXGMXaA

// const animal = {
//     name: 'Animal',
//     age: 5,
//     hasTail: true
// }


// class Animal {
//     static type = 'ANIMAL' // Данная переменная доступна только у этого класс Animal

//     constructor(optiins) {
//         this.name = optiins.name
//         this.age = optiins.age
//         this.hasTail = optiins.hasTail
//     }

//     voice() {
//         console.log('i am animal')
//     }
// }

// const animal = new Animal ({
//     name: 'Animal',
//     age: 5,
//     hasTail: true
// })

// =========================== Разберем почему клссы могут быть удобны ============================
// ========================= НАСЛЕДОВВАНИЕ ==============================    

// class Animal {
//     static type = 'ANIMAL' // Данная переменная доступна только у этого класс Animal

//     constructor(optiins) {
//         this.name = optiins.name
//         this.age = optiins.age
//         this.hasTail = optiins.hasTail
//     }

//     voice() {
//         console.log('i am animal')
//     }
// }

// class Cat extends Animal {
//     static type = 'CAT'
//     constructor(optiins) {
//         super(optiins)
//         this.color = optiins.color
//     }
//     voice() {
//         super.voice()             // а так будет будет вызвана два voice,           
//         console.log('i am cat')   // сначала  из радительского клачча 
//     }
// //------------------------------------
//     // voice() {                     // этим войсем переписываем верхний voice() {console.log('i am animal')}
//     //     console.log('i am cat') 
//     // }
// //------------------------------------
// // //------------------------------------
// //     constructor(optiins) {
// //         this.color = optiins.color       // так не будет работать, для начала
// //     }                                    // мы должны вызвать родительски конструктор. 
// // //------------------------------------   // Для этого сужествует ключ слово super, В супер надо передать набор опций

//     get ageInfo () {
//         return this.age * 7
//     } 
//     set ageInfo (newAge) {
//         this.age = newAge
//     }
// }

// const cat = new Cat ({
//     name: 'Barsik',
//     age: 8,
//     hasTail: false,
//     color: 'black',

// })

// ============================= Разбираем пример ========================

class Component {
    constructor(selector) {
        this.$el = document.querySelector(selector)
    }

    hide() {
        this.$el.style.display = 'none'
    }

    show() {
        this.$el.style.display = 'block'
    }
}

class Box extends Component {
    constructor(options) {
        super (options.selector)
        this.$el.style.width = this.$el.style.height = options.size + 'px'
        this.$el.style.background = options.color
    }
} 

const box1 = new Box ({
    selector: '#box1',
    size: 100,
    color: 'red'
})

const box2 = new Box ({
    selector: '#box2',
    size: 120,
    color: 'blue'
})

class Circle extends Box {
    constructor(options) {
        super(options)
        this.$el.style.borderRadius = '50%'
    }
}

const c = new Circle({
    selector: '#circle',
    size: 90,
    color: 'green'
})