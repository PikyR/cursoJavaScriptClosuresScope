// HOISTING
// levantamiento de las declaraciones

//ej 1
a = 22;
var a;
console.log(a); // 22

// al momento de que se compila el codifo el hoistin genera lo siguiente
// levanta la declaracion de la 'a'
/*
  var a; 
  a = 22;
  console.log(a);
*/

// ej 2

printName("Pky");

function printName(name) {
  console.log(name);
}
// Pky

// al compilar el codigo la función se guarda en memoria 
// y luego se ejecuta el llamado, por eso se obtiene el resultado esperado