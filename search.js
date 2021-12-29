var search = (nums, target) => {
  let start = 0;
  let end = nums.length - 1;

  while (start <= end) {
    //Iterate till start and end dont cross each other
    let mid = Math.floor((start + end) / 2); //Mid changes every iteration

    if (nums[mid] === target) return mid;
    //If target is found return mid;
    else if (nums[mid] < target) start = mid + 1;
    //If target is greater than element at mid set start to mid+1;
    else end = mid - 1; //Set end to mid-1;
  }

  return -1; //Incase element is not found
};
