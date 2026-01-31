function add(price1, price2) {
  const total = price1 + price2;
  return total;
}

const bill = add(100, 523);
console.log(bill);

//Function short hand
function difference(value1, value2) {
  return value1 - value2;
}

let minus = difference(1254, 125);
console.log(minus);

//Doing multiple job using function
function doSomeMath(num1, num2) {
  const add = num1 + num2;
  const min = add - num2;
  const value = min * add;
  const result = value / min;
  return result;
}

let idk = doSomeMath(12, 10);
console.log(idk);
