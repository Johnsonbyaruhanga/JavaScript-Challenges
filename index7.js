//Number 7
function containsDuplicate(nums){
  // we can store the duplicate elements as we iterate through the array
  const duplicateSet = new Set();

  for(const num of nums){
    //if the set already has the current element, its duplicate
    if(duplicateSet.has(num)){
      return true;
    }
    // if not add current element to the duplicateSet
    duplicateSet.add(num);
  }

  return false;
}

const inputArray =[3,1,2,5,8,2];
console.log(containsDuplicate(inputArray));