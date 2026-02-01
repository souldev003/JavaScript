/**
 * For a given string tell me whether it has even number char or not
 */

function stringType(str) {
  let stringSize = 0;
  for (let i = 0; i < str.length; i++) {
    // console.log(i);
    stringSize = str.length;
  }
  if (stringSize % 2 === 0) {
    console.log(`This is Even Sized String`);
  } else {
    console.log(`This is Odd Sized String`);
  }
  return `String size is: ${stringSize}.`;
}

let idk = stringType("Mehrab");
console.log(idk);
