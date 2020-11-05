// 双端队列数据结构 同时遵守了先进先出 后进先出的原则 ，可以看成事栈和队列的结合
/* 
  // addFront(element):  在双端队列的 前端，添加新的元素
  // addBack(element):  在双端队列的 后端 添加新元素，     与队列的enqueue方法相同
  // removeFront():     移除双端队列的 前端 的第一个元素， 与Queue类的dequeue方法相同 
  // removeBack():      移除双端队列的 后端 的第一个元素， 与Stack类的pop方法相同
  // peekFront():       返回双端队列的 前端 的第一个元素
  // peekBack():        返回双端队列的 后端 的第一个元素
  // isEmpty():         检查双端队列是否为空，为空返回true，不为空返回false
  // size() :           返回双端队列里元素的个数
  // clear()            清空双端队列
  // toString()         返回双端队列字符串值表达式
*/
class Deque {
  constructor() {
    this.count = 0
    this.lowestCount = 0
    this.items = {}
  }

  // addFront(element):  在双端队列的 前端，添加新的元素
  addFront(element) {
    // 1、队列为空
    if (this.isEmpty()) {
      this.addBack(element)
      // 2、队列前端的一个元素，已经被移除过一次 
    } else if (this.lowestCount > 0) {
      this.lowestCount--
      this.items[this.lowestCount] = element
    } else {
      // 3、队列不为空，前端没有被移除过元素，所有元素往后移一位，注：如果count=3 那么key为3的键没有值。这样就是为什么在数组中长度总是比元素的个数大1位
      for (let i = this.count; i > 0; i--) {
        this.items[i] = this.items[i - 1]
      }
      this.count++
      this.lowestCount = 0
      this.items[0] = element
    }
  }

  // addBack(element):  在双端队列的 后端 添加新元素，     与队列的enqueue方法相同
  addBack(element) {
    this.items[this.count] = element
    this.count++
  }

  // removeFront():     移除双端队列的 前端 的第一个元素并返回， 与Queue类的dequeue方法相同 
  removeFront() {
    if (this.isEmpty()) {
      return undefined
    }
    const result = this.items[this.lowestCount]
    delete this.items[this.lowestCount]
    this.lowestCount++
    return result
  }

  // removeBack():      移除双端队列的 后端 的第一个元素并返回， 与Stack类的pop方法相同
  removeBack() {
    if (this.isEmpty()) {
      return undefined
    }
    this.count--
    const result = this.items[this.count]
    delete this.items[this.count]
    return result
  }

  // peekFront():       返回双端队列的 前端 的第一个元素
  peekFront() {
    if (this.isEmpty()) {
      return undefined
    }
    return this.items[this.lowestCount]
  }

  // peekBack():        返回双端队列的 后端 的第一个元素
  peekBack() {
    if (this.isEmpty()) {
      return undefined
    }
    return this.items[this.count - 1]
  }

  // size() :           返回双端队列里元素的个数
  size() {
    // 要计算队列中有多少元素，只需要计算count和lowestCount的差值；假设count为2，lowestCount为0 ，这时候移除队列中一个元素，count依然是2；假设lowestCount为1，差值为1 这时候队列中有1个元素
    return this.count - this.lowestCount
  }
  // isEmpty():         检查双端队列是否为空，为空返回true，不为空返回false
  isEmpty() {
    return this.size() === 0
  }

  // clear()            清空双端队列
  clear() {
    this.count = 0
    this.lowestCount = 0
    this.items = {}
  }

  // toString()         返回双端队列字符串值表达式
  toString() {
    if (this.isEmpty()) {
      return ''
    }
    let objString = `${this.items[this.lowestCount]}`
    for (let i = this.lowestCount + 1; i < this.count; i++) {
      objString = `${objString},${this.items[i]}`
    }
    return objString
  }
}

const deque = new Deque();
console.log(deque.isEmpty()); // outputs true
deque.addBack('John');
deque.addBack('Jack');
console.log(deque.toString()); // John,Jack
deque.addBack('Camila');
console.log(deque.toString()); // John,Jack,Camila
console.log(deque.size()); // outputs 3
console.log(deque.isEmpty()); // outputs false
deque.removeFront(); // remove John
console.log(deque.toString()); // Jack,Camila

deque.removeBack(); // Camila decides to leave
console.log(deque.toString()); // Jack
deque.addFront('John'); // John comes back for information
console.log(deque.toString()); // John,Jack

// 回文检查器算法
function palindromeChecker(aString) {
  // 首先检查字符串是否合法
  if (aString === undefined || aString === null || (aString !== null && aString.length === 0)) {
    return false
  }
  const deque = new Deque()
  const lowerString = aString.toLocaleLowerCase().split(' ').join('') // 转换成小写，按空格分割成数组，按空串返回字符串
  let isEgual = true
  let firstChar, lastChar
  // 把所有字符入列
  for (let i = 0; i < lowerString.length; i++) {
    deque.addBack(lowerString.charAt(i))
  }
  // 同时移除前端和后端的字符，然后进行比较，若不相对则说明不是回文咯。
  while (deque.size() > 1 && isEgual) {
    firstChar = deque.removeFront()
    lastChar = deque.removeBack()
    if (firstChar !== lastChar) {
      isEgual = false
    }
  }
  return isEgual
}
console.log('a', palindromeChecker('a'));
console.log('aa', palindromeChecker('aa'));
console.log('kayak', palindromeChecker('kayak'));
console.log('level', palindromeChecker('level'));
console.log('Was it a car or a cat I saw', palindromeChecker('Was it a car or a cat I saw'));
console.log('Step on no pets', palindromeChecker('Step on no pets'));
