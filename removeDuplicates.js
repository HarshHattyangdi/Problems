const removeDuplicates = (nums) => {
  let newIndex = 0; //To be used as an external index;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === nums[newIndex]) {
      //If the next element is same as current then move to the next iteration
      continue;
    }
    newIndex++; //Increment the ecternal index every iteration even when the iteration is skipped.
    nums[newIndex] = nums[i]; //Swap the elements inplace
  }

  return newIndex + 1; //Return the number of times an element has been swapped+1 since we are starting at 0
};
