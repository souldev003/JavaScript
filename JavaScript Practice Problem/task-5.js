let textStr = "I love JavaScript, and Programming.";
// let newString = textStr.replace(/,./g, " ");
// console.log(newString);

function stringLength(str) {
  let textSentence = str.split(" ");
  return textSentence.length;
}

console.log(stringLength(textStr));
