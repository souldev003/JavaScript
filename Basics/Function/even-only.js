/**
 * create a function that will return only the even num
 *function will return the sum of even numbers
 */

function isEvenNum(numbers) {
  let evenNum = 0;
  for (let num of numbers) {
    if (num % 2 === 0) {
      console.log(`The even number is: ${num}`);
      evenNum = evenNum + num;
    } else {
      continue;
    }
  }
  return `Total even number sum is: ${evenNum}`;
}

let numbers = [12, 32, 35, 65, 23, 22, 46, 55, 12, 21];
let evenNum = isEvenNum(numbers); // numbers array ke isEvenNum function er moddhe pathiye dilam.
console.log(evenNum);
