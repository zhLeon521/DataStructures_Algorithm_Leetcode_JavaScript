/*
 * @Description: 
 * @Autor: Blueheart
 * @Date: 2021-11-03 11:12:24
 * @LastEditTime: 2021-11-03 11:59:33
 * @FilePath: \DataStructures_Algorithm_Leetcode_JavaScript\Leetcode\2.Linked List\19.删除链表的倒数第-n-个结点.js
 */
/*
 * @lc app=leetcode.cn id=19 lang=javascript
 *
 * [19] 删除链表的倒数第 N 个结点
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function (head, n) {
    let dummy = new ListNode();
    dummy.next = head;

    let n1 = dummy;
    let n2 = dummy;

    for (let i = 0; i < n; i++){
        n2 = n2.next;
    }

    while (n2.next !== null) {
        n1 = n1.next;
        n2 = n2.next;
    }

    n1.next = n1.next.next;
    return dummy.next;


};
// @lc code=end

