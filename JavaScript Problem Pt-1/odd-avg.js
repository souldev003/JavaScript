function oddAvg(numbers) {
  let oddNum = [];
  for (num of array) {
    if (num % 2 !== 0) {
      oddNum.push(num);
    }
  }
  if (oddNum.length === 0) {
    return 0;
  }
  let oddSum = 0;
  for (num2 of oddNum) {
    oddSum = oddSum + num2;
  }
  let result = oddSum / oddNum.length;

  return result.toFixed(2);
}

let array = [22, 25, 14, 19, 29, 55, 34, 75];
let oddNumAvg = oddAvg(array);
console.log(`Average of odd numbers is: ${oddNumAvg}`);
