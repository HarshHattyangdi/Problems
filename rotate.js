/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = (nums, k) => {
  k = k % nums.length; //Reduce the number of iterations by running the loop for just k%nums.length times
  let arr = []; //Create an empty array
  for (let i = 0; i < nums.length; i++) {
    arr[(i + k) % nums.length] = nums[i]; //Traverse the nums array and simply store the element at the i+kth position of the new arr. Incase the i+kth position is greater than the size of the array, then the element must be stored at the position at sart which is returned by the (i_k)%nums.length
  }

  return arr;
};

console.log(rotate([1, 2, 3, 4, 5, 6, 7], 3));
