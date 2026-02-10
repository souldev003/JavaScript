function getEvenNumbers(arr) {
  let evenNumbers = [];
  for (let number of arr) {
    if (number % 2 === 0) {
      evenNumbers.push(number);
    }
  }
  return evenNumbers;
}

const myNumbers = [1, 2, 3, 4, 5, 6];
console.log(getEvenNumbers(myNumbers));
