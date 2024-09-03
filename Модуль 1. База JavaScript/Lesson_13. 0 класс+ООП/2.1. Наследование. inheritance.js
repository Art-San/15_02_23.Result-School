// Наследование и instanceof проверяе принадлежит ли объект какомоьу определеному классу

class Plane {
  constructor(type, numberOfPassengers) {
    this.type = type
    this.numberOfPassengers = numberOfPassengers
  }

  startFlight() {
    console.log(
      `Самолет у нас ${this.type} и вмещает ${this.numberOfPassengers} человек`
    )
  }
}

class MilitaryPlane extends Plane {
  constructor(type) {
    super(type, 0)
    this.numberOfGuns = 0
  }

  startFlight() {
    console.log(`Самолет у нас ${this.type} полетели в атаку`)
  }

  setNumberOfGuns(numberOfGuns) {
    this.numberOfGuns = numberOfGuns
    console.log(`патронов у нас осталось ${this.numberOfGuns}, надо экономить`)
  }

  shoot() {
    console.log('стреляем')
  }
}

// const plane = new Plane('Пассажирский', 100);
// console.log(plane);
// plane.startFlight();

const militaryPlane = new MilitaryPlane('military')
console.log('militaryPlane', militaryPlane)
militaryPlane.startFlight()

militaryPlane.setNumberOfGuns(4)
militaryPlane.shoot()

// instanceof проверяе принадлежит ли объект какомоьу определеному классу

console.log(militaryPlane instanceof MilitaryPlane) // true так как объект militaryPlane относится к классу MilitaryPlane

// class Dog {}

// console.log(militaryPlane instanceof Dog); // false так как militaryPlane к Dog не каким боком не относится.

// console.log(militaryPlane instanceof Plane); // true так как militaryPlane дочерний объект Plane
