/*
 * @Description: 
 * @Autor: Blueheart
 * @Date: 2022-01-30 23:52:16
 * @LastEditTime: 2022-01-30 23:57:47
 * @FilePath: \DataStructures_Algorithm_Leetcode_JavaScript\leetcode-3\2.List\206.反转链表.js
 */
/*
 * @lc app=leetcode.cn id=206 lang=javascript
 *
 * [206] 反转链表
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
 * @return {ListNode}
 */

function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : null)
}
var reverseList = function (head) {
    if (head === null || head.next === null) return head;

    let prev = null;
    let curr = head;
    let next = head;

    while (curr !== null) {
        next = curr.next;
        curr.next = prev;
        prev = curr;
        curr = next;
    }

    return prev;

};
// @lc code=end

