// ООП
// Объектно орентированное прогромирование

//---------- function ----- Устаревше

// function Animal(name) {
//     this.name = name;

//     this.getName = function() {
//         return this.name;
//     }
// }

// const cat = new Animal('кот');
// console.log('cat', cat);
// console.log(cat.name);
// console.log(cat.getName());

//-------------- class ------- Рекомендовано

class Animal {
    constructor(name, breed = "неизвестно") {
        this.name = name;
        this.breed = breed

    }

    getName() {
        return this.name, this.breed
    }
}

const cat = new Animal('кот');
const dog = new Animal('собака', 'гончая')
console.log('dog', dog);
console.log('cat', cat);
// console.log(cat.name);
// console.log(cat.getName());