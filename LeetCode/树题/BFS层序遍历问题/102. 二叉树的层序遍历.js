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
 * BFS 队列的解法
 */
var levelOrder = function (root) {
    if (!root) return [];
    let queue = [root],
        res = [];

    while (queue.length) {
        let j = queue.length;
        let temp = []; // 每一层用一个 数组表示
        while (j--) {
            root = queue.shift();
            temp.push(root.val);

            root.left && queue.push(root.left);
            root.right && queue.push(root.right);
        }

        res.push(temp);

    }

    return res;
};
