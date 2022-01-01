/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
const reverseString = (s) => {
  let start = 0;
  let end = s.length - 1;

  while (start < end) {
    const temp = s[start];
    s[start] = s[end];
    s[end] = temp;
    start++;
    end--;
  }

  return s;
};

console.log(reverseString(["h", "e", "l", "l", "o"]));
