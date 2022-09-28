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
function defaultToString(item) {
  if (item === null) {
    return 'NULL';
  } else if (item === undefined) {
    return 'UNDEFINED';
  } else if (typeof item === 'string' || item instanceof String) {
    return `${item}`;
  }
  return item.toString();
}

class HashTableSeparateChaining {
  constructor(toStrFn = defaultToString) {
    this.toStrFn = toStrFn
    this.table = {}
  }
  loseloseHashCode(key) {
    if (typeof key === 'number') {
      return key
    }
    const tableKey = this.toStrFn(key)    //若不是数字，转换为字符串
    let hash = 0
    for (let i = 0; i < tableKey.length; i++) {
      hash += tableKey.charCodeAt(i)      //charCodeAt() 返回表示给定索引的字符的Unicode的值。
    }
    return hash % 37
  }
  hashCode(key) {
    return this.loseloseHashCode(key)
  }
  put(key, value) {
    if (key != null && value != null) {
      const position = this.hashCode(key)
      if (this.table[position] == null) {
        this.table[position] = new ValuePair(key, value)
      } else {
        let index = position + 1                    // 线性查找在于，若当前的position不为null 
        while (this.table[index] != null) {         // 则将position+1 继续查找
          index++                                   // 若找不到则递增1 直到找到空位
        }
        this.table[index] = new ValuePair(key, value)
      }
      return true
    }
    return false
  }
  get(key) {
    const position = this.hashCode(key)
    if (this.table[position] != null) {
      if (this.table[position].key === key) {
        return this.table[position].value
      }
      let index = position + 1
      while (this.table[index].key !== key && this.table[index] != null) {
        index++
      }
      if (this.table[index].key === key && this.table[index] !== null) {
        return this.table[index].value
      }
    }
    return undefined
  }
  verifyRemoveSideEffect(key, removedPosition) {
    const hash = this.hashCode(key)
    let index = removedPosition + 1
    while (this.table[index] != null) {
      const posHash = this.hashCode(this.table[index].key)  // 获得下一个位置元素的key的hash值
      if (posHash <= hash || posHash <= removedPosition) {
        this.table[removedPosition] = this.table[index]
        delete this.table[index]
        removedPosition = index
      }
      index++
    }
  }
  remove(key) {
    const position = this.hashCode(key)
    if (this.table[position] != null) {
      if (this.table[position].key === key) {
        delete this.table[position]
        this.verifyRemoveSideEffect(key, position)       //
        return true
      }
      let index = position + 1
      while (this.table[index].key !== key && this.table[index] != null) {
        index++
      }
      if (this.table[index].key === key && this.table[index] !== null) {
        delete this.table[index]
        this.verifyRemoveSideEffect(key, index)           //
        return true
      }
    }
    return undefined
  }
}