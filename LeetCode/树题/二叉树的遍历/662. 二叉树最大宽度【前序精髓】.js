/**
 *
 * 
 * 关于数组方式存储的堆
 * 核心逻辑: root.left  的下标  = root的下标index *2 +1
 *          root.right 的下标  = root的下标index *2 +2
 * ————————————————————————————————————————————————————
 * 这里因为树存在，最小宽度也起码也有1，因此公式调整一下。
 * 
 * 核心逻辑: root.left  = root[index*2]
 *          root.right = root[index*2+1]
 * 
 * 继续看↓
 * 对于一颗形状为如下的二叉树；其前序遍历的id结果就是[1,2,3,4,5,6,7]（这里列举的是id注意不是值）
 *                                    观察每层发现最大宽度的与id值的情况
 * 
 *            1                       1-1+1 = 1
 *         2     3                    3-2+1 = 2
 *       4  5   6  7                  7-4+1 = 4
 * 
 *                                    即每层最右侧id - 最左侧id + 1;
 * 
 * 所以，采用BFS或者DFS层遍历时，给当前节点打上标记即可。
 * 
 * 思路采用 dfs 前序递归遍历
 * 
 * 1. 每层第 1 次访问到的节点，就是最左侧节点，存在变量中。
 * 2. 其后每次都用当前层随后访问到的节点id 值 - 变量 + 1，维护1个最大值
 * 3. 递归进入的时候，更新id值
 * 
 * 类似的题:
 *          剑指 Offer 37. 序列化二叉树
 * 
 * 但是 对于 JS 而言，2*3000 会溢出 ；需要采用 BigInt 来计算
 */

/**
 * @param {TreeNode} root
 * @return {number}
 */
var widthOfBinaryTree = function (root) {

    if (!root) return 0

    let max = 1n, list = []

    function bfs(root, depth, id) {

        if (!root) return

        if (list.length === depth && !list[depth]) {
            list[depth] = id
        }

        const curId = id - list[depth] + 1n
        max = max > curId ? max : curId

        bfs(root.left, depth + 1, id * 2n)
        bfs(root.right, depth + 1, id * 2n + 1n)

    }

    bfs(root, 0, 1n)
    return max
};

// << 左移运算符
// 移动任意数字 x 至左边 y 位，得出 x * 2 ** y。 所以例如：9 << 3 等价于 9 * 2³ = 9 * 8 = 72
// 左移操作符将第一个操作数向左移动指定位数，左边超出的位数将会被清除，右边将会补零。

var widthOfBinaryTree = function (root) {
    const max = [];
    function dfs(node, dep, idx) {
        if (!node) return;
        max[dep] = (max[dep] || [idx, idx]);
        max[dep][0] = Math.min(max[dep][0], idx);
        max[dep][1] = Math.max(max[dep][1], idx);
        dfs(node.left, dep + 1, (idx << 1) + 1);
        dfs(node.right, dep + 1, (idx << 1) + 2);
    }
    dfs(root, 0, 0);
    return max.reduce((max, [l, r]) => Math.max(max, r - l), 0) + 1;
};


/* 作者：cnxnan
链接：https://leetcode.cn/problems/maximum-width-of-binary-tree/solution/js-bian-li-mei-ceng-de-jie-dian-zhao-chu-nkph/
来源：力扣（LeetCode）
著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。 */
var widthOfBinaryTree = function (root) {
    let res = new Map(), max = 1;

    const mid = (r, hei, val) => {
        if (r) {
            if (!res.has(hei)) {
                res.set(hei, []);
            }

            let can = Math.pow(2, 32) - 1;
            res.get(hei).push(val);

            r.left && mid(r.left, hei + 1, (val * 2 - 1) % can);
            r.right && mid(r.right, hei + 1, (val * 2) % can);
        }
    }

    mid(root, 0, 1);

    res.forEach((el, index) => {
        let now = el[el.length - 1] - el[0] + 1;
        max = now > max ? now : max;
    })


    return max;
};

