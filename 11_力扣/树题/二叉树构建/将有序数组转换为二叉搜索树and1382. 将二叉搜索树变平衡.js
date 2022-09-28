/* 

给你一个整数数组 nums ，其中元素已经按 升序 排列，请你将其转换为一棵 高度平衡 二叉搜索树。

高度平衡 二叉树是一棵满足「每个节点的左右两个子树的高度差的绝对值不超过 1 」的二叉树。


输入：nums = [-10,-3,0,5,9]
输出：[0,-3,9,-10,null,5]
解释：[0,-10,5,null,-3,null,9] 也将被视为正确答案：
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
 * @description 递归点 ① 一棵树的节点 是 数组中间的那个元素
 *                    ② 树的左节点 是
 *                    ③
 * @param {number[]} nums
 * @return {TreeNode}
 */
var sortedArrayToBST = function (nums) {
  if (!nums.length) return;

  function arrayToBST(nums, start, end) {
    if (start > end) return null;
    let mid = Math.floor((start + end) / 2);
    const root = new TreeNode(nums[mid]);
    root.left = arrayToBST(nums, start, mid - 1);
    root.right = arrayToBST(nums, mid + 1, end);
    return root;
  }

  return arrayToBST(nums, 0, nums.length - 1);
};

/**
 * @description: 1382. 将二叉搜索树变平衡
 * @param {*} root
 * @return {*}
 */
var balanceBST = function (root) {
  let arr = [];
  function inOrder(root) {
    if (!root) return;
    root.left && inOrder(root.left);
    root.val && arr.push(root.val);
    root.right && inOrder(root.right);
  }
  inOrder(root); // 先中序遍历 -> 转化成有序数组

  return sortedArrayToBST(arr); // 然后用有序数组 构建平衡BST
};
