function defaultEquals(a, b) {
  return a === b;
}
class Node {
  constructor(element, next) {
    this.element = element;
    this.next = next;
  }
}
class LinkedList {
  constructor(equalsFn = defaultEquals) {
    this.count = 0
    this.head = undefined
    this.equalsFn = equalsFn
  }

  // push(element):            向链表尾部添加一个新元素
  push(element) {
    const node = new Node(element)
    let current
    if (this.head == null) {
      this.head = node
    } else {
      current = this.head             //得到head的引用
      while (current.next != null) {  // 一直循环，直到找到next指向一个null ,这说明这是链表的尾巴了
        current = current.next
      }
      // 将 next 赋值为新元素（引用）
      current.next = node
    }
    this.count++
  }

  // insert(element,position): 向链表特定位置插入一个新元素
  insert(element, index) {
    if (index >= 0 && index < this.count) {
      const node = new Node(element)
      if (index === 0) {
        const current = this.head
        node.next = current
        this.head = node
      } else {
        const previous = this.getElementAt(index - 1)
        const current = previous.next
        node.next = current
        previous.next = node
      }
      this.count++
      return true
    }
    return false
  }

  // getElementAt(index):     返回链表中特定位置的元素，若不存在返回undefined
  getElementAt(index) {
    if (index >= 0 && index <= this.count) {
      let node = this.head
      for (let i = 0; i <= index; i++) {
        node = node.next
      }
      return node
    }
    return undefined
  }

  // remove(element):          从链表中移除一个元素
  remove(element) {
    const index = this.indexOf(element)
    this.removeAt(index)
  }

  // indexOf(element):         返回元素在链表中的索引，若无返回-1
  indexOf(element) {
    const current = this.head
    for (let i = 0; i < this.count && current != null; i++) {
      if (this.equalsFn(current.element, element)) {
        return i
      }
      current = current.next
    }
    return -1
  }

  // removeAt(position):       从链表的特定位置移除一个元素
  removeAt(index) {
    if (index >= 0 && index < this.count) {
      let current = this.head
      if (index === 0) {      //移除第一项
        this.head = current.next
      } else {
        const previous = this.getElementAt(index - 1)
        current = previous.next
        previous.next = current.next //将previous 指向 下下个节点
      }
      this.count--
      return current.element //返回移除的元素
    }
    return undefined
  }

  // getHead():                返回链表的头部
  getHead() {
    return this.head
  }

  // isEmpty():                链表若为空返回true，不为空返回false
  isEmpty() {
    return this.size() === 0
  }

  // size():                   返回链表中元素的个数
  size() {
    return this.count
  }
  clear() {
    this.count = 0
    this.head = undefined
  }
  // toString():               返回整个链表的字符串表达式（由于使用Node类，需重写继承自JS对象默认的toString方法，然它只输出元素的值）
  toString() {
    if (this.head == null) {
      return '';
    }
    let objString = `${this.head.element}`;
    let current = this.head.next;
    for (let i = 1; i < this.size() && current != null; i++) {
      objString = `${objString},${current.element}`;
      current = current.next;
    }
    return objString;
  }
}
class DoublyNode extends Node {
  constructor(element, next, prev) {
    super(element, next)
    this.prev = prev
  }
}

class DoublyLinkedList extends LinkedList {
  constructor(equalsFn = defaultEquals) {
    super(equalsFn)
    this.tail = undefined
  }
  push(element) {
    const node = new DoublyNode(element)
    if (this.head == null) {              //若链表为空表示插入的是第一个 只需要头尾都设置为该元素
      this.head = node
      this.tail = node
    } else {
      this.tail.next = node               //将node设为原tail的下一个元素  （插入到最后）
      node.prev = this.tail               //将node的上一个设为原tail      （建立联系）
      this.tail = node                    //将tail的标识指向node          （实至名归）
    }
    this.count++
  }
  insert(element, index) {
    if (index >= 0 && index <= this.count) {
      const node = new DoublyNode(element)
      let current = this.head
      if (index === 0) {
        if (this.head == null) {
          this.head = node
          this.tail = node
        } else {
          node.next = this.head
          current.prev = node.next
          this.head = node
        }
      } else {
        if (index === this.count) {
          current = this.tail
          current.next = node
          node.prev = current
          this.tail = node    // 更新tail尾巴
        } else {
          const previous = thsi.getElementAt(index - 1)
          current = previous.next

          node.next = current
          previous.next = node
          current.prev = node   // 新增的
          node.prev = previous  // 新增的
        }
      }
      this.count++
      return true
    }
    return false
  }
  removeAt(index) {
    if (index >= 0 && index < this.count) {
      let current = this.head
      if (index === 0) {                      // 移除第一项
        this.head = current.next
        if (this.count === 1) {
          this.tail = undefined
        } else {
          this.head.prev = undefined
        }
      } else if (index === this.count - 1) {  // 移除最后一项
        current = this.tail
        this.tail = current.prev
        this.tail.next = undefined
      } else {                                // 移除中间项
        current = this.getElementAt(index)
        const previous = current.prev
        previous.next = current.next
        current.next.prev = previous          // 新增的 需要更新prev的指向
      }
      this.count--
      return current.element
    }
    return undefined
  }
  indexOf(element) {
    let current = this.head
    for (let i = 0; i < this.count && current != null; i++) {
      if (this.equalsFn(current.element, element)) {
        return i
      }
      current = current.next
    }
    return -1
  }
  getHead() {
    return this.head;
  }
  getTail() {
    return this.tail;
  }
  clear() {
    super.clear()
    this.tail = undefined
  }
  inverseToString() {
    if (this.tail == null) {
      return ''
    }
    let objString = `${this.tail.element}`
    let previous = this.tail.prev
    for (let i = 1; i < this.count && previous != null; i++) {
      objString = `${objString},${previous.element}`
      previous = previous.prev
    }
    return objString
  }
}

const doublyLinked = new DoublyLinkedList()
doublyLinked.push('111')
doublyLinked.push('222')
doublyLinked.push('333')
doublyLinked.push('444')
doublyLinked.push('555')
doublyLinked.push('666')
console.log(doublyLinked.toString())
console.log(doublyLinked.inverseToString())
console.log(doublyLinked.size())

console.log(doublyLinked.indexOf('222'))

console.log(doublyLinked.size())

doublyLinked.clear()
console.log(doublyLinked.size())
