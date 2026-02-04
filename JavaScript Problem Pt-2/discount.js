// Layer Discount

/**
 * First 100-- 100 Tk
 * 101 to 200 -- 90 Tk
 * above 200 -- 70 Tk
 */

function layerDiscount(quantity) {
  let firstCondition = 100;
  let secondCondition = 90;
  let thirdCondition = 70;

  if (quantity <= 100) {
    const total = quantity * firstCondition;
    return total;
  } else if (quantity <= 200) {
    let firstHundred = 100 * firstCondition;
    let remainingQnt = quantity - 100;
    let moreThanHundredPrice = remainingQnt * secondCondition;
    let totalPrice = firstHundred + moreThanHundredPrice;
    return totalPrice;
  } else if (quantity > 200) {
    const firstHundredPrice = 100 * firstCondition;
    const secondHundredPrice = 200 * secondCondition;
    const moreThanTwoHundredRemaining = quantity - 200;
    const moreThanTwoHundredPrice =
      moreThanTwoHundredRemaining * thirdCondition;
    const totalPrice =
      firstHundredPrice + secondHundredPrice + moreThanTwoHundredPrice;
    return totalPrice;
  }
}

let layerDiscountPrice = layerDiscount(201);
console.log(layerDiscountPrice);
