// const mobiles = [
//   {
//     bard: "samsung",
//     price: 35600,
//     camera: "200mp",
//     color: "gray",
//     battery: 6000,
//   },
//   {
//     bard: "I-Phone",
//     price: 136000,
//     camera: "12mp",
//     color: "black",
//     battery: 5000,
//   },
//   {
//     bard: "Xiaomi",
//     price: 45000,
//     camera: "200mp",
//     color: "emerald",
//     battery: 6000,
//   },
//   {
//     bard: "Vivo",
//     price: 28500,
//     camera: "120mp",
//     color: "yellow",
//     battery: 4500,
//   },
//   {
//     bard: "Nokia",
//     price: 22500,
//     camera: "50mp",
//     color: "white",
//     battery: 5500,
//   },
// ];

// function getHighBudgetPhone(mobiles) {
//   let max = [0];
//   for (let val of mobiles) {
//     if (val.price > max) {
//       max = val.price;
//     }
//   }
//   return max;
// }

// let bestPhone = getHighBudgetPhone(mobiles);
// console.log(bestPhone);

/**
 * Get Cheapest Phone using javaScript
 */
const Phones = [
  {
    bard: "samsung",
    price: 35600,
    camera: "200mp",
    color: "gray",
    battery: 6000,
  },
  {
    bard: "I-Phone",
    price: 136000,
    camera: "12mp",
    color: "black",
    battery: 5000,
  },
  {
    bard: "Xiaomi",
    price: 45000,
    camera: "200mp",
    color: "emerald",
    battery: 6000,
  },
  {
    bard: "Vivo",
    price: 28500,
    camera: "120mp",
    color: "yellow",
    battery: 4500,
  },
  {
    bard: "Nokia",
    price: 22500,
    camera: "50mp",
    color: "white",
    battery: 5500,
  },
];

function getLowBudgetPhone(Phones) {
  let min = Phones[0];
  for (let value of Phones) {
    // console.log(value);
    if (value.price < min.price) {
      min = value;
      // console.log(value.price);
    }
  }
  return min;
}

let cheapestPhone = getLowBudgetPhone(Phones);
console.log(cheapestPhone);
