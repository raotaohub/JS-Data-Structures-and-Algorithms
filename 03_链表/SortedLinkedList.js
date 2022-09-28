/* ##有序链表
  指保持元素的有序的链表结构，除了使用排序算法外，还可以将元素插入到正确的位置来保持链表的有序性。
 */
const Compare = {
  LESS_THAN: -1,
  BIGGER_THAN: 1
}
function defaultCompare(a, b) {
  if (a === b) {
    return 0
  }
  return a > b ? Compare.LESS_THAN : Compare.BIGGER_THAN
}
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
class SortedLinkedList extends LinkedList {
  constructor(equalsFn = defaultEquals, compareFn = defaultCompare) {
    super(equalsFn);
    this.equalsFn = equalsFn;
    this.compareFn = compareFn;
  }
  push(element) {
    if (this.isEmpty()) {
      super.push(element)
    } else {
      const index = this.getIndexNextSortedElement(element)
      super.insert(element, index)
    }
  }
  // 所谓有序列表，就是不允许随意插入，排序的法则，其实是字符串的Unicode比较 或者是数字大小比较
  insert(element, index = 0) {
    if (this.isEmpty()) {                       // 用原来LinkedList 中的 insert方法 重写有序链表的insert 
      return super.insert(element, 0)
    }
    const pos = this.getIndexNextSortedElement(element)
    return super.insert(element, pos)
  }
  getIndexNextSortedElement(element) {                           // 获得正确的插入位置 
    let current = this.head
    let i = 0
    for (; i < this.size() && current; i++) {
      const comp = this.compareFn(element, current.element)      // 比较元素
      if (comp === Compare.LESS_THAN) {                          // 若 comp === -1 就返回i 
        return i
      }
      current = current.next                                     // 若 comp 始终不等于 -1 则循环直到找到为止
    }
    return i
  }

}

console.log('start')

const sortedList = new SortedLinkedList()
// ##
sortedList.push('111')
sortedList.push('222')
sortedList.insert('333')
sortedList.push('444')
sortedList.insert('333', 0)
sortedList.insert('a')
sortedList.insert('aaa')
sortedList.insert('AA', 4)
sortedList.insert('BB', 2)
// ## =>                               aaa,a,444,BB,AA,333,222,333,111
console.log(sortedList.toString())