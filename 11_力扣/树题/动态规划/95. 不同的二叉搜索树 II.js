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

const memo = new Map()

var generateTrees = function (n) {
    if (n === 0) return null;
    return helper(1, n);
};

const helper = (start, end) => {
    let allTree = []

    if (start > end) {// 二叉树 左边 不得大于 右边 因此要返回
        allTree.push(null)
        return allTree
    }

    let key = JSON.stringify([start, end])
    memo.has(key) && memo.get(key) && return memo.get(key)

    // 穷举 root 节点的所有可能。
    for (let i = start; i <= end; i++) {
        // 递归构造子树的所有合法 BST
        let leftTree = helper(start, i - 1);
        let rightTree = helper(i + 1, end);

        /* 后序操作*/
        // 给 root 节点穷举所有左右子树的集合
        for (let left of leftTree) {
            for (let right of rightTree) {
                allTree.push(new TreeNode(i, left, right));
            }
        }


    }

    memo.set(key, allTree)
    return allTree;
};
