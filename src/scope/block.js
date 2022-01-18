// Ej 1
const fruits = () => {
  if (true) {
    // 'var' brinda acceso a la variable en todo el ambito de la función
    var fruits1 = "apple";
    
    // En cambio 'let' y 'const' solo tienen acceso al ambito de bloque ({})
    let fruits2 = "banana";
    const fruits3 = "kiwi";
    
    console.log(fruits2);
    console.log(fruits3);
  }

  console.log(fruits1);
};

fruits();


// Ej 2

// el uso de la palabra reservada 'let'
// garantiza el scope tanto de bloque como el global
// osea, trata a las dos variales 'x' como distintas
let x = 1; 
{
  let x = 11;
  console.log(x);
}
console.log(x); 
// 11 
// 1

// en cambio 'var' reasigna el valor cuando la llamamos en el ambito de bloque
// y modifica el valor de la variable global 'y'
var y = 1; 
{
  var y = 11;
  console.log(y);
}
console.log(y); 
// 11
// 11


// Ej 3

const anotherFunction = () => {
  for (var i = 0;  i < 10; i++) {
    setTimeout(() => {
      console.log(i);
    }, 1000);
  }
};

anotherFunction();
// 10
// 10
// ...
// 10


const andAnotherFunction = () => {
  for (let j = 0;  j < 10; j++) {
    setTimeout(() => {
      console.log(j);
    }, 1000);
  }
};

andAnotherFunction();
// 0
// 1
// 2
// ...
// 9