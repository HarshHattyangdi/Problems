/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
const middleNode = (head) => {
  let slow = head;
  let fast = head;
  let count = 0;

  while (fast) {
    //Traverse the linked list
    fast = fast.next; //Fast pointer will move forward by checking fast.next;
    if (++count % 2 === 0) slow = slow.next; //Slow will move forward only on every even-th node visited;
  }

  return slow; //This will make sure that slow is at the middle.
};
