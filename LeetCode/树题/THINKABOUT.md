# 什么是树

        输入:
         1
        / \
        2   3
      / \  /
      4  5 6

    输出: 6
    方式一 ：dfs

## 如何遍历树

1. DFS 深度优先 （借助栈的结构调用的）

- 递归 3 种
- 迭代 3 种

![img](https://tva1.sinaimg.cn/large/007S8ZIlly1ghlui7vcmwg30dw0dw3yl.gif)

2. BFS 广度优先 层序遍历（一定是借助队列 queue 的结构，不论是构建或是遍历）

- 迭代 1 种

3. 如何访问 ？
   要访问树上的每 1 节点，而我们始终只有 1 个引用，那就是 root 因此 root 指向那里我们就访问到那里，何时访问就是前中后序的区别

首先大多二叉树的问题都可以用 DFS 和 BFS 来处理，

### DFS（栈）深度优先

- 递归 3 种
- 迭代 3 种 （栈）

#### think

只要是递归操作，即压栈出栈，在执行顺序上就有 `前后`序 之分

```javascript
// tree
function traverse(root) {
  if (!root) return //...
  // 前
  traverse(root.left)
  // 中
  traverse(root.right)
  // 后
}
//linked

function traverse_linked(head) {
  if (!head) return
  // 前
  traverse_linked(head.next)
  // 后
}
```

```javascript
// 前序
function preOrderTraverse(root) {
  let stack = [],
    res = []

  while (root || stack.length) {
    res.push(root.val)

    root.right && stack.push(root.right)
    root.left && stack.push(root.left)

    root = stack.pop()
  }
  return res
}

// 中序
function inOrderTraverse(root) {
  let stack = [],
    res = []

  while (root || stack.length) {
    while (root) {
      stack.push(root)
      root = root.left
    }

    root = stack.pop()
    res.push(root.val)

    root = root.right
  }
  return res
}

//  后序
function postOrderTraverse(root) {
  let stack = [],
    res = [],
    pre = null

  while (root || stack.length) {
    while (root) {
      stack.push(root)
      root = root.left
    }

    root = stack.pop()

    if (!rooot.right || root.right === pre) {
      res.push(root.val)
      pre = root
      root = null
    } else {
      stack.push(root)
      root = root.right
    }
  }
  return res
}
```

### BFS（队列）广度优先 层序遍历

- 迭代 1 种
- 递归 1 种 （利用 bfs 自创的）

树的最大深度

> 深度的概念，可以利用层序遍历来解决，遍历一层，深度就+1

```javascript
/**
 *       1
 *      / \
 *     2   3
 *    / \  /
 *   4  5 6
 * 访问完每一次所有的节点后如果还有节点 则层数+1
 *
 */
//一个通用的BFS模板
function bfs(root) {
  // if (!root) return // '可根据题目来返回' 这里可以做边界判断
  // 通常借助一个队列来实现
  let queue = [root]
  let depah = 0 // 用作记录层数
  let res = [] // 记录每层结果

  while (queue.length) {
    let j = queue.length
    const floor = []
    // 如果是迭代则可以👇
    while (j--) {
      let node = queue.shift() // 队列先进先出
      floor.push(node)
      if (
        //... 判断式
        true ||
        false
      ) {
        // ...逻辑处理 或返回等
      }
      node.left && queue.push(node.left)
      node.right && queue.push(node.right)
      //逻辑处理 根据需要进行 前 中 后的处理
    }
    res.push(floor)
    depah++
  }
  return depah
}

//DFS法
var maxDepth = function (root) {
  if (!root) return 0 // 终止条件
  let left = maxDepth(root.left)
  let right = maxDepth(root.right)
  return Math.max(left, right) + 1
}

//DFS法
var levelOrder = function (root) {
  function dfs(root,  , res) {
    if (!root) return
    /*前序操作*/
    if (res.length === depth && !res[depth]) {
      res[depth] = []
    }
    res[depth].push(root.val)
    /**/

    dfs(root.left, depth + 1, res)
    dfs(root.right, depth + 1, res)
  }

  const result = []
  dfs(root, 0, result)

  return result.length
}
```

## 二叉树的构建

- 1、前序构建

```javascript
// BFS 法
const deserialize = data => {
  if (data == 'X') return null

  const list = data.split(',') // 按,转成数组

  const root = new TreeNode(list[0]) // 获取首项，构建根节点
  const queue = [root] // 根节点推入队列
  let cursor = 1 // 初始指向list第二项

  while (cursor < list.length) {
    // 指针越界，即扫完了序列化字符串
    const node = queue.shift() // 考察出列的节点

    const leftVal = list[cursor] // 它的左儿子的值
    const rightVal = list[cursor + 1] // 它的右儿子的值

    if (leftVal != 'X') {
      // 是真实节点
      const leftNode = new TreeNode(leftVal) // 创建左儿子节点
      node.left = leftNode // 认父亲
      queue.push(leftNode) // 自己也是父亲，入列
    }
    if (rightVal != 'X') {
      const rightNode = new TreeNode(rightVal)
      node.right = rightNode
      queue.push(rightNode)
    }
    cursor += 2 // 一次考察一对儿子，指针加2
  }
  return root // BFS结束，构建结束，返回根节点
}

// DFS
var deserialize = function (data) {
  let values = JSON.parse(data)

  return (function getTree() {
    let value = values.shift()
    if (value === null) return null

    let node = new TreeNode(value) // 根
    node.left = getTree() // 左
    node.right = getTree() // 右

    return node
  })()
}
```

- 2、中序构建

```javascript
// 将有序列表构建成一个二叉搜索树 [-10,-3,0,5,9] 二分思想
// https://leetcode-cn.com/problems/minimum-height-tree-lcci/
var sortedArrayToBST = function (nums) {
  if (nums.length === 0) return null

  let mid = Math.floor(nums.length / 2)

  let root = new TreeNode(nums[mid]) // 中

  root.left = sortedArrayToBST(nums.slice(0, mid)) // 左
  root.right = sortedArrayToBST(nums.slice(mid + 1)) // 右

  return root
}
```

## 如何删除树中的一个节点

## 树的最大高度问题

## 二叉树的直径问题
