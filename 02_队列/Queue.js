// 队列遵循的是 先进先出(FIFO)原则的一组有序的项。队列在尾部添加新元素，在顶部移除元素
/* 
  enqueue(element(s)):  向队列尾部添加一个或多个新的项
  dequeue():            移除队列的第一项，并返回 
  peek():               返回队列中第一个元素
  isEmpty():            检查队列是否为空，为空返回true，不为空返回false
  size() :              返回队列里元素的个数
  clear()               清空队列
*/
class Queue {
  constructor() {
    this.count = 0
    this.lowestCount = 0  // 队列顶部元素的标识
    this.items = {}
  }
  // enqueue(element(s)):  向队列尾部添加一个或多个新的项
  enqueue(element) {
    this.items[this.count] = element
    this.count++
  }
  // dequeue():            移除队列的第一项，并返回 
  dequeue() {
    if (this.isEmpty()) {
      return undefined
    }
    const result = this.items[this.lowestCount]
    delete this.items[this.lowestCount]
    this.lowestCount++
    return result
  }
  // peek():               返回队列中第一个元素
  peek() {
    if (this.isEmpty()) {
      return undefined
    }
    return this.items[this.lowestCount]
  }
  size() {
    // 要计算队列中有多少元素，只需要计算count和lowestCount的差值 
    // 假设count为2，lowestCount为0 ，这时候移除队列中一个元素，count依然是2，lowestCount为1，差值为1 这时候队列中有1个元素
    return this.count - this.lowestCount
  }
  // isEmpty():            检查队列是否为空，为空返回true，不为空返回false
  isEmpty() {
    return this.size() === 0
  }
  // size() :              返回队列里元素的个数

  clear() {
    this.count = 0
    this.lowestCount = 0
    this.items = {}
  }
  // 返回字符串
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
const queue = new Queue()
console.log(queue.isEmpty())  // true
queue.enqueue('John')
queue.enqueue('Jack')
console.log(queue.toString()) // John,Jack

queue.enqueue('Camila')

console.log(queue.toString()) // John,Jack,Camila
console.log(queue.size())     // 3
console.log(queue.isEmpty())  // false
queue.dequeue()
queue.dequeue()
console.log(queue.toString()) // Camila
console.log(queue)

// 击鼓传花
function hotPotato(elementsList, num) {
  const queue = new Queue()
  const elimitatedList = []
  for (let i = 0; i < elementsList.length; i++) {
    // 令数组的所有元素 入列
    queue.enqueue(elementsList[i])
  }
  // 长度需大于1 ？ 不懂
  while (queue.size() > 1) {
    for (let i = 0; i < num; i++) {
      queue.enqueue(queue.dequeue())
    }
    elimitatedList.push(queue.dequeue())
  }
  return {
    eliminated: elimitatedList,
    winner: queue.dequeue()
  }
}
const names = ['John', 'Jack', 'Camila', 'Ingrid', 'Carl']
const result = hotPotato(names, 7)

result.eliminated.forEach(name => {
  console.log(`${name}在击鼓传花游戏中被淘汰`)
})

console.log(result.winner)




