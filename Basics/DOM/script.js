let btn1 = document.querySelector("#btn_1");

btn1.onclick = () => {
  console.log("btn1 was clicked");
  let a = 1;
  a++;
  console.log(a);
};

let box = document.querySelector("#box");

box.onmouseover = () => {
  console.log("you are inside the div");
};
