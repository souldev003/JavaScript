/*Problem-4: Solution Below */
function gonoVote(array) {
  if (Array.isArray(array)) {
    let yesCount = 0;
    let noCount = 0;
    for (let vote of array) {
      if (vote === "ha") {
        yesCount++;
        // vote++;
      } else if (vote === "na") {
        noCount++;
        // vote++;
      }
    }

    //output condition
    if (yesCount > noCount) {
      return true;
    } else if (yesCount < noCount) {
      return false;
    } else if (yesCount === noCount) {
      return "equal";
    }
    return (yesCount, noCount);
  } else {
    return "Invalid";
  }
}

const voteBox = ["ha", "ha", "ha", "na"];

const voteResult = gonoVote(voteBox);
console.log(voteResult);
