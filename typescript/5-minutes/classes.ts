interface User {
  name: string;
  id: number;
}

class UserAccount implements User {
  name: string;
  id: number;

  constructor(name: string, id: number) {
    this.name = name;
    this.id = id;
  }
}

const user: User = new UserAccount("Murphy", 12);
console.log(user);

const otherUser: User = new UserAccount("Zero", 14);
console.log(otherUser);
