/**
 *
 */

let gadgets = [
  { id: 1, brand: "I-Phone 12 pro max", price: 136000 },
  { id: 2, brand: "Samsung S 24 Ultra", price: 136000 },
  { id: 3, brand: "Xiaomi Note 16 Pro Plus", price: 136000 },
  { id: 4, brand: "Vivo V 76 X-mas", price: 136000 },
  { id: 5, brand: "Huawei G-82 Ron", price: 136000 },
  { id: 6, brand: "Rog Phone 3", price: 136000 },
  { id: 7, brand: "Motorola M-19 pro Plus", price: 136000 },
];

function searchBer(products, searchItem) {
  let searchedItem = [];
  for (let product of products) {
    if (
      product.brand
        .toLowerCase()
        .trim()
        .includes(searchItem.toLowerCase().trim())
    ) {
      searchedItem.push(product);
    }
  }
  return searchedItem;
}

let search = searchBer(gadgets, " mas");
console.log(search);
