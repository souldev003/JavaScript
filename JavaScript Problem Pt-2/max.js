const disha = 89;
const salman = 90;
function getMax(param1, param2) {
  if (param1 > param2) {
    return param1;
  } else {
    return param2;
  }
}

let max1 = getMax(70, 86);
let max2 = getMax(89, 67);
let ultraMax = getMax(max1, max2);
console.log(max1, max2, ultraMax);
