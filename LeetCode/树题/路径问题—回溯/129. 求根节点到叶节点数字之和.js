// 129. 求根节点到叶节点数字之和
/**
 * 输入：root = [1,2,3]
 * 输出：25 = 12+13
 * https://leetcode.cn/problems/sum-root-to-leaf-numbers/
 * @param {TreeNode} root
 * @return {number}
 * 
 * 这题的思路比较瓜，直接字符串叠加转数字，碰到叶子节点后就叠加
 * 
 * 代码太简洁不利于 分清楚思路
 */
var sumNumbers = function (root) {

    let max = 0
    function traverse(root, cur) {
        if (!root) return

        if (!root.left && !root.right) {
            max += Number.parseInt(cur.reduce((a, c) => a + c, ""))
        }

        if (root.left) {
            cur.push(root.left.val)
            traverse(root.left, cur)
            cur.pop()// 回溯
        }


        if (root.right) {
            cur.push(root.right.val)
            traverse(root.right, cur)
            cur.pop()// 回溯

        }


    }
    traverse(root, [root.val]) // 由于是从根 开始的 ，所以一开始就把root.val 加入
    return max
};