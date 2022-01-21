const anotherFunction = () => {
  for (var i = 0; i < 10; i++) {
    setTimeout(() => {
      console.log(i);
    }, 1000);
  }
};
// la palabra reservada 'var' se sobrescribe en cada iteracion del ciclo for
// y la funcion 'setTimeout' al ser una funcion asincrona recibel el ultimo valor de 'i'
// osea 10
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
// al utilizad 'let' para declarar 'j' por cada ciclo de for se genera un nuevo scope
// de esa manera retorna el resultado que se espera
andAnotherFunction();
// 0
// 1
// ...
// 9