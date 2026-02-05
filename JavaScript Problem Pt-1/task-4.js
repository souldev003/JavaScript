//Write a function to find the longest word in a given string.

// sample-input: I am learning Programming to become a programmer

// sample-output: Programming

function getLongestWord(sentence) {
  let wordBox = sentence.split(" ");
  let longestWord = "";
  for (let word of wordBox) {
    let cleanWord = word.replace(/[.,]/g, "");
    if (cleanWord.length > longestWord.length) {
      longestWord = cleanWord;
    }
  }
  return longestWord;
}

let sentence =
  "I am learning programming to become a programmer. I like to solve problem using JavaScript.";

let findLongestWord = getLongestWord(sentence);
console.log(findLongestWord, findLongestWord.length);
