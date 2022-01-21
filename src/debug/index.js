var a = "hello"; 

function hello() {
  let b = "Hello world";
  const c = "Hello coso";

  if (true) {
    let d = "Hello cosito";
    debugger;
  }
}

hello();



const newMoneyBox = () => {
  debugger;
  let savedCoins = 0;

  const countCoins = (coins) => {
    debugger;
    savedCoins = savedCoins + coins;
    console.log(`Moneybox: $ ${savedCoins}`);
  };

  return countCoins;
};

let myMoneybox = newMoneyBox();

myMoneybox(1); 
myMoneybox(2); 
myMoneybox(3);