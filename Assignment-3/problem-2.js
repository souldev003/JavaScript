/*Problem-2: Solution Below */
function validOtp(otp) {
  if (typeof otp !== "string") {
    return "Invalid";
  }

  if (otp.startsWith("ph-") && otp.length === 8) {
    return true;
  }

  return false;
}

let array = ["ph-12345"];
let otpChecker = validOtp(array);
console.log(otpChecker);
