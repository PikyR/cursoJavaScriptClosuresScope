var hello = "Hello!";
let world = "World!";
const helloWorld = "Hello world!";

const unaFuncion = () => {
  console.log(hello);
  console.log(world);
  console.log(helloWorld);
}

unaFuncion();

const holaMundo = () => {
  // se incurre en un error 
  // cuando no se le coloca 'let' o 'const' 
  // antes de la declaracion de la variable 'variableGlobal'
  variableGlobal = "Soy una variable global";
}

holaMundo();
// Por el error anterior podemos acceder a la variable 'variableGlobal'
// desde fuera del entorno de donde fue declarada
console.log(variableGlobal);


const otraFuncion = () => {
  // al igual que en el ejemplo anterior 
  // al no anteponer 'let' o 'const', se genera una variable global por error
  var variableLocal = otraVariableGlobal = "Tambien soy global";
}

otraFuncion();
console.log(otraVariableGlobal);