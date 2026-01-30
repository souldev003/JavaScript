// let marksOfStudents = [85, 97, 44, 37, 76, 60];

// // For loop
// let total = 0;
// for (let i = 1; i <= marksOfStudents.length; i++) {
//   total = total + marksOfStudents[i - 1];
// }

// let avarage = total / marksOfStudents.length;

// console.log(total);
// console.log(avarage);

// for of loop
let marksOfStudents = [85, 97, 44, 37, 76, 60];
// marksOfStudents.push(85);
// console.log(marksOfStudents);
let sum = 0;

for (marks of marksOfStudents) {
  sum = sum + marks;
}

let avarage = sum / marksOfStudents.length;

console.log(sum);
console.log(avarage.toFixed(2));
