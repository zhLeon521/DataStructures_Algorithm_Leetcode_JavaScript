/*
 * @Description: 
 * @Autor: Blueheart
 * @Date: 2022-01-30 22:35:30
 * @LastEditTime: 2022-01-30 22:41:26
 * @FilePath: \DataStructures_Algorithm_Leetcode_JavaScript\leetcode-3\2.List\203.移除链表元素.js
 */
/*
 * @lc app=leetcode.cn id=203 lang=javascript
 *
 * [203] 移除链表元素
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
 * @param {number} val
 * @return {ListNode}
 */

function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val);
    this.next = (next === undefined ? null : next)
}
var removeElements = function (head, val) {
    let dummy = new ListNode();
    dummy.next = head;

    let curr = dummy;
    while (curr.next !== null) {
        if (curr.next.val === val) {
            curr.next = curr.next.next;
            continue;
        }
        curr = curr.next;
    }
    return dummy.next;

};
// @lc code=end

