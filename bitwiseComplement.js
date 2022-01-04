/**
 * @param {number} n
 * @return {number}
 */
const bitwiseComplement = (n) => {
  n = n.toString(2); //Convert number to binary string.
  let arr = n.split(""); //Split the resultant string into an array.

  for (let i = 0; i < arr.length; i++) {
    //Traverse the array change 0 to 1 and vice versa
    if (arr[i] == 0) {
      arr[i] = "1";
    } else {
      arr[i] = "0";
    }
  }

  n = arr.join(""); //Form new string fom the array
  return parseInt(n, 2); //Return integer for of the new string
};

console.log(bitwiseComplement(5));
