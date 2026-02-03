function maxOfThree(param1, param2, param3) {
  if (param1 > param2 && param1 > param3) {
    return param1;
  } else if (param2 > param1 && param2 > param3) {
    return param2;
  } else {
    return param3;
  }
}

let marks = maxOfThree(88, 86, 89);
console.log(marks);
