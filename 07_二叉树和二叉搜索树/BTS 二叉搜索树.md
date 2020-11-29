# BTS 二叉搜索树

#### 什么是二叉搜索树？

在计算机科学中，树与现实的树结构是一样的，但是它是倒着的。

​	二叉搜索树（BST）是树的一种，它有一个根节点，每个节点大于父节点的置于父节点的右侧，小于父节点的值的，存储在父节点的左侧。

![image-20201129163448874](C:\Users\raota\AppData\Roaming\Typora\typora-user-images\image-20201129163448874.png)

#### 创建一个二叉搜索树

- 需要一个 节点类 来表示BTS中的每个节点。

- 需要一个 比较函数 来判断新的节点应处于什么位置

- 需要一个 BTS类 来种一个树，且正确的处置每个节点

1. 创建节点类

   ```js
   class Node{
   	constructor(key){
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

3. 创建BTS类

   ```js
   class BSTree{
   	constructor(compare = compareFn){
   		this.compare = compare
   		this.root = null
   	}
   ....
   ```

#### 创建BST树最重要的方法 insert(key) 将一个值 插入到树中

- insert(key)  接着上面的 BSTree 类写

  ```js
  	insert(key){
  		if(this.root == null){									//1.思路：判断这个树的root节点是否为null
  			this.root = new Node(key)
  		}else{													//2.若不为null，则要为其安排一个正确的位置插入
              this.insertNode(this.root,key)
          }
  	}
  	insertNode(node,key){
          if(this.compare(node,key) === COMPARE.BIG){				//3.思路：若key比node小，key在左侧插入
          	if(node.left == null){			//3.1判断左侧是否有节点
                 node.left = new Node(key)
                 }else{
                 this.insert(node.left,key)	//3.2若左侧有节点，则递归操作，重新找到合适的位置。
              } 
          }else{													//4.反之在右侧插入
              if(node.right == null){
                  node.right = new Node(key)
              }else{
                  this.insertNode(node.right,key)
              }
          }
      }
  
  }
  ```

  



