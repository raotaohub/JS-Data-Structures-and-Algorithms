/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 * 
 * 给定一个二叉搜索树，请将它的每个节点的值替换成树中大于或者等于该节点值的所有节点值之和。
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
var convertBST = function (root) {

    let add = 0

    function dfs(root) {

        if (!root) return

        dfs(root.right) // 先去右边
        add += root.val // 累加
        root.val = add
        dfs(root.left)

    }

    dfs(root)

    return root
};