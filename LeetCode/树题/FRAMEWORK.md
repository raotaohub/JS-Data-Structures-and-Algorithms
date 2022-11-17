# 大致思路

1. dfs 前中后
2. bfs 层 和 深度
3. 构建类
   序列化
   中序配前后序构建
4. 回溯类
   > (112. 路径总和)[https://leetcode.cn/problems/path-sum/]
   > (113. 路径总和 II)[https://leetcode.cn/problems/path-sum-ii/]

## 熟悉递归分解问题

```js
/* 二叉树遍历框架 */
function traverse(root) {
  if (root == null) return
  // 前序遍历
  traverse(root.left)
  // 中序遍历
  traverse(root.right)
  // 后序遍历
}
```

通过基本的方式来理解

- 计算一棵二叉树共有几个节点

```js
// 定义：count(root) 返回以 root 为根的树有多少节点
function maxCount(root) {
  // base case
  if (root == null) return 0
  // 自己加上子树的节点数就是整棵树的节点数
  return 1 + maxCount(root.left) + maxCount(root.right)
}
```

- 二叉树最大深度

返回左右子树最大的深度

```js

let res = 0;
// 记录遍历到的节点的深度
let depth = 0;
// 主函数
function maxDepth(TreeNode root) {

    // ⼆叉树遍历框架
    function traverse(TreeNode root) {
        if (root == null) {
            // 到达叶⼦节点，更新最⼤深度
            res = Math.max(res, depth);
            return;
        }
        // 前序位置
        depth++;
        traverse(root.left);
        traverse(root.right);
        // 后序位置
        depth--;
    }
    traverse(root);
    return res;
}


```

当然，你也很容易发现⼀棵⼆叉树的最⼤深度可以通过⼦树的最⼤⾼度推导出来，这就是分解问题计算答案的思路。

```js
// 定义：count(root) 返回以 root 为根的树有多少节点
var maxDepth = function (root) {
  if (!root) return 0

  const left = maxDepth(root.left)
  const right = maxDepth(root.right)

  return Math.max(left, right) + 1
}
```

### 后序操作

- 二叉树的直径

直径就是指子树最大深度的和

```js
var diameterOfBinaryTree = function (root) {
  let max = 0
  function traverse(root, d) {
    if (!root) return 0

    let left = traverse(root.left, d + 1)
    let right = traverse(root.right, d + 1)
    max = Math.max(max, left + right)
    return Math.max(left, right) + 1
  }
  traverse(root, 0)
  return max
}
```

- 翻转二叉树

```java
// 将整棵树的节点翻转
TreeNode invertTree(TreeNode root) {
    // base case
    if (root == null) {
        return null;
    }

    /**** 前序遍历位置 ****/
    // root 节点需要交换它的左右子节点
    TreeNode tmp = root.left;
    root.left = root.right;
    root.right = tmp;

    // 让左右子节点继续翻转它们的子节点
    invertTree(root.left);
    invertTree(root.right);

    return root;
}

```

## 递归算法的关键要明确函数的定义

相信这个定义，而不要跳进递归细节。

##

(labuladong)[https://www.bilibili.com/video/BV1nG411x77H/?vd_source=ad977f2996622120f46d207ea056d745]

## 题解 ——> 小抄的文章

## 思路 ——> 笔记的内容 PDF 里没有
