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

/**
 * 一般来说，要返回新的链表，就需要用到 虚拟节点 的思想。
 * 
 * 主要思路是 创建 2个新表头，分别存储 > x && < x 的值，然后再将2个表接起来。
 *   
 * 1. 创建 d1 & p1 ，d2 & p2 ， 其中 p1 & p2 用来迭代
 * 2. 迭代一遍 head，根据 val 与 x 的大小关系，分别存储于 p1 | p2
 * 3. 用 小尾巴 p1.next 接着 大头 d2.next ，并返回小头 d1.next
 */

var partition = function (head, x) {

    let d1 = p1 = new ListNode(-1) // 小于x
    let d2 = p2 = new ListNode(-1) // 大于x


    while (head) {
        if (head.val < x) {
            p1.next = new ListNode(head.val)
            p1 = p1.next
        } else {
            p2.next = new ListNode(head.val)
            p2 = p2.next
        }

        head = head.next
    }


    p1.next = d2.next
    return d1.next

};