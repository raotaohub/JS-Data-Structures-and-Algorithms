/* 
给定一棵二叉搜索树和其中的一个节点 p ，找到该节点在树中的中序后继。如果节点没有中序后继，请返回 null 。
节点 p 的后继是值比 p.val 大的节点中键值最小的节点，即按中序遍历的顺序节点 p 的下一个节点。
来源：力扣（LeetCode）
链接：https://leetcode.cn/problems/P5rCT8
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
*/

var inorderSuccessor = function (root, p) {

    let result = null
    function traverse(root) {
        if (!root) return
        traverse(root.left)
        if (root.val > p.val && !result) return result = root; // 第一次找到 比 p 大的 ，即是满足题意的节点
        traverse(root.right)
    }
    traverse(root)

    return result
};