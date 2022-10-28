/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 * https://leetcode.cn/problems/partition-list/
 */
/**
 * @param {ListNode} head
 * @param {number} x
 * @return {ListNode}
 */
var partition = function (head, x) {

    let list1 = l1 = new ListNode(-1) // 新建2个链表 和 对应的 虚拟头节点
    let list2 = l2 = new ListNode(-1)
    let dummy = head

    // 把原链表根据x 1分为2 
    while (dummy) {

        if (dummy.val >= x) {
            l2.next = new ListNode(dummy.val)
            l2 = l2.next
        } else {
            l1.next = new ListNode(dummy.val)
            l1 = l1.next

        }

        dummy = dummy.next
    }

    // 重新拼接
    l1.next = list2.next

    return list1.next
};