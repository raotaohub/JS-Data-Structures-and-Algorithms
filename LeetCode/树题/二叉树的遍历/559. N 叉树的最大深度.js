/* DFS */

/**
 * @type DFS
 * @name N叉树的最大深度
 */
var maxDepth = function (root) {
    if (!root) return 0
    let dep = 0

    // !N叉树 写法 
    for (let node of root.children) dep = Math.max(dep, maxDepth(node))

    // !2叉树 写法
    dep = Math.max(maxDepth(root.left), maxDepth(root.right))

    return dep + 1
};

/* BFS */

/**
 * @type BFS
 * @name N叉树的最大深度
 */
var maxDepth = function (root) {
    if (!root) return 0
    let queue = [root], res = []

    while (queue.length) {
        let j = queue.length
        let temp = []

        while (j--) {
            root = queue.shift()
            temp.push(root.val)

            // !N叉树 写法 
            for (let node of root.children) queue.push(node)

            // !2叉树 写法
            // root.left && queue.push(root.left);
            // root.right && queue.push(root.right);
        }
        res.push(temp)
    }

    return res.length
};
