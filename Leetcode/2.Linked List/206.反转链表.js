/*
 * @Description: 反转链表
 * @Autor: Blueheart
 * @Date: 2021-05-19 23:39:34
 * @LastEditTime: 2021-11-03 17:02:17
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
    // 本质：先移动next,(怕指针断了找不到了)
    // 然后动curr指向pre
    // 最后pre 后移

    if (head === null || head.next === null) {
        return head;
    }

    let pre = null;
    let curr = head;
    let next = head;

    while (curr !== null) {
        next = curr.next;
        curr.next = pre;
        pre = curr;
        curr = next;
    }



    return pre;



    //     // 换成ES6语法，省略next
    //     // 先移动prev,再移动curr
    //     [curr.next, prev, curr] = [prev,curr,curr.next]

    

};
// @lc code=end
