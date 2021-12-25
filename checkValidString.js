const isValid = (s) => {
  let stack = []; //Defining a an empty stack
  for (let i = 0; i < s.length; i++) {
    let current = s[i]; //Getting the current element in the string
    if (current == "(" || current == "{" || current == "[") {
      stack.push(current); //If the current element is an opening bracked push it inside the stack and continue to the next iteration
      continue;
    }
    if (stack.length === 0) return false; //If no the current element is a closing bracket or nothing is pushed inside the stack i.e the stack is empty then return false
    let poppedElement;
    switch (
      current //Checking whether the current element is a closing bracket
    ) {
      case ")":
        poppedElement = stack.pop(); //Storing popped element into the variable poppedElement
        if (poppedElement == "{" || poppedElement == "[") return false; //Incase it is an opening bracket return false and beakout of the loop since we encountered a wrong bracket sequence
        break;

      case "]":
        poppedElement = stack.pop();
        if (poppedElement == "{" || poppedElement == "(") return false;
        break;
      case "}":
        poppedElement = stack.pop();
        if (poppedElement == "(" || poppedElement == "[") return false;
        break;
    }
  }

  return stack.length === 0; //Return wheter the stack is empty or not
};

console.log(isValid("()"));
