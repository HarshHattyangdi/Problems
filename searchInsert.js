const searchInsert = (nums, target) => {
  let count = 0; //Define count and set it to 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] < target) count++; //Incrememnt the count everytime we skip the position as current element is less than the target
  }

  return count;
};
