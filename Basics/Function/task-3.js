/**
 * Write a function called make_avg() which will take an array of integers and the size of that array and return the average of those values.
 */

function make_avg(array) {
  let total = 0;
  let avg = 0;
  for (val of array) {
    total = total + val;
    avg = total / array.length;
  }
  return avg;
}

let array = [12, 15, 25, 26, 32, 17];
let avgOfArray = make_avg(array);
console.log(avgOfArray.toFixed(2));
