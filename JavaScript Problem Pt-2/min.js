const prices = [20000, 16500, 136000, 35999, 56500, 25400];

function getMin(price) {
  let lowestPrice = price[0];
  for (val of price) {
    if (val < lowestPrice) {
      lowestPrice = val;
    }
  }
  return lowestPrice;
}

const lowBudgetPhone = getMin(prices);
console.log(`The cheapest one is: ${lowBudgetPhone}`);
