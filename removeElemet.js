/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
let removeElement = (nums, val) => {
  for (let i = 0; i < nums.length; i++) {
    //Iterate through the array one element at a time
    if (nums[i] === val) {
      //If the current element matches the val
      nums.splice(i, 1); //Remove the item from the array
      i--; //Decrement the index so as to keep the array contiguous else the element will not be replaced and array will continue (basically we swap the element);
    }
  }

  return nums.length;
};
