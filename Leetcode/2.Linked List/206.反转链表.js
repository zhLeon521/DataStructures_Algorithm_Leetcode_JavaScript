/*
 * @Description: 反转链表
 * @Autor: Blueheart
 * @Date: 2021-05-19 23:39:34
 * @LastEditTime: 2021-05-20 00:23:17
 * @FilePath: \DataStructures_Algorithm_Leetcode_JavaScript\Leetcode\2.Linked List\206.反转链表.js
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
 * 
 */
var reverseList = function (head) {
    let prev = null;
    let curr = head;
    let next = head;
    while (curr != null) {
        next = curr.next;
        curr.next = prev;
        prev = curr;
        curr = next;
    }   
    return prev;
    

};
// @lc code=end
