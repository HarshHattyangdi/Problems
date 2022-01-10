/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
const addBinary = (a, b) => {
  let res = ""; //Form a new resultant string
  let ai = a.length - 1;
  let bi = b.length - 1;

  let sum,
    carry = 0;
  while (ai >= 0 || bi >= 0) {
    sum = carry;
    if (ai >= 0) {
      sum += a[ai] - "0";
    }
    if (bi >= 0) {
      sum += b[bi] - "0";
    }

    res += (sum % 2).toString();

    carry = Math.floor(sum / 2);
    ai--;
    bi--;
  }
  if (carry !== 0) {
    res += "1";
  }
  return res.split("").reverse().join(""); //Need to reverse the resultant string as we get answer in the reverse format.
};
