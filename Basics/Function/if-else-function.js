function isEvenOrOdd(num) {
  if (num % 2 === 0) {
    return `This number is: ${num}. This is even number.`;
  } else {
    return `This number is: ${num}. This is Odd number.`; // If function hit any return it won't work anymore it will stopped and return the command.
  }
}

let number = isEvenOrOdd(987548321587);
console.log(number);

console.log(isEvenOrOdd(45));
console.log(isEvenOrOdd(46));
console.log(isEvenOrOdd(30));
