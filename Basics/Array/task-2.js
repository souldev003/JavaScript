const numbers = [12, 98, 5, 41, 23, 78, 46];

/* Using For of loop */
// for (num of numbers) {
//   if (num % 2 === 0) {
//     console.log(num);
//   }
// }
/* Using For Loop */
// let evenNum = [];
// for (let i = 0; i < numbers.length; i++) {
//   evenNum = numbers[i];
//   if (evenNum % 2 === 0) {
//     console.log(evenNum);
//   }
// }

let i = 0;
while (i < numbers.length) {
  let evenNum = numbers[i];
  if (evenNum % 2 === 0) {
    console.log(evenNum);
  }
  i++;
}
