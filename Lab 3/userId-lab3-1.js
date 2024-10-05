function minMaxAverage(numbers) {
    let totalNumbers = numbers.length;
    let minValue = Math.min.apply(null, numbers); // I wanted to use the spread(...) operator but it seems like IE 11 still doesnt support ECMAScript 6
    let maxValue = Math.max.apply(null, numbers); // This applies the max function to each element in the numbers array
    let sum = numbers.reduce((acc, val) => acc + val, 0);
    let average = (sum / totalNumbers).toFixed(2);
    
    console.log('Total Numbers: '+ totalNumbers + ', Min Value: ' + minValue + ', Max Value: ' + maxValue + ', Average: ' + average + '\n');
    return [totalNumbers, minValue, maxValue, average];
  }
  
  // Testing time
  const verify = (array1, array2) =>
    array2.every((element) => array1.includes(element)); // quick function to verify if simple arrays are equal
 
  console.log('Test 1:')
  console.assert(verify(minMaxAverage([2, 5, 23, 6, 9, 4, 30, 1]), [8, 1, 30, '10.00']), 'Test 1 failed!'); //this returns an error message if the results are incorrect 
  console.log('Test 2:')
  console.assert(verify(minMaxAverage([10, 20, 30, 40, 50]), [5, 10, 50, '30.00']), 'Test 2 failed!');
  console.log('Test 3:')
  console.assert(verify(minMaxAverage([100, -50, 200, -100, 50, 0]), [6, -100, 200, '33.33']), 'Test 3 failed!');
  