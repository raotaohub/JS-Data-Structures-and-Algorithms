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
      for (let i = 1; i <= index; i++) {
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
  // clear()
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


// ##单向循环列表
class CircularLinkedList extends LinkedList {
  constructor(equalsFn = defaultEquals) {
    super(equalsFn)
  }
  push(element) {
    const node = new Node(element)
    let current
    if (this.head == null) {
      this.head = node
    } else {
      current = this.getElementAt(this.size() - 1) // 1.找到最后一个元素
      current.next = node                          // 2.将最后一个元素的next设置为node
    }
    node.next = this.head                          // 3.两种情况都需要将 node.next 指向头部
    this.count++

  }
  insert(element, index) {
    if (index >= 0 && index <= this.count) {
      const node = new Node(element)
      let current = this.head
      if (index === 0) {                            //在第一个位置插入  空链表
        if (this.head == null) {
          this.head = node
          node.next = this.head
        } else {                                    //在第一个位置插入  非空链表
          node.next = current
          current = this.getElementAt(this.size())
          this.head = node
          current.next = this.head                  // 新增
        }
      } else {
        const previous = this.getElementAt(index - 1)       // 找到要插入位置前一个崽
        const current = previous.next                       // 找到被插入位置当前的崽
        node.next = current                                 // 
        previous.next = node
      }
      this.count++
      return true
    }
    return false
  }
  removeAt(index) {
    if (index >= 0 && index < this.count) {
      let current = this.head
      if (index === 0) {
        if (this.size() === 1) {     // 情况一 删除第一元素，且链表只有一个元素，直接将head指向undefined
          this.head = undefined
        } else {
          const last = this.getElementAt(this.size() - 1)
          current = this.head
          this.head = current.next
          last.next = this.head
        }
      } else {
        const previous = this.getElementAt(index - 1)
        current = previous.next
        previous.next = current.next
      }
      this.count--
      return current.element
    }
    return undefined
  }
}
console.log('单向循环链表测试开始')
const cirlinkedlist = new CircularLinkedList()
cirlinkedlist.push('鲁智深')
cirlinkedlist.push('李逵')
cirlinkedlist.push('鸠摩智')
cirlinkedlist.push('武松')
cirlinkedlist.push('曹雪芹')

// console.log(cirlinkedlist.removeAt(3))

// console.log(cirlinkedlist)
cirlinkedlist.insert('洪七公', 1)
// cirlinkedlist.push('李刚')
console.log(cirlinkedlist.toString())