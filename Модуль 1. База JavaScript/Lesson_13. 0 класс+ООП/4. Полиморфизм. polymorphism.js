// Полиморфизм
// одно действие, неколько реализаций

class Animal {
    constructor(name) {
        this.name = name;
    }

    makeSound() {}
}

class Dog extends Animal {
    constructor(name) {
        super(name);
    }

    makeSound() {
        console.log(`гав - гав`)
    }
}

class Horse extends Animal {
    constructor(name) {
        super(name);
    }

    makeSound() {
        console.log(`иго-го-го`)
    }
}


const dog = new Dog();
dog.makeSound();

const horse = new Horse();
horse.makeSound();


