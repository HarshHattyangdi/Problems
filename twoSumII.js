/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (numbers, target) {
  let ans = [];

  for (let i = 0; i < numbers.length; i++) {
    //Outer loop keeps track of the current element of the array
    for (let j = i + 1; j < numbers.length; j++) {
      //Inner loops keeps track of the element while will be incrememented
      if (numbers[i] + numbers[j] === target) {
        ans = [i + 1, j + 1]; //Add i+1 and j+1 to the array as the array is 1-indexed
        break;
      }
    }
  }

  return ans;
};
