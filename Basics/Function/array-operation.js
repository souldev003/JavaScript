function sumOfNum(numbers) {
  let sum = 0;
  for (let num of numbers) {
    sum = sum + num;
    if (num % 2 === 0) {
      console.log(`This number is Even, This is: ${num}`);
    } else {
      console.log(`This number is Odd, This is: ${num}`);
    }
  }
  return `Sum of Number: ${sum}`;
}
let numbers = [15, 34, 53, 24, 29, 22, 45];
console.log(sumOfNum(numbers));
