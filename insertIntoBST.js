/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} val
 * @return {TreeNode}
 */
var insertIntoBST = function (root, val) {
  //Nothing present in the root
  if (null == root) {
    node = new TreeNode(val);
    return node;
  }

  if (val > root.val) {
    //Insert to right side of the tree incase the value is greater than the right elements of the root
    root.right = insertIntoBST(root.right, val);
  } else {
    root.left = insertIntoBST(root.left, val); //Else insert value into the left side of the root.
  }

  return root;
};
