// в статике нельзя использовать this
// Чтобы получить доступ к статическому полю или методу,
//  нужно сначала написать название класса "Car" поставить точку
//  затем написать уже название "isCar".

class Car {
    static isCar(car) {
        return car instanceof Car;
    }

    static initialParams = {
        name: `Audi`,
        maxSpeed: 150,
    }

    constructor(name, maxSpeed) {
        this.name = name || Car.initialParams.name;
        this.maxSpeed = maxSpeed || Car.initialParams.maxSpeed;
    }
    driver() {
        console.log(`Машина ${this.name} сейчас в пути`);
    }
}

const car = new Car();
console.log(`car`, car);
const animal = {};
const isCar = Car.isCar(car);




// const car = new Car(`BMW`, 200);
// const animal = {};
// const isCar = Car.isCar(car);

// console.log(`isCar`, isCar);


// console.log(`car`, car);
