// https://leetcode.cn/problems/two-sum-iv-input-is-a-bst/submissions/380008797/
/**
 * @param {TreeNode} root
 * @param {number} k
 * @return {boolean}
 */

// 题解1
// 思路：二叉树(前|中|后)遍历整棵树
// 借助(map|set)，在(前|中|后) 访问的时
//  1. 先判断 是否存在 k-node.val 的值 如果存在就是 true 了 
//  2. 然后在往存入node.val

// !推荐 (前|中)序 遍历，减少(map|set)的访问次数 ，
// 在后序遍历时，对于1个节点，可能最多会访问3次 （原因：左右访问后再访问自己）

var findTarget = function (root, k) {

    let map = new Map(), has = false

    function traverse(root) {
        if (!root) return

        if (map.has(k - root.val)) {
            has = true
        }
        map.set(root.val, root.val)

        traverse(root.left)
        traverse(root.right)
    }

    traverse(root)

    return has
};

// 题解2
// 思路 BST中序 -> 得出升序数组 -> 借助
//                                   1.双指针       O(logN) + O(n)
//                                   2.(map|set)   O(logN) + O(n)
//                                   3.暴力for      O(logN) + O(n2)