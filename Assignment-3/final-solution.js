//Problem-01: New Price for Eid Sale
function newPrice(currentPrice, discount) {
  if (
    typeof discount !== "number" ||
    typeof currentPrice !== "number" ||
    discount < 0 ||
    discount > 100
  ) {
    return "Invalid";
  }
  const discountPrice = (currentPrice * discount) / 100;
  const priceAfterDiscount = currentPrice - discountPrice;
  return priceAfterDiscount.toFixed(3);
}

//Problem-02: OTP Validation for Zapshift
function validOtp(otp) {
  if (typeof otp !== "string") {
    return "Invalid";
  }

  if (otp.startsWith("ph-") && otp.length === 8) {
    return true;
  }

  return false;
}

//Problem-03: BCS Final Score Calculator
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

//Problem-04: Upcoming Gono Vote
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

//Problem-05: Text Analyzer for an AI Company
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
