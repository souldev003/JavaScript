/*Problem-1: Solution below*/
function newPrice(currentPrice, discount) {
  if (
    typeof discount !== "number" ||
    typeof currentPrice !== "number" ||
    discount < 0 ||
    discount > 100
  ) {
    return "Invalid";
  }
  const discountPrice = (currentPrice * discount) / 100;
  const priceAfterDiscount = currentPrice - discountPrice;
  return priceAfterDiscount.toFixed(3);
}
/**
 *
 *
 *
 *
 *
 *
 */
let discountPrice = newPrice(1500, 100);
console.log(discountPrice);
