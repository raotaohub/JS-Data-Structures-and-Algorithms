/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 *  快慢指针 典中典
 *  k = 2
 *  1.先让快指针走 k 步         1->2->【3快】->4->5 
 *  2.快慢一起走，直到快到null   1->2->3->【4慢】->5->【快】
 *  此时slow 就是倒数第 k 个
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {number}
 */
var kthToLast = function (head, k) {

    let fast = slow = head

    for (let i = 0; i < k; i++) {
        fast = fast.next
    }


    while (fast) {

        slow = slow.next
        fast = fast.next
    }

    return slow.val
};