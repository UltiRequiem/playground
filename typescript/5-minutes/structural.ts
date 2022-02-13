interface Point {
  x: number;
  y: number;
}

class Point {
  constructor(public x: number, public y: number) {}
}

function logPoint(p: Point) {
  console.log(`${p.x}, ${p.y}`);
}

const myPoint: Point = { x: 12, y: 26 };
logPoint(myPoint);

const point3 = { x: 12, y: 26, z: 89 };
logPoint(point3);

const rect = { x: 33, y: 3, width: 30, height: 80 };
logPoint(rect);

logPoint(new Point(13, 56));
