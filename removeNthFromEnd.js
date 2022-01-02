/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function (head, n) {
  let fast = head;
  let slow = head;

  for (let i = 0; i < n; i++) {
    //Iterate through the list once upto n,i.e give fast a head start by n terms.
    fast = fast.next;
  }

  if (!fast) {
    //If fast has reached the end, return the next element of head
    return head.next;
  }

  while (fast.next) {
    //Keep on traveling the list and move the fast and slow pointers simultaneously
    fast = fast.next;
    slow = slow.next;
  }

  slow.next = slow.next.next; //Slow.next points to slow.next.next element.

  return head;
};
