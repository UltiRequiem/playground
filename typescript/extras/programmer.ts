interface Programmer {
  name: string;
  age: number;
  knownFor: string[];
}

class Programmer {
  constructor(
    public name: string,
    public age: number,
    public knownFor: string[],
  ) {}
}

function createIProgrammer(
  name: string,
  age: number,
  knownFor: string[],
): Programmer {
  return { name, age, knownFor };
}

const ada = new Programmer("Ada Lovelace", 36, [
  "Mathematics",
  "Computing",
  "First Programmer",
]);

const zero = createIProgrammer("Zero Requiem", 14, ["His Playground"]);

console.log(ada, "\n\n", zero);
