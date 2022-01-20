const moneyBox = (coins) => {
  let saveCoins = 0;
  saveCoins = saveCoins = coins;

  console.log(`Moneybox: $${saveCoins}`);
};

// moneyBox(5);
// moneyBox(15);

const newMoneyBox = () => {
  let savedCoins = 0;

  const countCoins = (coins) => {
    savedCoins = savedCoins + coins;
    console.log(`Moneybox: $ ${savedCoins}`);
  };

  return countCoins;
};

let myMoneybox = newMoneyBox();

myMoneybox(1); // 1
myMoneybox(2); // 3
myMoneybox(3); // 6
