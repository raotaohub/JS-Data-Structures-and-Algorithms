/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 * https://leetcode.cn/problems/middle-of-the-linked-list/
 */
/**
 * 快慢指针 巧妙在于 fast  = 2k ,slow = 1k ,当 fast.next 不存在时，slow 正好是中点
 * O(n)
 */
var middleNode = function (head) {
    let fast = slow = head


    while (fast && fast.next) {
        slow = slow.next
        fast = fast.next.next
    }
    return slow
};

/**
 *  正常的计算机穷举 思维
 * 
 *  1. 遍历一遍，得出链表 length 记作 count
 *  2. 根据 count 得出 oll | even ，偶数中位数 为 count/2 ，奇数为 向下取整的 count/2（这样奇数肯定会小1），记作index。
 *  3. 再从头遍历 index 次，这样 head 就正好指向 index 位
 *  4. 返回 head 即可。
 *  O(n+n/2)
 */

var middleNode = function (head) {

    let count = 0
    let p = head
    while (p) { p = p.next; count++ }

    let isEven = count % 2 === 0
    let index = isEven ? count / 2 : Math.floor(count / 2)

    while (index > 0) {
        head = head.next
        index--
    }

    return head
};