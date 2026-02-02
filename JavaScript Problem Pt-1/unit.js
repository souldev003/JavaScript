/**
 * Remove Duplicate name or number
 */

const peoples = [
  "alex",
  "abdullah",
  "john",
  "khalid",
  "walker",
  "alex",
  "khalid",
  "john",
];

const numbers = [12, 77, 22, 13, 45, 23, 34, 77, 22];

function duplicateChecker(array) {
  let innocent = [];
  let imposter = [];
  for (let item of array) {
    if (innocent.includes(item) === false) {
      innocent.push(item);
    } else {
      imposter.push(item);
      //   console.log(`${item} is imposter bring them to jail :)`);
    }
  }
  return innocent;
  //   return unique;
}

let freshPeople = duplicateChecker(peoples);
let freshNumbers = duplicateChecker(numbers);

console.log(freshPeople, freshNumbers);
