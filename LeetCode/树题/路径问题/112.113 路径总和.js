/* 大经典 */

// dfs 分解成子问题；注意点是一定要判断 左右子树都为空
// 112.
var hasPathSum = function (root, targetSum) {

    if (!root) return false

    if (!root.left && !root.right) return targetSum - root.val === 0

    /* targetSum - root.val 隐藏着回溯 出栈的时候会回到上次状态 */

    return hasPathSum(root.left, targetSum - root.val) // 每次访问都要去缩小 targetSum 
        || hasPathSum(root.right, targetSum - root.val) // 


};


// 113.
var pathSum = function (root, targetSum) {

    function traverse(root, targetSum, path) {
        if (!root) return

        /* 前序 */
        const remain = targetSum - root.val

        if (!root.left && !root.right) {

            if (remain === 0) {

                path.push(root.val)
                result.push([...path]) // 记录符合条件的路径
                path.pop() //回溯 -> 去寻找另一种可能

            }

            return // 只要到叶子节点就返回
        }
        /* 前序 */

        path.push(root.val)
        traverse(root.left, remain, path)
        path.pop() //回溯

        path.push(root.val)
        traverse(root.right, remain, path)
        path.pop()//回溯

    }

    const result = []
    if (!root) return result
    traverse(root, targetSum, [])
    return result
};

