
function traverse(root, level) {
    if (!root) return

    console.log('层数', root, level);

    traverse(root.left, level + 1)
    traverse(root.right, level + 1)
}

traverse(root, 1)


function traverse(root, count) {
    if (!root) return 0

    leftCount = traverse(root.left)
    rightCount = traverse(root.right)

    console.log('左树节点数', leftCount, '右树节点数', rightCount);
    return leftCount + rightCount
}

