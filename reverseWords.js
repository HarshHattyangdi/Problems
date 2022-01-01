/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
const reverseWords = (s) => {
  console.log("inside reverse words");
  s = s.split(" ");
  console.log(`s:`, s);
  for (let word = 0; word < s.length; word++) {
    s[word] = reverseString(s[word]);
  }

  return s.join(" ");
};

const reverseString = (s) => {
  console.log("Inside reverse function");
  s = s.split("");
  let start = 0;
  let end = s.length - 1;

  while (start < end) {
    const temp = s[start];
    s[start] = s[end];
    s[end] = temp;
    start++;
    end--;
  }

  return s.join("");
};

console.log(reverseWords("hello world"));
