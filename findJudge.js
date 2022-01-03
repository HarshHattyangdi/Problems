/**
 * @param {number} n
 * @param {number[][]} trust
 * @return {number}
 */
const findJudge = (n, trust) => {
  const trusted = new Array(n + 1).fill(0); //Create a trusted array of size n+1 and fill it with 0;

  for (let [i, j] of trust) {
    //When a person trusts someone else, decrease trust value of that person and increase trust value of the person they are trusting.
    trusted[i] -= 1;
    trusted[j] += 1;
  }

  for (let i = 1; i < trusted.length; i++) {
    if (n - 1 === trusted[i]) {
      //Return the member which has all n-1 votes as they themselves will not trust anyone esle
      return i;
    }
  }

  return -1;
};

console.log(
  findJudge(3, [
    [1, 3],
    [2, 3],
    [3, 1],
  ])
);
