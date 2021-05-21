/*
 * @Description: 环形指针2，返回入口位置
 * @Autor: Blueheart
 * @Date: 2021-05-21 10:42:08
 * @LastEditTime: 2021-05-21 11:13:21
 * @FilePath: \DataStructures_Algorithm_Leetcode_JavaScript\Leetcode\2.Linked List\142.环形链表-ii.js
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
var detectCycle = function (head) {
    if (head === null) {
        return null;
    }
    let fast = head;
    let slow = head;
    let isCircle = false; //判断是否有环
    
    //判断是否有环
    while (fast.next !== null && fast.next.next !== null) {
        fast = fast.next.next;
        slow = slow.next;
        if (fast === slow) {
            isCircle = true;  // 有环，修改isCircle属性
            break; //跳出循环
        }
    }

    if ( !isCircle ) { //如果没有环
        return null;
    }

    //有环，就把fast拿到开头，寻找连个指针相聚的机会 
    fast = head;
    while (slow !== fast) {
        slow = slow.next;
        fast = fast.next;
    }
    return fast;

    
};
// @lc code=end

