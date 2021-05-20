/*
 * @lc app=leetcode.cn id=141 lang=javascript
 *
 * [141] 环形链表
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
 * @return {boolean}
 * 龟兔赛跑原理
 */
 var hasCycle = function (head) {
    let slow = head;
    let fast = head;
    if (head === null) { //空的，肯定没环
        return false;
    }
    // 判断一个节点，两个节点不为空，就有戏
    while (fast.next !== null && fast.next.next !== null) {
        slow = slow.next; //一格
        fast = fast.next.next; //两格
        if (slow === fast) { //两个撞上了
            return true;
        }
     }
     return false;

};
// @lc code=end
