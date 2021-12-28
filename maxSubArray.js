/**
 * @param {number[]} nums
 * @return {number}
 */
const maxSubArray = (nums) => {
  let max = Number.MIN_SAFE_INTEGER; //Let max be the least most number
  let sum = 0; //Let sum be 0 initially
  for (let i = 0; i < nums.length; i++) {
    //Loop through the element single element at a time
    sum += nums[i];

    if (sum > max) {
      //If sume is greater than max then store value of sum inside max
      max = sum;
    }

    if (sum < 0) {
      //When sum becomes less than 0, reset it as we only want sum that is the greatest, which will in turn continue the increment in sums
      sum = 0;
    }
  }

  return max;
};
