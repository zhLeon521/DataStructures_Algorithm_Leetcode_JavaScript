/*
 * @Description: 
 * @Autor: Blueheart
 * @Date: 2021-11-03 17:17:51
 * @LastEditTime: 2021-11-03 17:25:18
 * @FilePath: \DataStructures_Algorithm_Leetcode_JavaScript\Leetcode\2.Linked List\203.移除链表元素.js
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

