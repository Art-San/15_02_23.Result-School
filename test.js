// console.log(1, 0 && 'Hello') // 0
// console.log(2, 'Hi' && null && 42) // null
// console.log(3, {} && [] && 'JavaScript') // 'JavaScript'
// console.log(4, 1 && true && {} && false && function () {}) // false
// console.log(5, 1 && true && {} && [] && function () {}) // fun

// // Сложнее
// console.log(6, true && 'value' && 0 && 'not reached') // 0
// console.log(7, 1 && null && undefined && 'text') // null
// console.log(8, 'start' && '' && 42 && false) // ''

// console.log(9, 1 || 'да')
// console.log(10, 0 || 'да')
// console.log(11, false || 'default')
// console.log(12, 0 || '' || NaN || 'fallback')
// console.log(13, 'First' || 'Second' || 'Third')
// // Сложнее
// console.log(14, '' || 0 || false || NaN || 'success')
// console.log(15, null || 'nullish' || '' || undefined)
// console.log(16, false || 0 || '' || 100 || 'end')

// console.log(17, null ?? 'defined')
// console.log(18, undefined ?? 0 ?? 'backup')
// console.log(19, 'not null' ?? 'fallback')

// // Сложнее
// console.log(20, undefined ?? null ?? NaN ?? 0)
// console.log(21, 0 ?? false ?? null ?? 'backup')
// console.log(22, '' ?? 'empty' ?? 'filled')

class Shape {
  calculateArea() {
    throw new Error('Method calculateArea() must be implemented.')
  }
}

// Класс для квадрата
class Square extends Shape {
  constructor(side) {
    super()
    this.side = side
  }

  calculateArea() {
    return this.side * this.side
  }
}

// Класс для треугольника
class Triangle extends Shape {
  constructor(base, height) {
    super()
    this.base = base
    this.height = height
  }

  calculateArea() {
    return 0.5 * this.base * this.height
  }
}

// Класс для круга
class Circle extends Shape {
  constructor(radius) {
    super()
    this.radius = radius
  }

  calculateArea() {
    return Math.PI * Math.pow(this.radius, 2)
  }
}

// Примеры использования
const shapes = [new Square(4), new Triangle(5, 6), new Circle(3)]

shapes.forEach((shape) => {
  console.log(`Площадь ${shape.constructor.name}:`, shape.calculateArea())
})
