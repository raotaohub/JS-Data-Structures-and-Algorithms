/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 * https://leetcode.cn/problems/middle-of-the-linked-list/
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var middleNode = function (head) {
    let fast = slow = head


    while (fast && fast.next) {
        slow = slow.next
        fast = fast.next.next
    }
    return slow
};