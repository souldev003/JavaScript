const products = [
  {
    name: "shampoo",
    price: 300,
  },
  {
    name: "Mirror",
    price: 500,
  },
  {
    name: "Chocolate",
    price: 700,
  },
  {
    name: "Flowers",
    price: 200,
  },
];

function totalCosts(products) {
  let sum = 0;
  for (let product of products) {
    sum = sum + product.price;
    // console.log(product);
  }
  return sum;
}

const todayCostsForShopping = totalCosts(products);
console.log(`Total costs in market today: ${todayCostsForShopping}`);
