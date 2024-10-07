function sortNumbers(numbers) {
    return numbers.sort((a, b) => a - b);
    //if negative -> a before b, positive -> a after b, zero -> a and b are equal
  }
  
  // Testing time
  let testArrays = [
    [3, 1, 4, 1, 5, 9],
    [10, 20, -5, 30, -10, 40],
    [7, 6, -5, 4, 3, 2, 1]
  ];
  
  testArrays.forEach(arr => {
    console.log('\nOriginal Array: ' + arr);
    console.log('Sorted Array: ' + sortNumbers(arr));
  });
  