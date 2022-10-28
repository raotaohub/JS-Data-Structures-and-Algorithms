var connect = function (root) {
    if (!root) return null

    let q = [root]

    while (q.length) {

        let size = q.length, lastNode = null

        for (let i = 0; i < size; i++) {
            let node = q.shift()
            node.next = lastNode

            lastNode = node
            // 从右往左边遍历
            if (node.right) q.push(node.right)
            if (node.left) q.push(node.left)
        }
    }

    return root
};