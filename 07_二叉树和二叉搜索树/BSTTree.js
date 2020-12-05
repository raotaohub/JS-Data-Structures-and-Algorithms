function defaultCompare(a, b) {
  if (a === b) {
    return Compare.EQUALS;                                // 相等 返回 0
  }
  return a < b ? Compare.LESS_THAN : Compare.BIGGER_THAN; // 小于返回 -1 大于返回1
}
const Compare = {
  LESS_THAN: -1,
  BIGGER_THAN: 1,
  EQUALS: 0
}

class Node {
  constructor(key) {
    this.key = key
    this.left = null
    this.right = null
  }
}

class BSTTree {
  constructor(compare = defaultCompare) {
    this.compare = compare
    this.root = null
  }

  // insert()               在树中插入一个键
  insert(key) {
    if (this.root == null) {
      this.root = new Node(key)
    } else {
      this.insertNode(this.root, key)
    }
  }

  insertNode(node, key) {
    // 判断大小 看是要插入左侧还是右侧
    if (this.compare(node.key, key) == Compare.LESS_THAN) {

      if (node.right === null) {
        node.right = new Node(key)
      } else {
        this.insertNode(node.right, key)
      }
    } else {

      if (node.left === null) {
        node.left = new Node(key)
      } else {
        this.insertNode(node.left, key)
      }
    }
  }
  // search()               在树中查找一个键，以布尔值返回
  search(key) {
    return this.searchNode(this.root, key)
  }
  searchNode(node, key) {
    if (node == null) {
      return false
    }
    if (this.compare(node.key, key) == Compare.LESS_THAN) {
      return this.searchNode(node.right, key)
    } else if (this.compare(node.key, key) == Compare.BIGGER_THAN) {
      return this.searchNode(node.left, key)
    }
    else {
      return true
    }
  }
  // preOrderTraverse()     通过先序 遍历方式 遍历所有的节点
  preOrderTraverse(callback) {
    this.preOrderTraverseNode(this.root, callback)
  }
  preOrderTraverseNode(node, callback) {
    if (node != null) {
      callback(node)
      this.preOrderTraverseNode(node.left, callback)
      this.preOrderTraverseNode(node.right, callback)
    }
  }
  // inOrderTraverse()      通过中序 遍历方式 遍历所有的节点
  inOrderTraverse(callback) {
    this.inOrderTraverseNode(this.root, callback)
  }
  inOrderTraverseNode(node, callback) {
    if (node != null) {
      this.inOrderTraverseNode(node.left, callback)
      callback(node)
      this.inOrderTraverseNode(node.right, callback)
    }
  }
  // postOrderTraverse()    通过后续 遍历方式 遍历所有的节点
  postOrderTraverse(callback) {
    this.postOrderTraverseNode(this.root, callback)
  }
  postOrderTraverseNode(node, callback) {
    if (node != null) {
      this.postOrderTraverseNode(node.left, callback)
      this.postOrderTraverseNode(node.right, callback)
      callback(node)
    }
  }
  // min()                  返回树中 最小的 键/值
  min() {
    if (this.root != null) {
      return this.minNode(this.root)
    }
    return undefined
  }
  minNode(node) {
    let current = node.left
    while (current != null && current.left != null) {
      current = current.left
    }
    return current
  }
  // max()                  返回树中 最大的 键/值
  max() {
    if (this.root != null) {
      return this.maxNode(this.root)
    }
    return undefined
  }
  maxNode(node) {
    let current = node.right
    while (current != null && current.right != null) {
      current = current.right
    }
    return current
  }
  // remove()               移除某个键  我失败了！！！！！！！！！
  remove(key) {
    this.root = this.removeNode(this.root, key)
  }
  removeNode(node, key) {
    if (this.root == null) {
      return null
    }
    if (this.compare(key, node.key) === Compare.LESS_THAN) {
      node.left = this.removeNode(node.left, key)
      return node
    }
    else if (this.compare(key, node.key) === Compare.BIGGER_THAN) {
      node.right = this.removeNode(node.right, key)
      return node
    } else {
      if (node.right == null && node.left == null) {
        node = null
        return node
      }
      if (node.right == null) {
        node = node.left
        return node
      } else if (node.left == null) {
        node = node.right
        return node
      }
      const aux = this.minNode(node.right)
      node.key = aux.key
      node.right = this.removeNode(node.right, aux.key)
      return node
    }
  }
}

const tree = new BSTTree()
tree.insert(11)
tree.insert(7)
tree.insert(15)
tree.insert(5)
tree.insert(3)
tree.insert(9)
tree.insert(8)
tree.insert(10)
tree.insert(13)
tree.insert(12)
tree.insert(14)
tree.insert(20)
tree.insert(18)
tree.insert(25)
tree.insert(6)

console.log(tree)

let index = []
tree.inOrderTraverse((node) => {
  index.push(node.key)
  // console.log(node)
})
let pre = []
tree.preOrderTraverse((node) => {
  pre.push(node.key)
  // console.log(node)
})
let post = []
tree.postOrderTraverse((node) => {
  post.push(node.key)
  // console.log(node)
})
console.log(index)
console.log(pre)
console.log(post)

console.log(tree.search(10))

// console.log(tree.remove(15))

tree.remove(5)
tree.remove(15)

// 反转二叉树
var invertTree = function (root) {
  function traversal(root) {
    if (root === null) {
      return null
    } else {
      [root.left, root.right] = [traversal(root.right), traversal(root.left)]
      return root
    }
  }
  return traversal(root)
}
// 利用中序遍历，查找二叉树中 第 k 小的值
var kthSmallest = function (root, k) {
  let arr = []
  function traversal(node) {
    if (node !== null) {
      traversal(node.left)
      arr.push(node.val)
      traversal(node.right)
    }
  }
  traversal(root)
  return arr[k - 1]
}

// 迭代法 前中后遍历

// let inorderTraversal = function (root) {
//   const [WHITE, GRAY] = [0, 1]
//   let res = []
//   let stack = [(root, WHITE)]
//   while (stack) {

//   }
// }
