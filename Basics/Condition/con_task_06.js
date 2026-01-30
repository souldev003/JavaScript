/***

Ticket fare Calculator
    - Children (age < 10): free
    - Students get a 50% discount
    - Senior citizens (age >= 60) gets a 15% Discount
    - Otherwise Regular ticket fare 800 tk
*/

let ticket1 = 800;
let isStudent1 = false;
let age1 = 12;

if (age1 < 10) {
  console.log(0);
} else if (isStudent1) {
  let studentDiscount = ticket1 - (ticket1 * 50) / 100;
  console.log(studentDiscount);
} else if (age1 >= 60) {
  let seniorDiscount = ticket1 - (ticket1 * 15) / 100;
  console.log(seniorDiscount);
} else {
  console.log(ticket1);
}

let ticket = 800;
let isStudent = false;
let age = 62;

let ticketPrice =
  age < 10
    ? 0
    : age >= 60
      ? ticket - (ticket * 15) / 100
      : isStudent
        ? ticket - (ticket * 50) / 100
        : ticket;

console.log(ticketPrice);
