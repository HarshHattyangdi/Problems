/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = (nums, k) => {
  k = k % nums.length; //Reduce the number of iterations by running the loop for just k%nums.length times

  for (let i = 0; i < k; i++) {
    const popped = nums.pop(); //Pop the last element from the array
    nums.unshift(popped); //Put the popped element to the start of the array
  }

  return nums;
};

console.log(rotate([1, 2, 3, 4, 5, 6, 7], 3));
