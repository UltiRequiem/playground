interface User {
  name: string;
  id: number;
}

class User {
  constructor(public name: string, public id: number) {}
}

console.log(new User("Murphy", 12));
console.log(new User("Zero", 15));
