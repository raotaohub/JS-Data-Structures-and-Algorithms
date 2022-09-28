# BTS 二叉搜索树

#### 1、什么是二叉搜索树？

在计算机科学中，树与现实的树结构是一样的，但是它是倒着的。

​ 二叉搜索树（BST）是树的一种，它有一个根节点，每个节点大于父节点的置于父节点的右侧，小于父节点的值的，存储在父节点的左侧。
小于 root 在左边 ，大于 root 在右边。

<img src="C:\Users\raota\AppData\Roaming\Typora\typora-user-images\image-20201129163448874.png" alt="、" style="zoom:50%;" />

#### 2、创建一个二叉搜索树？

- 需要一个 节点类 来表示 BTS 中的每个节点。

- 需要一个 比较函数 来判断新的节点应处于什么位置

- 需要一个 BTS 类 来种一个树，且正确的处置每个节点

1. 创建节点类

   ```js
   class Node {
     constructor(key) {
       this.key = key
       this.left = null
       this.irght = null
     }
   }
   ```

2. 写一个比较函数

   ```js
   const function compareFn (a,b){
   	if(a===b) return COMPARE.EQUALS
   	a < b ? COMPARE.LESS : COMPARE.BIG
   }
   const COMPARE = {
       BIG : 1,
       LESS : -1,
       EQUALS : 0
   }
   ```

3. 创建 BTS 类

   ```js
   class BSTree{
   	constructor(compare = compareFn){
   		this.compare = compare
   		this.root = null
   	}
   ....
   }
   ```

#### 3、创建 BST 树最重要的方法 insert(key) 将一个值 插入到树中

- insert(key) 接着上面的 BSTree 类写

  ```js
  {
      insert(key){
  		if(this.root == null){									//1.思路：判断这个树的root节点是否为null
  			this.root = new Node(key)
  		}else{													//2.若不为null，则要为其安排一个正确的位置插入
              this.insertNode(this.root,key)
          }
  	}
  	insertNode(node,key){
          if(this.compare(node,key) === COMPARE.BIG){				//3.思路：若key比node小，key在左侧插入
          	if(node.left == null){				//3.1判断左侧是否有节点
                 node.left = new Node(key)
                 }else{
                 this.insert(node.left,key)		//3.2若左侧有节点，则递归操作，重新找到合适的位置。
              }
          }else{													//4.反之在右侧插入
              if(node.right == null){
                  node.right = new Node(key)		//4.1
              }else{
                  this.insertNode(node.right,key)	//4.2
              }
          }
      }
  ......
  }
  ```

##### 在一棵树中，插入一个节点需要考虑 2 种情况

> 1. **树的 根节点为 null ， 将该 node 设为这棵树的根，**
> 2. **树的 根节点不为 null ，又可以细分 2 种情况**
>    - 1）node 值小于 root 的值，在左侧插入；又可细分 2 种情况
>      - 左侧没有值，将 node 设为左侧节点
>      - 左侧 有值，递归调用，继续找到树的下一层。 => 重复 第 2 情况
>    - 2）node 值大于 root 的值，在右侧插入；又可细分 2 种情况
>      - 右侧没有值，将 node 设为右侧节点
>      - 右侧 有值，递归调用，继续找到树的下一层。=> 重复 第 2 情况

这个过程，也像是一棵树。

#### 4、创建 先序遍历、中序遍历、后序遍历

- 通常把调用和遍历分开，于是我们这样写

  ```js
  {
      //先序遍历
  	preOder(callback){
  		this.preOderNode(this.root,callback)
  	}
  	//中序遍历
  	inOder(callback){
  		this.inOderNode(this.root,callback)
  	}
  	//先后序遍历
  	postOder(callback){
  		this.postOderNode(this.root,callback)
  	}
   ......
  }
  ```

- 三种方法的区别在哪里？

  - 区别只在遍历**根节点**的顺序不同。

1. 创建 **先序搜索**

   ```js
   {
   	preOderNode(node,callback){
           if(this.node != null){
   			callback(node.key)			//先序就是先遍历
   			this.preOderNode(node.left,callback)
               this.preOderNode(node.right,callback)
           }
   	}
    ......
   }
   ```

   <img src="C:\Users\raota\AppData\Roaming\Typora\typora-user-images\image-20201129191541129.png" alt="image-20201129191541129" style="zoom:50%;" />

2. 创建 中序遍历

   ```js
   {
   	inOderNode(node,callback){
           if(this.node != null){
   			this.inOderNode(node.left,callback)
               callback(node.key)			//中序就是在中遍历
               this.inOderNode(node.right,callback)
           }
   	}
    ......
   }
   ```

   <img src="C:\Users\raota\AppData\Roaming\Typora\typora-user-images\image-20201129191529674.png" alt="image-20201129191529674" style="zoom:50%;" />

3. 创建 后序遍历

   ```js
   {
   	postOderNode(node,callback){
           if(this.node != null){
   			this.postOderNode(node.left,callback)
               this.postOderNode(node.right,callback)
               callback(node.key)			//后序就是后遍历
           }
   	}
    ......
   }
   ```

   <img src="C:\Users\raota\AppData\Roaming\Typora\typora-user-images\image-20201129191551444.png" alt="image-20201129191551444" style="zoom:50%;" />

#### 5、校验是否正确

```js
const tree = new BSTTree()

tree.insert(11)
tree.insert(7)
tree.insert(15)
tree.insert(5)
tree.insert(3)
tree.insert(9)
tree.insert(8)
tree.insert(10)
tree.insert(13)
tree.insert(12)
tree.insert(14)
tree.insert(20)
tree.insert(18)
tree.insert(25)
tree.insert(6)

console.log(tree)

let index = []
tree.inOrder((node) => {
  index.push(node.key)
  // console.log(node)
})
let pre = []
tree.preOrder((node) => {
  pre.push(node.key)
  // console.log(node)
})
let post = []
tree.postOrder((node) => {
  post.push(node.key)
  // console.log(node)
})
console.log(index)
console.log(pre)
console.log(post)

/**    Console  **/
BSTTree {root: Node, compare: ƒ}
BSTTree.js:144 (15) [3, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 18, 20, 25]
BSTTree.js:145 (15) [11, 7, 5, 3, 6, 9, 8, 10, 15, 13, 12, 14, 20, 18, 25]
BSTTree.js:146 (15) [3, 6, 5, 8, 10, 9, 7, 12, 14, 13, 18, 25, 20, 15, 11]
```

学习数据结构和算法，应该在熟悉和了解，再谈掌握！希望大家学习进步！
