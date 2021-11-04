/*
 * @Description: 
 * @Autor: Blueheart
 * @Date: 2021-11-04 10:39:27
 * @LastEditTime: 2021-11-04 12:04:39
 * @FilePath: \DataStructures_Algorithm_Leetcode_JavaScript\Leetcode\2.Linked List\234.回文链表.js
 */
/*
 * @lc app=leetcode.cn id=234 lang=javascript
 *
 * [234] 回文链表
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
 * @return {boolean}
 * 1.快指针到最后，慢指针到中间
 * 2.反转后面的链表
 * 3.比较两个链表的值
 */
 var isPalindrome = function(head) {
     let slow = head, fast = head, prev, next
     
     // 快得跑到最后，慢的跑到中点
     while (fast !== null && fast.next !== null) {
        slow = slow.next, fast = fast.next.next
    }
         
     // 前后两端分开，方便对后面进行翻转
     prev = slow; // 前半段叫prev
     slow = slow.next; // 后半段叫slow
     prev.next = null; // 前半段末尾断开，避免无限循环


    // 翻转后半段
     while (slow !== null){
        next = slow.next; 
         slow.next = prev;
         prev = slow;
         slow = next;
    }
    

     fast = head; // 前半段
     slow = prev; // 后半段

     while (slow !== null) {
        if (fast.val !== slow.val) return false
        else fast = fast.next, slow = slow.next
        
    }
        
    return true
};

// @lc code=end

