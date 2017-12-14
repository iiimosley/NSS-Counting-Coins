let input = document.getElementById("input");
let button = document.getElementById("convert");
button.addEventListener("click", coinCounter);

function coinCounter() {
  let coinPurse = {};
  let goingTotal = 0;
  coinPurse.quarters = Math.floor(input.value / .25);
  console.log("starting total:", input.value);
  console.log("quarter coint:", coinPurse.quarters*.25);
  goingTotal = input.value - (coinPurse.quarters*.25);
  console.log("post quarter deduc:", goingTotal);
  coinPurse.dimes = Math.floor(goingTotal/.1);
  goingTotal = goingTotal - (coinPurse.dimes * .1);
  console.log("post dime deduc:", goingTotal);
  coinPurse.nickels = Math.floor(goingTotal / .05);
  goingTotal = goingTotal - (coinPurse.nickels * .05);
  coinPurse.pennies = Math.round(goingTotal / .01);
  goingTotal = goingTotal - (coinPurse.pennies * .01);
  console.log(coinPurse);
};


