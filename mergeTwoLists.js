var mergeTwoLists = (list1, list2) => {
  let currentNode = new ListNode(); //Create a new listNode calling it as currentNode(variable to keep a track of current node of the new list)
  let newList = currentNode; //Store entire currentNode into head variable;
  let headPtr1 = list1; //Ptr1 and Ptr2 keep a track of the list1 and list2 respectively
  let headPtr2 = list2;

  while (headPtr1 && headPtr2) {
    //Traverse the list if Ptr1 and Ptr2 exists
    if (headPtr1.val > headPtr2.val) {
      //If value in list1 is grater than value in list 2
      currentNode.next = headPtr2; //Current node points to list2
      headPtr2 = headPtr2.next; //List2 holds address to the next element in the list
      currentNode = currentNode.next; //CurrentNode now has access to the next list element in list2
    } else {
      currentNode.next = headPtr1;
      headPtr1 = headPtr1.next;
      currentNode = currentNode.next;
    }
  }

  if (headPtr1) currentNode.next = headPtr1; //If List1 is present or list2 has been traversed completely currentNode now points to List1
  if (headPtr2) currentNode.next = headPtr2;
  return newList.next; //Return the next element in the newList
};
