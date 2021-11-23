interface ProgrammerType {
  name: string;
  age: number;
  knownFor: string[];
}

class Programmer implements ProgrammerType {
  name: string;
  age: number;
  knownFor: string[];

  constructor({ name, age, knownFor }: ProgrammerType) {
    this.name = name;
    this.age = age;
    this.knownFor = knownFor;
  }
}

function createVirtualProgrammer(
  name: string,
  age: number,
  knownFor: string[],
): ProgrammerType {
  return { name, age, knownFor };
}

const ada: ProgrammerType = new Programmer({
  name: "Ada Lovelace",
  age: 36,
  knownFor: ["Mathematics", "Computing", "First Programmer"],
});

const zero = createVirtualProgrammer("Zero Requiem", 14, ["His Playground"]);

console.log(ada, zero);
