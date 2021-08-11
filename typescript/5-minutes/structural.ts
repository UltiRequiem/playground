interface Point {
  x: number
  y: number
}

class VirtualPoint {
  x: number

  y: number

  constructor(x: number, y: number) {
    this.x = x
    this.y = y
  }
}

function logPoint(p: Point) {
  console.log(`${p.x}, ${p.y}`)
}

const myPoint: Point = { x: 12, y: 26 }
logPoint(myPoint)

const point3 = { x: 12, y: 26, z: 89 }
logPoint(point3)

const rect = { x: 33, y: 3, width: 30, height: 80 }
logPoint(rect)

logPoint(new VirtualPoint(13, 56))
