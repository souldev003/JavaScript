// let person = ["Mehrab", "Maruf", "Mitu", "Solaiman", "Safwan"];
// let sortedPerson = person.sort(); // Sm - Lg Sajiye likhte sort use kora hoy

// console.log(sortedPerson);

// let numbers = [2, 1, 7, 5, 8, 4, 3];

// let num = numbers.sort(); // Ascending (sm - lg) te sajanor jonno "sort()"
// console.log(num);

let numbers = [2, 1, 7, 25, 812, 4, 300];

let num = [...numbers].sort(function (a, b) {
  return a - b;
});
let reverseNum = [...numbers].sort(function (a, b) {
  return b - a;
});
console.log(num);
console.log(reverseNum);
