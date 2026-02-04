const products = [
  {
    name: "shampoo",
    price: 300,
    quantity: 2,
  },
  {
    name: "Mirror",
    price: 500,
    quantity: 1,
  },
  {
    name: "Chocolate",
    price: 700,
    quantity: 4,
  },
  {
    name: "Flowers",
    price: 200,
    quantity: 6,
  },
];

function cartTotal(products) {
  let sum = 0;
  for (const product of products) {
    const productsCost = product.price * product.quantity;
    sum = sum + productsCost;
  }
  return sum;
}

const totalCosts = cartTotal(products);
console.log(totalCosts);
