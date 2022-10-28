/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 * https://leetcode.cn/problems/intersection-of-two-linked-lists/
 *  思路 让两个环长度一样，然后一起遍历
 * 
 *  a 屁股 接 headB
 *  b 屁股 接 headA
 *  然后一起走，总会走到相交点 就返回 
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function (headA, headB) {

    if (!headA || !headA) return null
    let a = headA
    let b = headB


    while (a != b) {

        a = a !== null ? a.next : headB
        b = b !== null ? b.next : headA


    }

    return a
};