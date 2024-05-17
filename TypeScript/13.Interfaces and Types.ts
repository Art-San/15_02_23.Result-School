interface IPoint {
  x: number
  y: number
}

interface I3DPoint extends IPoint {
  z: number
}

type stringOrNumber1 = string | number

function print(coord: IPoint) {}

interface ITest {
  a: number
}
interface ITest {
  b: number
}

function print1(coord: ITest) {}

const cix = (point: IPoint) => {
  const d: I3DPoint = point as I3DPoint
}

const myCanvas = document.getElementById('canvas') as HTMLCanvasElement
//========================================
type Point5 = {
  x: number
  y: number
}

type D3Point = Point5 & {
  z: number
}
type stringOrNumber = string | number

function print(coord: D3Point) {
  coord.y
}
