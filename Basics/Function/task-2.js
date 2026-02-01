/**
 *Take a number if the number is odd multiply it by 2 and return the result. If the number is even divide it by two and return the result.
 *
 */
function numCalc(num) {
  if (num % 2 !== 0) {
    sum = num * 2;
    return `The number is Odd, That's why the double of the number is: ${sum}`;
  } else {
    sum = num / 2;
    return `The number is Even. That's why the half of the number is: ${sum}`;
  }
}

let num = numCalc(5);
console.log(num);
