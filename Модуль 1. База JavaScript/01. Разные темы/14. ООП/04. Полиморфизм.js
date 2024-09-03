// Полиморфизм — это возможность объектов с одинаковой спецификацией иметь различную реализацию

// от GPT
// Полиморфизм — это способность объектов разных классов обрабатывать
// вызовы одинаково названных методов, при этом каждая реализация
// метода может отличаться в зависимости от класса.

// Пример на JavaScript:

// Рассмотрим пример, где мы создадим базовый класс Shape, и затем создадим классы-наследники
// Square, Triangle, и Circle, каждый из которых реализует метод calculateArea по-своему.

// Базовый класс
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

// 1. Shape — это абстрактный базовый класс, который определяет метод calculateArea,
// но не реализует его, тем самым заставляя дочерние классы предоставлять свою реализацию.

// 2. Square, Triangle, и Circle — это конкретные классы, которые наследуют
// от Shape и реализуют метод calculateArea для вычисления площади квадрата,
// треугольника и круга соответственно.

// 3. В массиве shapes содержатся объекты разных типов (Square, Triangle, Circle),
// но все они имеют общий метод calculateArea. Благодаря полиморфизму,
// мы можем вызывать этот метод для каждого объекта в массиве,
// и он будет работать корректно для каждого типа фигуры.
