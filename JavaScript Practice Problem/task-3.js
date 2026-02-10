let numbers = [10, 5, 25, 8, 15];

function maxNumber(numbers) {
  let newNumber = numbers[0];
  for (let num of numbers) {
    if (num > newNumber) {
      newNumber = num;
    }
  }
  return newNumber;
}

let findMaxNumber = maxNumber(numbers);
console.log(findMaxNumber);
