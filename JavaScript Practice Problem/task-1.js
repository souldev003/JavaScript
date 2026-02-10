// একটি ফাংশন লিখুন যা একটি Array of numbers প্যারামিটার হিসেবে নিবে এবং ওই অ্যারে থেকে সবচেয়ে বড় সংখ্যাটি (Largest Number) রিটার্ন করবে।

function findLargestNumber(array) {
  let newArray = array[0];
  for (let numb of array) {
    if (numb > newArray) {
      newArray = numb;
    }
  }
  return newArray;
}

let arrayOfNumb = [10, 5, 8, 20, 3];
let longestNumber = findLargestNumber(arrayOfNumb);

console.log(longestNumber);

// একটি ফাংশন লিখুন যা একটি স্ট্রিং প্যারামিটার হিসেবে নিবে এবং স্ট্রিংটি উল্টো করে (Reverse) রিটার্ন করবে।

function reverseString(str) {
  let reverseText = "";

  for (let text of str) {
    reverseText = text + reverseText;
  }
  return reverseText;
}

let text = "Hello";
let reversedText = reverseString(text);

console.log(reversedText);

/* একটি ফাংশন লিখুন যা একটি অ্যারে থেকে শুধু জোড় সংখ্যাগুলো (Even Numbers) আলাদা করে একটি নতুন অ্যারে রিটার্ন করবে। */

function filterEvenNumbers(arr) {
  let evenNumber = [];
  for (let number of arr) {
    if (number % 2 === 0) {
      evenNumber.push(number);
    }
  }
  return evenNumber;
}

let numbers = [1, 2, 3, 4, 5, 6];
let evenNumbers = filterEvenNumbers(numbers);

console.log(evenNumbers);
