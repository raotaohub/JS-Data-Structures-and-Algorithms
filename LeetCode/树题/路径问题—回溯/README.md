# 思路

本题和 113.路径总和 II 是类似的思路，做完这道题，可以顺便把 113.路径总和 II 和 112.路径总和 做了。

结合 112.路径总和 和 113.路径总和 II，我在讲了二叉树：递归函数究竟什么时候需要返回值，什么时候不要返回值？，如果大家对二叉树递归函数什么时候需要返回值很迷茫，可以看一下。

接下来在看本题，就简单多了，本题其实需要使用回溯，但一些同学可能都不知道自己用了回溯，在二叉树：以为使用了递归，其实还隐藏着回溯中，我详细讲解了二叉树的递归中，如何使用了回溯。

接下来我们来看题：

首先思路很明确，就是要遍历整个树把更节点到叶子节点组成的数字相加。

那么先按递归三部曲来分析：

## 递归三部曲

如果对递归三部曲不了解的话，可以看这里：二叉树：前中后递归详解

确定递归函数返回值及其参数
这里我们要遍历整个二叉树，且需要要返回值做逻辑处理，所有返回值为 void，在二叉树：递归函数究竟什么时候需要返回值，什么时候不要返回值？中，详细讲解了返回值问题。

参数只需要把根节点传入，此时还需要定义两个全局遍历，一个是 result，记录最终结果，一个是 vector<int> path。

为什么用 vector 类型（就是数组）呢？ 因为用 vector 方便我们做回溯！

所以代码如下：

```java
int result;
vector<int> path;
void traversal(TreeNode\* cur)
```

确定终止条件
递归什么时候终止呢？

当然是遇到叶子节点，此时要收集结果了，通知返回本层递归，因为单条路径的结果使用 vector，我们需要一个函数 vectorToInt 把 vector 转成 int。

终止条件代码如下：

if (!cur->left && !cur->right) { // 遇到了叶子节点
result += vectorToInt(path);
return;
}
这里 vectorToInt 函数就是把数组转成 int，代码如下：

```java
int vectorToInt(const vector<int>& vec) {
int sum = 0;
for (int i = 0; i < vec.size(); i++) {
sum = sum \* 10 + vec[i];
}
return sum;
}
```

确定递归单层逻辑
本题其实采用前中后序都不无所谓， 因为也没有中间几点的处理逻辑。

这里主要是当左节点不为空，path 收集路径，并递归左孩子，右节点同理。

但别忘了回溯。

如图：

!129.求根到叶子节点数字之和.png

代码如下：

```java

                 // 中

if (cur->left) { // 左 （空节点不遍历）
    path.push_back(cur->left->val);
    traversal(cur->left); // 递归
    path.pop_back(); // 回溯
}
if (cur->right) { // 右 （空节点不遍历）
    path.push_back(cur->right->val);
    traversal(cur->right); // 递归
    path.pop_back(); // 回溯
}
这里要注意回溯和递归要永远在一起，一个递归，对应一个回溯，是一对一的关系，有的同学写成如下代码：

if (cur->left) { // 左 （空节点不遍历）
    path.push_back(cur->left->val);
    traversal(cur->left); // 递归
}
if (cur->right) { // 右 （空节点不遍历）
    path.push_back(cur->right->val);
    traversal(cur->right); // 递归
}
path.pop_back(); // 回溯
```

**把回溯放在花括号外面了，世界上最遥远的距离，是你在花括号里，而我在花括号外！** 这就不对了。

# 总结

过于简洁的代码，很容易让初学者忽视了本题中回溯的精髓，甚至作者本身都没有想清楚自己用了回溯。

**我这里提供的代码把整个回溯过程充分体现出来，希望可以帮助大家看的明明白白！**

# 其他语言版本

Java：

```java
class Solution {
    List<Integer> path = new ArrayList<>();
    int res = 0;
    public int sumNumbers(TreeNode root) {
    // 如果节点为 0，那么就返回 0
    if (root == null) return 0;
    // 首先将根节点放到集合中
    path.add(root.val);
    // 开始递归
    recur(root);
    return res;
}

    public void recur(TreeNode root){
        if (root.left == null && root.right == null) {
            // 当是叶子节点的时候，开始处理
            res += listToInt(path);
            return;
        }

        if (root.left != null){
            // 注意有回溯
            path.add(root.left.val);
            recur(root.left);
            path.remove(path.size() - 1);
        }
        if (root.right != null){
            // 注意有回溯
            path.add(root.right.val);
            recur(root.right);
            path.remove(path.size() - 1);
        }
        return;
    }
    public int listToInt(List<Integer> path){
        int sum = 0;
        for (Integer num:path){
            // sum * 10 表示进位
            sum = sum * 10 + num;
        }
        return sum;
    }

}
```

# 二叉树力扣题目总结

按照如下顺序刷力扣上的题目，相信会帮你在学习二叉树的路上少走很多弯路。

```txt
二叉树理论基础
二叉树：递归遍历
二叉树：迭代法遍历（不统一方式）
二叉树：迭代吗遍历（统一方式）
102.二叉树的层序遍历
226.翻转二叉树
101.对称二叉树
104.二叉树的最大深度
111.二叉树的最小深度
222.完全二叉树的节点个数
110.平衡二叉树
257.二叉树的所有路径
递归中隐藏回溯
404.左叶子之和
513.找树左下角的值
112.路径总和
106.从中序与后序遍历序列构造二叉树
654.最大二叉树
617.合并二叉树
700.二叉搜索树中的搜索
98.验证二叉搜索树
530.二叉搜索树的最小绝对差
501.二叉搜索树中的众数
236.二叉树的最近公共祖先
235.二叉搜索树的最近公共祖先
701.二叉搜索树中的插入操作
450.删除二叉搜索树中的节点
669.修剪二叉搜索树
108.将有序数组转换为二叉搜索树
538.把二叉搜索树转换为累加树
二叉树总结篇
```

## https://leetcode.cn/problems/sum-root-to-leaf-numbers/comments/
