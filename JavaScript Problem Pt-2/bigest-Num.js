const numbers = [23, 45, 12, 65, 21, 87, 32, 56, 79, 87, 92, 12];

function getMax(numbers) {
  let biggestNum = [0];
  for (num of numbers) {
    if (num > biggestNum) {
      biggestNum = num;
    }
  }
  return biggestNum;
}

let bigNum = getMax(numbers);
console.log(`The biggest number is: ${bigNum}`);

let numbs = [23, 45, 12, 65, 21, 87, 32, 56, 79, 87, 92, 12];

function getMin(number) {
  let minNum = number[0];
  for (numb of number) {
    if (numb < minNum) {
      minNum = numb;
    }
  }
  return minNum;
}

let minNum = getMin(numbs);
console.log(`The lowest number is: ${minNum}`);
