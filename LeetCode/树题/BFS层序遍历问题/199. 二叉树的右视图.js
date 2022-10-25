// 同 剑指 Offer II 046. 二叉树的右侧视图

/**
 * 思路1 BFS 层序遍历，然后将每层 最后1个 节点加入结果数组
 */
var rightSideView = function (root) {

    if (!root) return []

    const queue = [root], res = []

    while (queue.length) {

        let l = queue.length, last = null

        while (l--) {
            root = queue.shift()
            last = root.val
            root.left && queue.push(root.left)
            root.right && queue.push(root.right)
        }

        res.push(last)
    }

    console.log('res', res)
    return res
};


/**
 * 思路2 DFS递归 ，记录层数 ，然后每层第一个值加入结果数组
 * DFS 层递归 可以借鉴 【102. 二叉树的层序遍历一样】 唯一不同是这里先入right指针
 */

import { } from "./102. 二叉树的层序遍历"

var rightSideView = function (root) {

    if (!root) return []

    const res = []
    function traverse(root, depth) {
        if (!root) return
        /* 记录层数 */
        if (depth === res.length && !res[depth]) {
            res.push(root.val)
        }

        traverse(root.right, depth + 1)  // 这里由于看的是右边视图，所以先入栈right
        traverse(root.left, depth + 1)

    }

    traverse(root, 0)
    return res
};