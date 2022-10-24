/**
 * 解析
 * 比如输入 3 
 * 那么就是构建 以 1,2,3 为root的所有可能
 * 
 *  for 穷举 1,2,3 ->
 *      缩小下标递归构建left right
 * 
 *  枚举所有可能的前提是 要先构建好一颗， 所以很容易想到要用 [后序遍历]
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
var generateTrees = function (n) {
    if (n == 0) return [new TreeNode(null)]

    return build(1, n)
};

const memo = new Map()

function build(start, end) {

    let res = []
    if (start > end) {
        res.push(null)
        return res
    }

    let key = JSON.stringify([start, end])
    if (memo.has(key) && memo.get(key)) return memo.get(key)

    for (let i = start; i <= end; i++) {
        const left = build(start, i - 1)
        const right = build(i + 1, end)

        for (let l of left) {
            for (let r of right) {
                res.push(new TreeNode(i, l, r))
            }
        }

    }

    memo.set(key, res)
    return res
}