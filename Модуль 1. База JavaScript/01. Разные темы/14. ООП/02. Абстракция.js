// https://www.youtube.com/watch?v=-UI2NXz0LBs //12:00

// Абстракция — принцип отделения концепции(общего) от конкретной реализации
// Выделение общей сути, игнорирования деталей

// от GPT

// Абстракция — это принцип, позволяющий выделить общую суть или концепцию,
// скрывая сложные детали реализации. Это позволяет оперировать объектами
// на более высоком уровне, используя только необходимую информацию для взаимодействия.

// Пример на JavaScript:

class Shape {
  constructor(name) {
    this.name = name
  }

  getArea() {
    throw new Error("Method 'getArea()' must be implemented.")
  }

  getPerimeter() {
    throw new Error("Method 'getPerimeter()' must be implemented.")
  }
}

class Rectangle extends Shape {
  constructor(width, height) {
    super('Rectangle')
    this.width = width
    this.height = height
  }

  getArea() {
    return this.width * this.height
  }

  getPerimeter() {
    return 2 * (this.width + this.height)
  }
}

class Circle extends Shape {
  constructor(radius) {
    super('Circle')
    this.radius = radius
  }

  getArea() {
    return Math.PI * Math.pow(this.radius, 2)
  }

  getPerimeter() {
    return 2 * Math.PI * this.radius
  }
}

const rectangle = new Rectangle(10, 20)
console.log(`${rectangle.name} Area:`, rectangle.getArea()) // Rectangle Area: 200
console.log(`${rectangle.name} Perimeter:`, rectangle.getPerimeter()) // Rectangle Perimeter: 60

const circle = new Circle(10)
console.log(`${circle.name} Area:`, circle.getArea()) // Circle Area: 314.159...
console.log(`${circle.name} Perimeter:`, circle.getPerimeter()) // Circle Perimeter: 62.831...

// 1. Shape — абстрактный класс, который содержит общие методы getArea и getPerimeter.
// Эти методы только декларируются, но не реализуются, поскольку каждый тип фигуры имеет свою реализацию.

// 2. Rectangle и Circle — конкретные классы, которые наследуют от Shape
// и реализуют методы для расчета площади и периметра, специфичные для прямоугольника и круга.
