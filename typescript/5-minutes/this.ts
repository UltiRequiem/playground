interface Person {
  name: string;
  age: number;
  greet(greeting?: string): void;
}

export default function createPerson(name: string, age: number): Person {
  return {
    name,
    age,
    greet(greeting = "Hola") {
      console.log(`${greeting} ${this.name}. You're ${this.age} years old.`);
    },
  };
}

const jane = createPerson("Jane", 25);

jane.greet();
