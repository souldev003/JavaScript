function wordFinder(str, latter) {
  let count = 0;
  for (let word of str) {
    if (latter === word) {
      count++;
    }
  }
  return count;
}

let newString = "I like to solve problem with JavaScript";
let wordFound = wordFinder(newString, "a");
console.log(wordFound);
