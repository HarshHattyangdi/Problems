/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
const moveZeroes = (nums) => {
  let current = 0; //Current will act as an external index
  for (let i = 0; i < nums.length; i++) {
    //Iterate through the array
    if (nums[i] !== 0) {
      //If current element is not zero
      nums[current++] = nums[i]; //Store the current element to the current index(swap two elements in place) and increment current index; We do this to keep a count of how many non zero elements are present and keep on incrmenting the value of current till our array is traversed.
    }
  }

  for (let i = current; i < nums.length; i++) {
    //Here we make the remaining elements of the array as 0;
    nums[i] = 0;
  }

  return nums;
};

console.log(moveZeroes([0, 1, 0, 3, 12]));
