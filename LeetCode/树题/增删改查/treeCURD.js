function getMin(root) {
    while (root.left) root = root.left
    return root
}

function getMax(root) {
    while (root.right) root = root.right
    return root
}

// 删
var deleteNode = function (root, key) {
    if (!root) return null
    if (root.val === key) {
        /* delete */
        // case 2
        if (!root.left) return root.right
        // case 3
        if (!root.right) return root.left
        // case 4 
        const minNode = getMin(root.right) // (用右节点最小值 | 左节点最大值) 代替
        root.val = minNode.val
        root.right = deleteNode(root.right, minNode.val)

    } else if (root.val > key) {
        root.left = deleteNode(root.left, key)
    } else if (root.val < key) {
        root.right = deleteNode(root.right, key)
    }

    // 返回
    return root

}; 1

// 增
var insertNode = function (root, key) {

    if (!root) return new TreeNode(key)

    if (root.val > key) {
        root.left = insertNode(root.left, key)
    }

    if (root.val < key) {
        root.right = insertNode(root.right, key)
    }

    return root
}

// 查
var searchBST = function (root, key) {

    if (!root) return null

    if (root.val > key) {
        return searchBST(root.left, key)
    }

    if (root.val < key) {
        return searchBST(root.right, key)
    }

    return root
}

// 抽象的看 增 和 删 都是从【DFS遍历】框架中演变的。
// 增 和 删因为修改了节点，因此需要返回修改后的节点
function BST(root, target) {
    if (!root) return // 

    if (root.val === target) { /* ... */ }

    if (root.val > key) {
        /*root.left =*/  BST(root.left)
    }

    if (root.val < key) {
        /*root.right =*/ BST(root.right)
    }

    return root
}