const helloWorld = () => {
  const hello = "Hello World";
  console.log(hello);
};

helloWorld();

// console.log(hello);

var scope = "Soy global";

const functionScope = () => {
  var scope = "Ahora soy local"

  const func = () => {
    return scope;
  }

  console.log(func());
};

functionScope();
console.log(scope);