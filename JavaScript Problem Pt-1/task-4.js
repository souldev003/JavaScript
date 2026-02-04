//Write a function to find the longest word in a given string.

// sample-input: I am learning Programming to become a programmer

// sample-output: Programming

function getLongestWord(sentence) {
  let wordBox = sentence.split(" ");
  let longestWord = "";
  for (let word of wordBox) {
    if (word.length > longestWord.length) {
      longestWord = word;
    }
  }
  return longestWord;
}

let sentence =
  "I am learning programming to become a programmer. I like to solve problem using JavaScript.";

let findLongestWord = getLongestWord(sentence);
console.log(findLongestWord, findLongestWord.length);
