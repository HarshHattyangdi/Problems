/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = (nums) => {
  return nums
    .map((el) => el * el)
    .sort((a, b) => {
      return a - b; //Naive approach to return squres using map, and sort them in ascending order
    });
};
