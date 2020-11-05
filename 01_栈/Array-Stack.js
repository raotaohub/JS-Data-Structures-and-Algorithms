/*4.2.1 创建一个基于数组的栈

  栈结构：遵循先进后出(LIFO)原则的有序集合，新添加或待删除的元素都保存在栈顶，另一端叫栈底。
  在栈里新的元素都靠近栈顶，旧的元素都接近栈底。
    栈的几个功能
    push(element(s)): 添加一个或多个元素到栈顶
    pop():            移除栈顶的元素，同时返回该元素
    peek():           返回栈顶的元素
    isEmpty():        检查栈是否为空，为空返回true，不为空返回false
    clear():          移除栈里所有元素
    size() :          返回栈里的个数
*/
class Stack {
  constructor() {
    this.items = []
  }
  // push(element): 添加一个或多个元素到栈顶
  push(element) {
    this.items.push(element)
  }
  // pop():            移除栈顶的元素，同时返回该元素
  pop() {
    if (this.items.isEmpty()) {
      return undefined
    }
    return this.items.pop()
  }
  // peek():           返回栈顶的元素
  peek() {
    if (this.items.isEmpty()) {
      return undefined
    }
    return this.items[this.items.length - 1]
  }
  // isEmpty():        检查栈是否为空，为空返回true，不为空返回false
  isEmpty() {
    return this.items.size() === 0
  }
  // clear():          移除栈里所有元素
  clear() {que
    if (this.items.isEmpty()) {
      return undefined
    }
    for (let i = 0; i < this.items.length; i++) {
      this.items.pop()
    }
  }
  // size() :          返回栈里的个数
  size() {
    if (this.items.isEmpty()) {
      return undefined
    }
    return this.items.length
  }
}