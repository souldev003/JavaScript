function celsiusToFahrenheit(celsius) {
  let fahrenheit = celsius * 1.8 + 32;
  return fahrenheit;
}

let fahrenheitScale = celsiusToFahrenheit(1);
console.log(fahrenheitScale);
