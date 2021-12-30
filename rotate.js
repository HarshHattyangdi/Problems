/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
const rotate = (nums, k) => {
  k = k % nums.length; //Reduce the number of iterations by running the loop for just k%nums.length times

  reverse(nums, 0, nums.length - 1); //Entirely reverse the array
  reverse(nums, 0, k - 1); //Reverse the first k elements of the reversed array
  reverse(nums, k, nums.length - 1); //Reverse the remaining elements of the resulting array

  const reverse = (nums, start, end) => {
    while (start < end) {
      //Simplet swap function
      let temp = nums[start];
      nums[start] = nums[end];
      nums[end] = temp;
      start++; //Increase start
      end--; //Decreae end
    }

    return nums;
  };
};

console.log(rotate([1, 2, 3, 4, 5, 6, 7], 3));
