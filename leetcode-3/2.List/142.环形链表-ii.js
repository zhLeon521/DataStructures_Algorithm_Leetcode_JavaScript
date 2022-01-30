/*
 * @Description:
 * @Autor: Blueheart
 * @Date: 2022-01-31 00:17:51
 * @LastEditTime: 2022-01-31 00:49:38
 * @FilePath: \DataStructures_Algorithm_Leetcode_JavaScript\leetcode-3\2.List\142.环形链表-ii.js
 */
/*
 * @lc app=leetcode.cn id=142 lang=javascript
 *
 * [142] 环形链表 II
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {ListNode}
 */

// 判断入口：
//      一个从头结点出发，一个从相遇点出发。

// function ListNode(val, next) {
//     this.val = val;
//     this.next = null;
// }
var detectCycle = function (head) {
    if (head === null) return null;
    let fast = head;
    let slow = head;
    let isCircle = false;

    while (fast.next !== null && fast.next.next !== null) {
        fast = fast.next.next;
        slow = slow.next;
        if (fast === slow) {
            isCircle = true;
            break;

        }
    }


    if (isCircle === false) { //如果没有环
        return null;
    }

    // 有环，有环，就把fast拿到开头，寻找连个指针相聚的机会
    fast = head;
    while (slow !== fast) {
        slow = slow.next;
        fast = fast.next;
    }
    return fast;


};
// @lc code=end

