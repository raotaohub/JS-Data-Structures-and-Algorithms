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
  // insertNode(node, key) {
  //   // 判断大小 看是要插入左侧还是右侧
  //   if (this.compare(key, node.key) == -1) {

  //     if (node.left == null) {
  //       node.left = new Node(key)
  //     } else {
  //       this.insertNode(node.left, key)
  //     }
  //   } else {

  //     if (node.right == null) {
  //       node.right = new Node(key)
  //     } else {
  //       this.insertNode(node.right, key)
  //     }
  //   }
  // }
  insertNode(node, key) {
    // 判断大小 看是要插入左侧还是右侧
    if (this.compare(node.key, key) == Compare.LESS_THAN) {

      if (node.right == null) {
        node.right = new Node(key)
      } else {
        this.insertNode(node.right, key)
      }
    } else {

      if (node.left == null) {
        node.left = new Node(key)
      } else {
        this.insertNode(node.left, key)
      }
    }
  }
  // search()               在树中查找一个键，以布尔值返回
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
  // postOrderTraverse()    通过后续 遍历方式 遍历所有的节点
  // min()                  返回树中 最小的 键/值
  // max()                  返回树中 最大的 键/值
  // remove()               移除某个键

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

console.log(tree)