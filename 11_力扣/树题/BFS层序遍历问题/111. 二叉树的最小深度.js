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
 * @return {number}
 */
var minDepth = function (root) {
  if (!root) return 0;

  let queue = [root];
  let minDepth = 1;
  const res = [];

  while (queue.length) {
    let j = queue.length;
    let floor = [];
    while (j--) {
      root = queue.shift();
      floor.push(root.val);
      /*-------与最大深度相比只是多了一个提前返回的判断-------*/
      if (!root.left && !root.right) {
        return minDepth;
      }
      /*------------------------------------------------*/
      root.left && queue.push(root.left);
      root.right && queue.push(root.right);
    }
    res.push(floor);
    minDepth++;
  }
  console.log(res);
  return minDepth;
};
