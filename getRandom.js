/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 */
var Solution = function (head) {
  this.result = []; //Initialise an empty array which will be used to convert the linked list to an array
  let current = head;

  while (current !== null) {
    //Push values of linked list to the array while traversing the linked list
    this.result.push(current);
    current = current.next;
  }

  this.length = this.result.length; //Keep a track of length which would be later used to generate a random number with same probablity
};

/**
 * @return {number}
 */
Solution.prototype.getRandom = function () {
  return this.result[Math.floor(Math.random() * this.length)].val; //Generate a random number
};

/**
 * Your Solution object will be instantiated and called as such:
 * var obj = new Solution(head)
 * var param_1 = obj.getRandom()
 */
