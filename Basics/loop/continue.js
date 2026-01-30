let n = 0;

while (n < 100) {
  n++;
  if (n % 10 !== 0) {
    // console.log(n);
    continue;
  }
  console.log(n);
}
