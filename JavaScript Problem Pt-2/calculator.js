function addition(num1, num2) {
  return num1 + num2;
}

function subtraction(num1, num2) {
  return num1 - num2;
}

function multiplication(num1, num2) {
  return num1 * num2;
}

function division(num1, num2) {
  return num1 / num2;
}

function calculator(x, operation, y) {
  if (operation === "+") {
    const result = addition(x, y); // readable, and clean. Good Practice
    return result;
  } else if (operation === "-") {
    return subtraction(x, y); //Shortcut way. Bad Practice
  } else if (operation === "*") {
    return multiplication(x, y);
  } else if (operation === "/") {
    return division(x, y);
  } else {
    return "Please provide valid number and valid operation. Ex:(5, 10, '-').";
  }
}

let number = calculator(2048, "+", 2048);
console.log(number);
