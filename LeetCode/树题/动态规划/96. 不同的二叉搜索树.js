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

var numTrees = function (n) {

    const memo = new Map()
    function build(start, end) {

        if (start > end) {
            return 1
        }

        let res = 0
        const key = "" + start + "-" + end
        if (memo.has(key)) return memo.get(key)

        for (let i = start; i <= end; i++) {
            const leftTree = build(start, i - 1)    // 比 start 小的构建左边
            const rightTree = build(i + 1, end)     // 比 end 大的构建左边
            res += leftTree * rightTree
        }

        memo.set(key, res)
        return res
    }

    if (n === 0) return 0
    return build(1, n)
};