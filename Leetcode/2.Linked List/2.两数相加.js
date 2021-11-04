/*
 * @Description: 
 * @Autor: Blueheart
 * @Date: 2021-11-04 16:04:59
 * @LastEditTime: 2021-11-04 16:29:35
 * @FilePath: \DataStructures_Algorithm_Leetcode_JavaScript\Leetcode\2.Linked List\2.两数相加.js
 */
/*
 * @lc app=leetcode.cn id=2 lang=javascript
 *
 * [2] 两数相加
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
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
    let sum = 0;
    let curr = new ListNode();
    let dummy = curr;

    while (l1 || l2) { // 一点一点的加
        if (l1) {
            sum += l1.val;
            l1 = l1.next;
        }
        if (l2) {
            sum += l2.val;
            l2 = l2.next;
        }

        curr.next = new ListNode(sum % 10) //涉及到进位，取余放在这里
        curr = curr.next;

        // sum = Math.floor(sum / 10) //这个太慢了
        sum = sum > 9 ? 1 : 0; // 做除法看是否需要进位，0否1是
    }

    // 开辟一个新的节点，进位即可。
    if (sum > 0) {
        curr.next = new ListNode(sum)
    }

    return dummy.next;

};

// @lc code=end

