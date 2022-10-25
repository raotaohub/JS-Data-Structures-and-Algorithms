/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrder = function (root) {


    function dfs(root, depth, res) {
        if (!root) return

        /*前序操作*/
        if (res.length === depth && !res[depth]) {
            res[depth] = []
        }
        res[depth].push(root.val)
        /**/

        dfs(root.left, depth + 1, res)
        dfs(root.right, depth + 1, res)
    }

    const result = []
    dfs(root, 0, result)

    return result
};


// 作者：raotao
// 链接：https://leetcode.cn/problems/binary-tree-level-order-traversal/solution/by-raotao-7ua4/
// 来源：力扣（LeetCode）
// 著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。