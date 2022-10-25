/* 
给你一个整数 n ，请你找出所有可能含 n 个节点的 真二叉树 ，并以列表形式返回。答案中每棵树的每个节点都必须符合 Node.val == 0 。

答案的每个元素都是一棵真二叉树的根节点。你可以按 任意顺序 返回最终的真二叉树列表。

真二叉树 是一类二叉树，树中每个节点恰好有 0 或 2 个子节点。

来源：力扣（LeetCode）
链接：https://leetcode.cn/problems/all-possible-full-binary-trees
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。 
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
 * @param {number} n
 * @return {TreeNode[]}
 */
var allPossibleFBT = function (n) {
    if (n % 2 === 0) return [] // 偶数不可能得到满二叉树

    function build(n) {
        let res = []

        if (n === 1) {
            res.push(new TreeNode(0))
            return res
        }

        for (let i = 1; i < n; i += 2) {
            let left = build(i)
            let right = build(n - i - 1)

            for (let l of left) {
                for (let r of right) {
                    res.push(new TreeNode(0, l, r))
                }
            }
        }

        return res
    }

    return build(n)

};

// 输入7
// left [ [0] ]                                 right [ [0] ]
// left [ [0] ]                                 right [ [0,0,0] ]
// left [ [0] ]                                 right [ [0] ]
// left [ [0,0,0] ]                             right [ [0] ]
// left [ [0] ]                                 right [ [0,0,0,null,null,0,0], [0,0,0,0,0] ]
// left [ [0] ]                                 right [ [0] ]
// left [ [0] ]                                 right [ [0] ]
// left [ [0,0,0] ]                             right [ [0,0,0] ]
// left [ [0] ]                                 right [ [0] ]
// left [ [0] ]                                 right [ [0,0,0] ]
// left [ [0] ]                                 right [ [0] ]
// left [ [0,0,0] ]                             right [ [0] ]
// left [ [0,0,0,null,null,0,0], [0,0,0,0,0] ]  right [ [0] ]
