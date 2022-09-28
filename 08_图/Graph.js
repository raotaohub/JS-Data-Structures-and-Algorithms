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
class ValuePair {
  constructor(key, value) {
    this.key = key
    this.value = value
  }
  toString() {
    return `[#${this.key}:${this.value}]`
  }
}
/*
  字典以[键,值]的方式存储元素  
  set(key,value)
  remove(key)
  hasKey(key)
  get(key)
  clear()
  size()
  isEmpty()
  keys()
  values()
  keyValues()
  forEach(callback)

 */
class Dictionary {
  constructor(toStrFn = defaultToString) {
    this.toStrFn = toStrFn
    this.table = {}
  }
  // set(key, value)
  set(key, value) {
    if (key != null && value != null) {
      const tableKey = this.toStrFn(key)
      this.table[tableKey] = new ValuePair(key, value)
      return true
    }
    return false
  }
  // remove(key)
  remove(key) {
    if (this.table[key]) {// 如果存在key
      delete this.table[this.toStrFn(key)] // 删除该key属性            要注意将key转换为字符串形式，否则会出现意外            
      return true
    }
    return false
  }
  // hasKey(key)
  hasKey(key) {
    return this.table[this.toStrFn(key)] != null                  // 检查一下table里这个key名是否已经存在了
  }
  // get(key)
  get(key) {
    const valuePair = this.table[this.toStrFn(key)]               // 获得该值
    return valuePair == null ? undefined : valuePair.value        // 判断 
  }
  // clear()
  clear() {
    this.table = {}
  }
  // size()
  size() {
    return this.keyValues().length
  }
  // isEmpty()
  isEmpty() {
    return this.size() === 0
  }
  // keys()
  keys() {
    return this.keyValues().map(valuePair => valuePair.key)
  }
  // values()
  values() {
    return this.keyValues().map(valuePair => valuePair.value)
  }
  // keyValues()
  keyValues() {
    // return Object.values(this.table) // 不是所有浏览器都支持Object.values()
    const valuePairs = []
    for (let key in this.table) {
      if (this.hasKey(key)) {
        valuePairs.push(this.table[key])
      }
    }
    return valuePairs
  }
  // forEach(callback)
  forEach(callback) {
    const valuePairs = this.keyValues()
    for (let i = 0; i < valuePairs.length; i++) {
      const result = callback(valuePairs[i].key, valuePairs[i].value)
      if (result === false) {
        break
      }
    }
  }

  toString() {
    if (this.isEmpty()) {
      return ''
    }
    const valuePairs = this.keyValues()
    let objString = `${valuePairs[0].toString()}`
    for (let i = 1; i < valuePairs.length; i++) {
      objString = `${objString},${valuePairs[i].toString()}`
    }
    return objString
  }
}
class Graph {
  constructor(isDirected = false) {
    this.isDirected = isDirected
    this.vertices = []
    this.abjList = new Dictionary()
  }
  addVertex(v) {                      // 添加一个顶点
    if (!this.vertices.includes(v)) {
      this.vertices.push(v)           // 添加到顶点列表中
      this.abjList.set(v, [])         // 向字典添加新元素，将v作为key，[]数组为值
    }
  }
  addEdge(v, w) {                      // 添加一个边，为两个顶点建立关系
    if (!this.abjList.get(v)) {        // 若v或w不存在于图中，则将v或w添加到图里
      this.addVertex(v)
    }
    if (!this.abjList.get(w)) {
      this.addVertex(w)
    }
    this.abjList.get(v).push(w)
    if (!this.isDirected) {
      this.abjList.get(w).push(v)
    }
  }
  getVertices() {
    return this.vertices
  }
  getAbjList() {
    return this.abjList
  }
  toString() {
    let s = ''
    for (let i = 0; i < this.vertices.length; i++) {
      s += `${this.vertices[i]} -> `
      const neighbors = this.abjList.get(this.vertices[i])
      for (let j = 0; j < neighbors.length; j++) {
        s += `${neighbors[j]}`
      }
      s += `\n`
    }
    return s
  }
}

const graph = new Graph();

const myVertices = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I'];

for (let i = 0; i < myVertices.length; i++) {
  graph.addVertex(myVertices[i]);
}

graph.addEdge('A', 'B');
graph.addEdge('A', 'C');
graph.addEdge('A', 'D');
graph.addEdge('C', 'D');
graph.addEdge('C', 'G');
graph.addEdge('D', 'G');
graph.addEdge('D', 'H');
graph.addEdge('B', 'E');
graph.addEdge('B', 'F');
graph.addEdge('E', 'I');

console.log('********* printing graph ***********');

console.log(graph.toString());
