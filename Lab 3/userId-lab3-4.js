function celsiusToFahrenheit(celsius) {
  let parsed = parseFloat(celsius) // introduce parsing for string inputs
  let fahrenheit = (parsed * 9/5) + 32;
  return fahrenheit.toFixed(1); // round answer to one decimal place 
}

// Testing time
let testValues = [-20, 5, 80, '35', '57'];
testValues.forEach(temp => 
  console.log('\nCelsius: ' + parseFloat(temp).toFixed(1) + '\nFahrenheit: ' + celsiusToFahrenheit(temp)));
