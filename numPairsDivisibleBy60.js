/**
 * @param {number[]} time
 * @return {number}
 */
const numPairsDivisibleBy60 = (time) => {
  let count = 0;
  for (let i = 0; i < time.length; i++) {
    //Form pairs with i<j and time[i]+time[j] mode 60 ==0
    for (let j = i; j < time.length; j++) {
      if ((time[i] + time[j]) % 60 === 0 && i < j) {
        // console.log(time[i] + time[j]);
        count++; //Increment count if condition is true;
      }
    }
  }

  return count;
};

console.log(numPairsDivisibleBy60([30, 20, 150, 100, 40]));
