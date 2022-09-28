class ListNode {
  constructor(node) {
    this.node = node
    this.next = null
  }
}
function defaultEquals(a, b) {
  return a === b
}

class LinkedList {
  constructor(equalsFn = defaultEquals) {
    this.equalsFn = equalsFn
    this.count = 0
    this.head = null
  }
  // push(element):            向链表尾部添加一个新元素
  push(ele) {
    const node = new ListNode(ele)
    if (this.head === null) {
      this.head = node
    } else {
      let current = this.head
      while (current.next !== null) {
        current = current.next
      }
      current.next = node
    }
    this.count++
  }
  // insert(element,position): 向链表特定位置插入一个新元素
  insert(ele, index) {
    if (index >= 0 && index <= this.count) {
      const node = new ListNode(ele)
      if (index === 0) {
        const current = this.head
        node.next = current
        this.head = node
      } else {
        let current = this.head
        let previous = current
        while (index--) {
          previous = current
          current = current.next
        }
        previous.next = node
        node.next = current
      }
      this.count++
      return true
    }
    return false
  }
  // getElementAt(index):      返回链表中特定位置的元素，若不存在返回undefined
  getElementAt(index) {
    if (index >= 0 && index < this.count) {
      let current = this.head
      // 若为空链表 返回 0 的值
      // for (let i = 0; i < index && current !== null; i++) {
      //   current = current.next
      // }
      // 很烦， inde <= this.count 的话 还要判断 current !==null; this.count 的地方本来也没有元素，何必多此一举。
      // for (let i = 0; i < index; i++) {
      //   current = current.next
      // }
      let i = 0
      while (i++ < index) {
        current = current.next
      }
      return current
    }
    return undefined
  }
  // remove(element):          从链表中移除一个元素
  remove(ele) {
    const index = this.indexOf(ele)
    return this.removeAt(index)
  }
  // indexOf(element):         返回元素在链表中的索引，若无返回-1
  indexOf(ele) {
    let current = this.head
    for (let i = 0; i < this.count && current !== null; i++) {    // current 若为nul说明就是没有
      if (this.equalsFn(ele, current.node)) {
        return i
      }
      current = current.next
    }
    return -1
  }
  // removeAt(index):       从链表的特定位置移除一个元素
  removeAt(index) {
    if (index >= 0 && index < this.count) {
      let current = this.head
      if (index === 0) {
        this.head = current.next
      } else {
        let previous
        let i = 0
        while (i++ < index) {
          previous = current
          current = current.next
        }
        previous.next = current.next
      }
      this.count--
      return true
    }
    return false
  }
  // isEmpty():                链表若为空返回true，不为空返回false
  isEmpty() {
    return this.count === 0
  }
  // size():                   返回链表中元素的个数
  size() {
    return this.count
  }
  // toString():               返回整个链表的字符串表达式（由于使用Node类，需重写继承自JS对象默认的toString方法，然它只输出元素的值）
  toString() {
    if (!this.isEmpty()) {
      let str = `${this.head.node}`
      let current = this.head.next
      let i = 1
      while (i++ < this.count) {
        str = `${str},${current.node}`
        current = current.next
      }
      return str
    }
    return ''
  }
  // toString() {
  //   if (this.head == null) {
  //     return '';
  //   }
  //   let objString = `${this.head.node}`;
  //   let current = this.head.next;
  //   for (let i = 1; i < this.size() && current != null; i++) {
  //     objString = `${objString},${current.node}`;
  //     current = current.next;
  //   }
  //   return objString;
  // }
}

const list = new LinkedList()
list.push(15)
list.push(10)
list.push(12)
list.push(11)
list.push(8)
console.log(list.insert('哈喽', 5));
list.removeAt(0)
list.remove(8)
console.log(list.size());
console.log(list.isEmpty());
console.log(list.toString())
console.log('111')
