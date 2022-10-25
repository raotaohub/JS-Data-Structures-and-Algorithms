/**
 * 这题其实不难，但是思路上不适应  
 * 怎么理解 向左走 r + 1 ; 向右走 l + 1，因为要求的是求出最大的交错路径
 * 
 */

/**
 * @param {TreeNode} root
 * @return {number}
 */
var longestZigZag = function (root) {
    let max = 0

    function traverse(root, l, r) {
        if (!root) return
        max = Math.max(max, Math.max(l, r)) // 每次都维护1个最大值
        traverse(root.left, r + 1, 0) // 向左走 r + 1 , r 不累加
        traverse(root.right, 0, l + 1)// 向右走 l + 1 , l 不累加

    }

    traverse(root, 0, 0)
    return max
};