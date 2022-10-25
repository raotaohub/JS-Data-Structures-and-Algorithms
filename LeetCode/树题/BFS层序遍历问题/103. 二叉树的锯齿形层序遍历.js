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
var zigzagLevelOrder = function (root) {

    function dfs(root, depth, res) {
        if (!root) return
        if (depth === res.length && !res[depth]) {
            res[depth] = []
        }
        if (depth % 2 === 0) {
            // z !
            res[depth].push(root.val)

        } else {
            res[depth].unshift(root.val)
        }
        dfs(root.left, depth + 1, res)
        dfs(root.right, depth + 1, res)
    }

    const result = []
    dfs(root, 0, result)
    return result
};