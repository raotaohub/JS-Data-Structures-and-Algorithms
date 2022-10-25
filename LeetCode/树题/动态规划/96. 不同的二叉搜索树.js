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
            // 遍历以 i 为root的所有可能
            const leftTree = build(start, i - 1)    // 比 start ~ i-1 之间的的构建左边
            const rightTree = build(i + 1, end)     // 比 i+1   ~ end 之间的的构建右边边
            res += leftTree * rightTree             // 递归到 start>end 就会返回 1 然后不停向上出栈 最终乘积就是所有可能
        }

        memo.set(key, res)
        return res
    }

    if (n === 0) return 0
    return build(1, n)
};

/**
 * 主要是要理解 ，1 个节点构成1棵树，2个节点构成2颗，3个节点构成
 */
const memo = new Map()

var numTrees = function (n) {

    if (n === 0 || n === 1) return 1

    let nums = 0
    if (memo.has(n)) return memo.get(n)

    for (let i = 1; i <= n; i++) {
        const l = numTrees(i - 1)
        const r = numTrees(n - i)
        nums += l * r

    }
    memo.set(n, nums)

    return nums
};