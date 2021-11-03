/*
 * @Description: 
 * @Autor: Blueheart
 * @Date: 2021-11-03 17:38:15
 * @LastEditTime: 2021-11-03 19:20:09
 * @FilePath: \DataStructures_Algorithm_Leetcode_JavaScript\Leetcode\2.Linked List\328.奇偶链表.js
 */
/*
 * @lc app=leetcode.cn id=328 lang=javascript
 *
 * [328] 奇偶链表
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
var oddEvenList = function (head) {
    if (head === null || head.next === null) {
        return head;
    }

    let dummy = new ListNode()
    dummy.next = head;

    let odd = dummy.next;  // 扫描奇链节点
    let even = dummy.next.next;  //扫描偶链节点
    let evenHead = even;  // 保存偶链的头结点

    while (even !== null && even.next !== null) {
        odd.next = odd.next.next;  // 每次走两步
        odd = odd.next;  // 向后移一位

        even.next = even.next.next;  // 每次走两步
        even = even.next;  // 向后移一位
    }

    odd.next = evenHead; //把偶链接在奇链后面

    return dummy.next; // 返回dummy.next


};
// @lc code=end

