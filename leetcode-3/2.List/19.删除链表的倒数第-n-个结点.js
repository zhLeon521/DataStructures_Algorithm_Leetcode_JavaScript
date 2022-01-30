/*
 * @Description:
 * @Autor: Blueheart
 * @Date: 2022-01-31 00:00:59
 * @LastEditTime: 2022-01-31 00:11:22
 * @FilePath: \DataStructures_Algorithm_Leetcode_JavaScript\leetcode-3\2.List\19.删除链表的倒数第-n-个结点.js
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

// 这题有技巧：双指针经典应用
// 如果是删除倒数第n个节点，先让fast移动n步，然后fast与slow同时向后移，fast指向链表末尾，删除slow指向的节点就可以了。

function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val);
    this.next = (next === undefined ? null : next)

}
var removeNthFromEnd = function (head, n) {
    let dummy = new ListNode();
    dummy.next = head;
    let fast = slow = dummy;
    for (let i = 0; i <= n; i++) {
        fast = fast.next;
    }

    while (fast !== null) {
        slow = slow.next;
        fast = fast.next;
    }

    slow.next = slow.next.next;
    return dummy.next;

};
// @lc code=end

