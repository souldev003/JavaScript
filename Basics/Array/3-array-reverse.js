let numbers = [1, 2, 3, 4, 5, 6, 7, 8];
// console.log(nums);

// let reversedNum = nums.reverse();
// console.log(reversedNum);

// const revNumber = [];
// for (const num of numbers) {
//   revNumber.unshift(num);
// }
// console.log(revNumber);
//
//
// let reverseNum = [];
// for (let i = 0; i < numbers.length; i++) {
//   let num = numbers[i];
//   reverseNum.unshift(num);
// }
// console.log(reverseNum);
//
// Reverse Reverse Number
//
let reverseNum = [];
for (let i = numbers.length - 1; i >= 0; i--) {
  let num = numbers[i];
  reverseNum.push(num);
  console.log(reverseNum);
}
