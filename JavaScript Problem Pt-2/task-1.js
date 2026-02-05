// Find the lowest number in the array below.
// const heights2 = [167, 190, 120, 165, 137];

function getLowestNum(array) {
  let lowestNum = array[0];
  for (num of array) {
    if (lowestNum > num) {
      lowestNum = num;
    }
  }
  return lowestNum;
}

const height = [167, 190, 120, 165, 137];
const lowestHeight = getLowestNum(height);
console.log(lowestHeight);

//Simple way without function
let newWay = Math.min(...height); // three dot for spread Operator
console.log(newWay);
