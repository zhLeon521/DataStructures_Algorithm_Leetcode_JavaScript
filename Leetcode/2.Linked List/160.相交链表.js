/*
 * @Description: 
 * @Autor: Blueheart
 * @Date: 2021-11-03 10:47:03
 * @LastEditTime: 2021-11-03 11:02:58
 * @FilePath: \DataStructures_Algorithm_Leetcode_JavaScript\Leetcode\2.Linked List\160.相交链表.js
 */
/*
 * @lc app=leetcode.cn id=160 lang=javascript
 *
 * [160] 相交链表
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
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function (headA, headB) {

    if (!headA || !headB) return null;

    // 最终目的：a+b = b+a
    // 有交点，就返回交点值； 没有交点，就返回null

    let a = headA, b = headB;
    while (a !== b) {
        // 判断 a 是否走到链表 a 的末尾，走完了换下一个 headB
        a = a === null ? headB : a.next;
        // 判断 b 是否走到链表 b 的末尾，走完了换下一个 headA
        b = b === null ? headA : b.next;
        
    }
    
    return a;
    
};
// @lc code=end

