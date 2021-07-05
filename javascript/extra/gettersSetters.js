const person = (name) => {
  let myName = name;

  return {
    get name() {
      return myName;
    },

    set name(value) {
      myName = value;
    },
  };
};

const newPerson = person('Pedro');
console.log(newPerson.name);
newPerson.name = 'Jousmo';
console.log(newPerson.name);
