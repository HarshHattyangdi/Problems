/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function (nums, target) {
  let start = 0,
    end = nums.length - 1,
    mid;

  if (!nums.length) return 0; //If Nums is empty return 0

  while (start <= end) {
    //Iterate till start and end dont cross
    mid = Math.floor((start + end) / 2); //Mid changes every iteration
    if (nums[mid] === target) return mid;
    //IF target is found retrun mid
    else if (target > nums[mid]) start = mid + 1;
    //Set start to mid+1
    else end = mid - 1; //Set end to mid-1;
  }
  return target > nums[mid] ? mid + 1 : mid; //If target is greater than nums[mid] then return mid+1; else return mid;
};
