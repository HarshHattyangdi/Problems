/**
 * @param {number} n
 * @return {number}
 */
const bitwiseComplement = (n) => {
  if (n === 0) {
    return 1;
  } else {
    const bits = Math.floor(Math.log2(n) + 1); //Number of bits in a number is equal to Log2(n)+1
    return (Math.pow(2, bits) - 1) ^ n; //XOR'ing the 2^number gives the 1's complement of the number
  }
};

console.log(bitwiseComplement(5));
