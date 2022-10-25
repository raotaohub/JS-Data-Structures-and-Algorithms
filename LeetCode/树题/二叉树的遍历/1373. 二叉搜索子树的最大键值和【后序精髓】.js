
/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxSumBST = function (root) {
    let max = 0

    function postOrderTraverse(root) {
        // 【1】
        if (!root) {
            return {
                isBST: true, sum: 0,
                min: Infinity, // 【正】无穷大
                max: -Infinity,// 【负】无穷大
            }
        }

        let l = postOrderTraverse(root.left)
        let r = postOrderTraverse(root.right)

        if (l.isBST && r.isBST && root.val > l.max && root.val < r.min) {
            // 计算以 root 为根的这棵 BST 所有节点之和
            // 当第一次后序递归到树底时,sum其实就是自己这棵树的val,
            // 因为无论是到左还是右树🌳 sum = 0 【1】 
            let sum = l.sum + r.sum + root.val;
            max = Math.max(max, sum);

            return {
                isBST: true, sum,
                min: Math.min(l.min, root.val), // 与【正】无穷大 比 取最小的
                max: Math.max(r.max, root.val)  // 与【负】无穷大 比 取最大的
            }

        } else {
            return { isBST: false }
        }

    }

    postOrderTraverse(root)
    return max
};