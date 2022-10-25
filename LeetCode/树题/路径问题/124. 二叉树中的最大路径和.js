var maxPathSum = function (root) {
    let res = Number.MIN_SAFE_INTEGER
    function findMax(root) {

        if (!root) return 0

        const left = Math.max(findMax(root.left), 0)  // 如果子树路径和为负则应当置0表示最大路径不包含子树
        const right = Math.max(findMax(root.right), 0) // 判断在该节点包含左右子树的路径和是否大于当前最大路径和

        res = Math.max(left + right + root.val, res) //更新已知最大值

        return root.val + Math.max(left, right) // 返回该 root 为根的树的最大路径和
    }

    findMax(root)

    return res
};


`
这题和直径很像
求1棵树的最大直径，可以分解为求左子树和右子树的最大直径，取最大的即可。

// 记录最大直径的长度
int maxDiameter = 0;

public int diameterOfBinaryTree(TreeNode root) {
    maxDepth(root);
    return maxDiameter;
}

int maxDepth(TreeNode root) {
    if (root == null) {
        return 0;
    }
    int leftMax = maxDepth(root.left);
    int rightMax = maxDepth(root.right);
    // 后序位置，顺便计算最大直径
    int myDiameter = leftMax + rightMax;
    maxDiameter = Math.max(maxDiameter, myDiameter);

    return 1 + Math.max(leftMax, rightMax);
}


`

