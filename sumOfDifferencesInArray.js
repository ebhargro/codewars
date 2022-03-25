//Instructions:
// Your task is to sum the differences between consecutive pairs in the array in descending order. 

function sumOfDifferences(arr) {
    // set global variable for array container
    let emptyArr = [];
    // check if array contains at least one element
    if (arr.length > 1) {
        // sort array in desc order
      const sortedArr = arr.reverse()
        // run a subtraction for each pair in the array 
      
      for (let i = 0; i <= sortedArr.length-2; i++) {
        const item = sortedArr[i];
        const itemNeighbor = sortedArr[i + 1];
        const subtractedPair = item - itemNeighbor;
        emptyArr.push(subtractedPair); 
      }
   
       // add the result of the subtraction 
      const addedPairs = emptyArr.reduce(function (previousValue, currentValue) {
    return previousValue + currentValue
  }, 0)
      
      //convert from array to num
      const finalNum = parseInt(addedPairs);
      
      //return final num
      return finalNum;
                                         
    } else return 0;
  
  }