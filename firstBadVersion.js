/**
 * Definition for isBadVersion()
 *
 * @param {integer} version number
 * @return {boolean} whether the version is bad
 * isBadVersion = function(version) {
 *     ...
 * };
 */

/**
 * @param {function} isBadVersion()
 * @return {function}
 */
var solution = function (isBadVersion) {
  /**
   * @param {integer} n Total versions
   * @return {integer} The first bad version
   */
  return function (n) {
    let start = 1;
    let end = n;
    let bad;
    while (start <= end) {
      //Iterate till start and end cross
      let current = Math.floor((start + end) / 2) | 0; //Current element changes on every iteration
      if (isBadVersion(current)) {
        //If the current version is bad
        bad = current; //Assign it to bad;
        end = current - 1; //Set end to current -1
      } else {
        start = current + 1; //Set start to current +1
      }
    }

    return bad;
  };
};
