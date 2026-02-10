/*Problem-5: Solution Below*/
function analyzeText(str) {
  if (typeof str === "string") {
    if (str.trim().length === 0) {
      return "Invalid";
    }
    let newArray = str.split(" ");
    let i = newArray[0];
    let countToken = 0;

    //for longWord
    for (let word of newArray) {
      if (word.length > i.length) {
        i = word;
      }
    }

    // for Token
    let newString = str.split(" ").join("");
    for (let words of newString) {
      countToken++;
    }

    let output = { longwords: i, token: countToken };
    return output;
  } else {
    return "Invalid";
  }
}

const text = "   ";
const textAnalyzer = analyzeText(text);
console.log(textAnalyzer);
