/* 
652. 寻找重复的子树
            1
            |
          /   \
         /     \
        2       3
       /       / \
      4       2   4
             /
            4


如果你想知道以自己为根的子树是不是重复的，是否应该被加入结果列表中，你需要知道什么信息？
你需要知道以下两点：

1、以我为根的这棵二叉树（子树）长啥样？
2、以其他节点为根的子树都长啥样？

1、自己为root的树什么是什么样，肯定是「后序遍历」 因为只有知道左右后才能知道一棵树完整的表达 。而表达就是串化
2、借助 map 结构，以所有树的串化为key，次数为value，就可以知道是否出现重复的 root

4_#_#
2_4_#_#_#
4_#_#
2_4_#_#_#
4_#_#
3_2_4_#_#_#_4_#_#
1_2_4_#_#_#_3_2_4_#_#_#_4_#_#
*/

var findDuplicateSubtrees = function (root) {
    const map = new Map()
    const result = []

    function traverse(root) {
        if (!root) return '#' // 用# 或任意符号标示空指针
        const left = traverse(root.left);
        const right = traverse(root.right);

        // **
        const key = root.val + "_" + left + "_" + right // 

        if (!map.has(key)) map.set(key, 1)
        else map.set(key, map.get(key) + 1)

        if (map.get(key) === 2) result.push(root)

        return key
    }

    traverse(root)
    return result
}