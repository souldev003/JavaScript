function getLowestNum(array) {
  let lowestNum = 0;
  for (num of array) {
    if (lowestNum < num) {
      lowestNum = num;
    } else {
      continue;
    }
  }
  return lowestNum;
}

const height = [167, 190, 120, 165, 137];
const lowestHeight = getLowestNum(height);
console.log(lowestHeight);
