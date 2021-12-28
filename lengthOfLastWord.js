/**
 * @param {string} s
 * @return {number}
 */
const lengthOfLastWord = (s) => {
  let len = 0;
  for (let i = s.length - 1; i >= 0; i--) {
    //Iterate through the last item
    if (s[i] == " ") {
      //If blank space is encountered then continue to next iteration iff len is 0,i.e space is at the start of the string and break from the loop otherwise, i.e space is at the end of the string
      if (len == 0) {
        continue;
      } else {
        break;
      }
    }
    len++; //Increment lenth if no blank space is encountered.
  }

  return len;
};
