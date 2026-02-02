// Inch to feet Number

// function inchToFeet(inch) {
//   let feet = inch / 12;
//   return feet;
// }

// let myHeight = inchToFeet(74);
// console.log(myHeight.toFixed(2));

//Height Measurement With Function

// function inchToFeet(inch) {
//   let feet = inch / 12;
//   feet2Digit = parseInt(feet);

//   let rtnInch = inch % 12;
//   rtnInch.toFixed(2);
//   return `${feet2Digit} Feet ${rtnInch} Inch`;
// }

// let myHeight = inchToFeet(72);
// console.log(myHeight);

// Mile to Km
function mileToKm(mile) {
  const kilo = mile * 1.60934;
  return kilo;
}

let mile = mileToKm(50);
console.log(mile);
