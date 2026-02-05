/**
 * Leap Year Condition Formula:
 */
function isLeapYear(year) {
  if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
    return `${year} is leap year.`;
  } else {
    return `${year} isn't leap year.`;
  }
}

let leapYear = isLeapYear(1900);
console.log(leapYear);
