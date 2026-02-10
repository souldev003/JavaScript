/*Problem-3: Solution Below */
function finalScore(omr) {
  if (typeof omr !== "object") {
    return "Invalid";
  }
  if (omr.right + omr.wrong + omr.skip === 100) {
    const totalRightMarks = omr.right;
    const totalWrongMarks = omr.wrong * 0.5;

    const finalMarks = totalRightMarks - totalWrongMarks;
    return Math.round(finalMarks);
  } else {
    return "Invalid";
  }
}

const omrMarks = { right: 67, wrong: 23, skip: 10 };

// const omrMarks = [{ right: 67, wrong: 23, skip: 10 }];

let omrMarkCount = finalScore(omrMarks);
console.log(omrMarkCount);

// let number = finalScore(25);
// console.log(number);
