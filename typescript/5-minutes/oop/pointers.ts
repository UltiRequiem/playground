interface Pointlike {
  x: number;
  y: number;
}

interface Named {
  name: string;
}

function logPoint(point: Pointlike) {
  console.log(`x = ${point.x}, y = ${point.y}`);
}

function logName(x: Named) {
  console.log(`Hello, ${x.name}`);
}

const obj = {
  x: 0,
  y: 0,
  name: 'Origin',
};

logPoint(obj);
logName(obj);
