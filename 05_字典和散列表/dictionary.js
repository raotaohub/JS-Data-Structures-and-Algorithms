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
  // remove(key)
  // hasKey(key)
  hasKeey(key) {
    return this.table[this.toStrFn(key)] != null                  // 检查一下table里这个key名是否已经存在了
  }
  // get(key)
  // clear()
  // size()
  // isEmpty()
  isEmpty() {
    return
  }
  // keys()
  // values()
  // keyValues()
  // forEach(callback)

















}