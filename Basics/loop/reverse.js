let sentence = "I am learnnig JavaScript";

let reverse = "";

for (let i = 0; i < sentence.length; i++) {
  //   console.log(i);
  //   console.log(sentence[i]);
  let latter = sentence[i];
  reverse = latter + reverse;
}
console.log(reverse);

let reversed = sentence.split("").reverse().join("");

console.log(reversed);
