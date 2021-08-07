type Programmer = {
  name: string;
  age: number;
  knownFor: string[];
};

const ada: Programmer = {
  name: 'Ada Lovelace',
  age: 36,
  knownFor: ['Mathematics', 'Computing', 'First Programmer'],
};

const zero: Programmer = {
  name: 'Zero Requiem',
  age: 14,
  knownFor: ['His Playground'],
};

console.log(ada, zero);
