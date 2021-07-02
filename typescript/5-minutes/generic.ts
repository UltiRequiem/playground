type StringArray = Array<string>;
type NumberArray = Array<number>;
type ObjectWithNameArray = Array<{ name: string }>;

const WORDS: StringArray = ['food', 'about', 'good'];
const NUMBERS: NumberArray = [1, 2, 3, 4, 5];
const PERSONS: ObjectWithNameArray = [{ name: 'Zero' }, { name: 'Lino' }];

console.log(WORDS);
console.log(NUMBERS);
console.log(PERSONS)
