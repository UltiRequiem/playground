type Programmer = {
  name: string;
  knownFor: string[];
};

const ada: Programmer = {
  name: 'Ada Lovelace',
  knownFor: ['Mathematics', 'Computing', 'First Programmer'],
};

const zero: Programmer = {
  name: 'Zero Requiem',
  knownFor: ['His Playground'],
};

console.log(ada, zero);
