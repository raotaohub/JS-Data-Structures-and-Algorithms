/* 
示例：
二叉树：[3,9,20,null,null,15,7],

    3
   / \
  9  20
    /  \
   15   7
返回其层序遍历结果：

[
  [3],
  [9,20],
  [15,7]
]
*/

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
 * @return {number[][]}
 */
var levelOrder = function (root) {
  if (!root) return [];
  let queue = [root],
    res = [];

  while (queue.length) {
    let j = queue.length;
    let temp = [];
    while (j--) {
      root = queue.shift();
      temp.push(root.val);

      root.left && queue.push(root.left);
      root.right && queue.push(root.right);
    }
    if (temp.length) {
      res.push(temp);
    }
  }

  return res;
};
