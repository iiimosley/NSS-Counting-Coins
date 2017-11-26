function coinCounter () {
    var coinPurse = {
        quarters: 2,
        dimes: 1,
        nickels: 1,
        pennies: 2
      };
    coinPurse.quarters = coinPurse.quarters*.25;
    coinPurse.dimes = coinPurse.dimes*.10;
    coinPurse.nickels = coinPurse.nickels*.05;
    coinPurse.pennies = coinPurse.pennies*.01;
    return coinPurse.quarters + coinPurse.dimes + coinPurse.nickels + coinPurse.pennies;
  };

  var coins = coinCounter();
  console.log(coins);