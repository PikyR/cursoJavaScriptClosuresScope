const person = () => {
  var savedName = "Pky";

  return {
    getName: () => {
      return savedName;
    },
    setName: (newName) => {
      return  savedName = newName;
    },
  };
};

const newPerson = person();
console.log(newPerson.getName());

newPerson.setName("Rafael");
console.log(newPerson.getName());