/**
 * Your task is to calculate the total budget required to buy electronics:

laptop = 35000 tk
tablet = 15000 tk
mobile = 20000 tk
Write a JavaScript function named calculateElectronicsBudget that takes in the number of laptop, tablets, and mobile and returns the total money required.
*/

function calculateElectronicsBudget(laptopNum, tabletNum, mobileNum) {
  const laptop = 35000;
  const tablet = 15000;
  const mobile = 20000;

  const result = laptop * laptopNum + tablet * tabletNum + mobile * mobileNum;

  return result;
}

const totalMoneyForElectronicsGadget = calculateElectronicsBudget(2, 5, 2);

console.log(totalMoneyForElectronicsGadget);
