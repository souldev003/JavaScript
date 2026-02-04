function numFinder(array, num) {
  let count = 0;
  for (let value of array) {
    if (value === num) {
      count++;
    }
  }
  return count;
}

let marks = [12, 21, 33, 21, 55, 31, 34, 87];
let findNumber = numFinder(marks, 87);
console.log(findNumber);
