function defaultEquals(a, b) {
  return a === b;
}
class Node {
  constructor(element, next) {
    this.element = element;
    this.next = next;
  }
}
/*  
  push(element):            向链表尾部添加一个新元素
  insert(element,position): 向链表特定位置插入一个新元素
  getElementAt(index):      返回链表中特定位置的元素，若不存在返回undefined
  remove(element):          从链表中移除一个元素
  indexOf(element):         返回元素在链表中的索引，若无返回-1
  removeAt(position):       从链表的特定位置移除一个元素
  isEmpty():                链表若为空返回true，不为空返回false
  size():                   返回链表中元素的个数
  toString():               返回整个链表的字符串表达式（由于使用Node类，需重写继承自JS对象默认的toString方法，然它只输出元素的值）
 */
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
// export { defaultEquals, Node, LinkedList };
const list = new LinkedList()
list.push(15)
list.push(10)
list.push(12)
list.push(11)
list.push(8)
console.log(list)
console.log('111')

