let Solution = function (head) {
  //Cannot use fat arrow functions as using keyword this. Basically return the head
  this.head = head;
};

Solution.prototype.getRandom = function () {
  //Samples the elements in the list at a time and decides if the value must be put in the reservoir or not.
  let i = 0;
  let val;

  let node = this.head;

  while (node) {
    i++;
    if (Math.floor(Math.random() * i) + 1 === i) val = node.val;
    node = node.next;
  }

  return val;
};
