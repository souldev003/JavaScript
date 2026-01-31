let marufBellah = {
  class: 6,
  age: 12,
  attitude: "Monkey",
  fav_food: "Burger",
  fav_place: "USA",
  leg: 4,
  "class roll": 1,
};

// console.log(marufBellah.'class roll');
console.log(marufBellah);

marufBellah.fav_food = "Kacci";
console.log(marufBellah.fav_food);

marufBellah["class roll"] = 9999;
console.log(marufBellah["class roll"]);

const favPlace = "fav_place";
marufBellah[favPlace] = "Canada";
console.log(marufBellah[favPlace]);
