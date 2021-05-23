/*
 * @Description: K个一组翻转链表
 * @Autor: Blueheart
 * @Date: 2021-05-22 22:42:38
 * @LastEditTime: 2021-05-23 14:55:53
 * @FilePath: \DataStructures_Algorithm_Leetcode_JavaScript\Leetcode\2.Linked List\25.k-个一组翻转链表.js
 */
/*
 * @lc app=leetcode.cn id=25 lang=javascript
 *
 * [25] K 个一组翻转链表
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
 * @param {number} k
 * @return {ListNode}
 */

// 定义个函数，翻转每个子链表。和206题一样
let myReverse = (head) => {
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
}


var reverseKGroup = function (head, k) {
    if (head === null && head.next === null) {
        return head;
    }

    let dummy = new ListNode;
    dummy.next = head;
    let pre = dummy; 
    let end = dummy;

    while (end.next !== null) {
        for (let i = 0; i < k && end !== null; i++){
            end = end.next;
        }
        if (end == null) {
            break;
        }

        let next = end.next;
        end.next = null;
        
        let start = pre.next;
        pre.next = myReverse(start);
        start.next = next;
        pre = start;
        end = start;
    }

    return dummy.next;

};
// @lc code=end

