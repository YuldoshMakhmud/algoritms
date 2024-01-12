function linearSearch(arr, target) {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] === target) {
        return i; // Return the index if the target is found
      }
    }
    return -1; // Return -1 if the target is not found in the array
  }
  
  // Example usage:
  const array = [5, 3, 8, 2, 10];
  const targetValue = 8;
  
  const result = linearSearch(array, targetValue);
  
  if (result !== -1) {
    console.log(`Target value ${targetValue} found at index ${result}.`);
  } else {
    console.log(`Target value ${targetValue} not found in the array.`);
  }
  


  