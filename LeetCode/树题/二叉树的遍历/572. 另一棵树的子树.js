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
 * @param {TreeNode} subRoot
 * @return {boolean}
 */

var isSameTree = (root1, root2) => {
    if (!root1 || !root2) return root1 === root2

    return root1.val === root2.val
        && isSameTree(root1.left, root2.left)
        && isSameTree(root1.right, root2.right)
}

// var searchNode = (root, key) => {
//     if (!root) return null
//     if (root.val > key) return searchNode(root.left)
//     if (root.val > key) return searchNode(root.right)
//     return root
// }

var isSubtree = function (root, subRoot) {
    if (root == null) return subRoot == null;

    if (isSameTree(root, subRoot)) return true
    return isSubtree(root.left, subRoot) || isSubtree(root.right, subRoot)
};