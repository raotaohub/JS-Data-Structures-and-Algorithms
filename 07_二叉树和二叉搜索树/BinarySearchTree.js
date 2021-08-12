export function defaultCompare(a, b) {
  if (a === b) {
    return Compare.EQUALS // 相等 返回 0
  }
  return a < b ? Compare.LESS_THAN : Compare.BIGGER_THAN // 小于返回 -1 大于返回1
}
const Compare = {
  LESS_THAN: -1,
  BIGGER_THAN: 1,
  EQUALS: 0,
}
class Node {
  constructor(key) {
    this.key = key
    this.left = null
    this.right = null
  }
}
/*
  insert()               在树中插入一个键
  search()               在树中查找一个键，以布尔值返回
  inOrderTraverse()      通过中序 遍历方式 遍历所有的节点
  preOrderTraverse()     通过先序 遍历方式 遍历所有的节点
  postOrderTraverse()    通过后续 遍历方式 遍历所有的节点
  min()                  返回树中 最小的 键/值
  max()                  返回树中 最大的 键/值
  remove()               移除某个键
*/
class BinarySearchTree {
  constructor(compareFn = defaultCompare) {
    this.compareFn = compareFn // 用于比较 以判断时放入左右哪边
    this.root = null // 根节点 仅有一个
  }
  insertNode(node, key) {
    if (this.compareFn(key, node.key) === Compare.LESS_THAN) {
      // 1.  key小于node.key 放到node的左侧
      if (node.left == null) {
        // 1.2 如果左侧是null 就地插入
        node.left = new Node(key)
      } else {
        this.insertNode(node.left, key) // 1.3 如不为null利用递归，再一次判断key放到该节点左侧还是右侧
      }
    } else {
      // 2.  key大于node.key 放到node的右侧
      if (node.right == null) {
        // 2.2 如果右侧是null 就地插入
        node.right = new Node(key)
      } else {
        this.insertNode(node.right, key) // 2.3 如不为null利用递归，再一次判断key放到该节点左侧还是右侧
      }
    }
  }
  insert(key) {
    if (this.root == null) {
      this.root = new Node(key)
    } else {
      this.insertNode(this.root, key)
    }
  }
  // 在树中查找一个键，以布尔值返回
  search(key) {
    return this.searchNode(this.root, key)
  }
  searchNode(node, key) {
    if (node == null) {
      return false
    }

    if (this.compareFn(key, node.key) === Compare.LESS_THAN) {
      return this.searchNode(node.left, key)
    } else if (this.compareFn(key, node.key) === Compare.BIGGER_THAN) {
      return this.searchNode(node.right, key)
    } else {
      return true
    }
  }
  // 中序遍历
  inOrderTraverse(callback) {
    this.inOrderTraverseNode(this.root, callback)
  }
  inOrderTraverseNode(node, callback) {
    if (node != null) {
      this.inOrderTraverseNode(node.left, callback)
      callback(node.key)
      this.inOrderTraverseNode(node.right, callback)
    }
  }

  // 先序遍历
  preOrderTraverse(callback) {
    this.preOrderTraverseNode(this.root, callback)
  }
  preOrderTraverseNode(node, callback) {
    if (node != null) {
      callback(node.key)
      this.preOrderTraverseNode(node.left, callback)
      this.preOrderTraverseNode(node.right, callback)
    }
  }
  // 后序遍历
  postOrderTraverse(callback) {
    this.postOrderTraverseNode(node, callback)
  }
  postOrderTraverseNode(node, callback) {
    if (node != null) {
      this.postOrderTraverseNode(node.left, callback)
      this.postOrderTraverseNode(node.right, callback)
      callback(node.key)
    }
  }
  // 返回最小值
  minNode(node) {
    let current = node.left
    while (current != null && current.left != null) {
      current = current.left
    }
    return current
  }
  min() {
    if (this.root != null) {
      return this.minNode(this.root)
    }
    return undefined
  }
  // 返回最大值
  maxNode(node) {
    let current = node.right
    while (current != null && current.right != null) {
      current = current.right
    }
    return current
  }
  max() {
    if (this.root != null) {
      return this.maxNode(this.root)
    }
    return undefined
  }
  // 移除
  removeNode(node, key) {
    if (this.root == null) {
      return null
    }
    if (this.compareFn(key, node.key) === Compare.LESS_THAN) {
      // 传入比较函数，判断key值在左侧
      node.left = this.removeNode(node.left, key) //？？？。。
      return node
    } else if (this.compareFn(key, node.key) === Compare.BIGGER_THAN) {
      // 传入比较函数，判断key值在右侧
      node.right = this.removeNode(node.right, key) //？？？。。
      return node
    } else {
      // 进入这一步说明 node == key 已经找到了
      if (node.left == null && node.left == null) {
        node = null // 1 如果该节点没有 左右的子节点 直接将节点null
        return node
      }
      if (node.left == null) {
        // 2.1 如果左节点是空的 将右节点赋值给node
        node = node.right
        return node
      } else if (node.right == null) {
        // 2.2 如果右节点是空的 将左节点赋值给node
        node = node.left
        return node
      } // 3 若该节点有左右子节点
      const aux = this.minNode(node.right) //   找到该节点右侧子树的最小节点
      node.key = aux.key //   移除该节点，替换为原右侧子树的最小节点
      node.right = this.removeNode(node.right, aux.key) //   移除该节点（原右侧子树的最小节点）？？？。。
      return node //   向父节点返回更新后节点的引用 ？？？。。
    }
  }
  remove(key) {
    this.root = this.removeNode(this.root, key)
  }
}

const tree = new BinarySearchTree()
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

const printNode = value => console.log(value)
tree.inOrderTraverse(printNode)
console.log(
  '————————————————————————————————————————先序遍历————————————————————————————————————————'
)
tree.preOrderTraverse(printNode)

console.log(
  '——————————————————————————————————————————查找——————————————————————————————————————————'
)
console.log(tree.search(1) ? 'key 1 found' : 'key 1 not found')
console.log(tree.search(25) ? 'key 25 found' : 'key 25 not found')
console.log(
  '——————————————————————————————————————————移除——————————————————————————————————————————'
)
tree.remove(6)
tree.remove(5)
tree.remove(15)
console.log(tree)
console.log(
  '——————————————————————————————————————————迭代中序——————————————————————————————————————————'
)

export default BinarySearchTree
