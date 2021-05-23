/*
 * @Description: K个一组翻转链表
 * @Autor: Blueheart
 * @Date: 2021-05-22 22:42:38
 * @LastEditTime: 2021-05-23 15:54:10
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
// 这个没什么好说的
let myReverse = (head) => {
    let prev = null;
    let curr = head; //工作节点，遍历用
    let next = head;
    while (curr !== null) {
        next = curr.next;
        curr.next = prev;
        prev = curr;
        curr = next;
    }
    return prev;
}

// 这部分是主函数
var reverseKGroup = function (head, k) {
    // 如果链表为空，或者有一个，那就直接返回就好了
    if (head === null && head.next === null) {
        return head;
    }
    
    // 新建一个dummy节点，指向链表头部
    let dummy = new ListNode;
    dummy.next = head;

    // 初始化连个节点。
    // pre: 每次要反转的链表的头结点的上一个节点。
    // end: 每次要反转的链表的尾节点。
    let pre = dummy; 
    let end = dummy;

    while (end.next !== null) {
        // 循环到 要翻转链表的尾部。这里要判断end是否为空,为空的话会异常。
        //dummy->1->2->3->4->5 若k为2，循环2次，end指向2
        for (let i = 0; i < k && end !== null; i++){
            end = end.next;
        }
        // 如果end==null，即需要翻转的链表的节点数小于k，不执行翻转。
        if (end == null) {
            break;
        }
        // ********重点哈！！！！***********
         //先记录下end.next,方便后面链接链表
        let next = end.next;
        end.next = null;  //然后断开链表
        
        let start = pre.next;//记录下要翻转链表的头节点

        //翻转链表,pre.next指向翻转后的链表。1->2 变成2->1。 dummy->2->1
        pre.next = myReverse(start);
        start.next = next; //翻转后头节点变到最后。通过.next把断开的链表重新链接。
        pre = start; //将pre换成下次要翻转的链表的头结点的上一个节点。即start
        end = start; //翻转结束，将end置为下次要翻转的链表的头结点的上一个节点。即start
    }

    return dummy.next;

};




// 拓展！！
/***
 * 要求从后往前以k个为一组进行翻转。(字节跳动（ByteDance）面试题)
例子，1->2->3->4->5->6->7->8, k = 3,
从后往前以k=3为一组，
6->7->8 为一组翻转为8->7->6，
3->4->5为一组翻转为5->4->3.
1->2只有2个nodes少于k=3个，不翻转。
最后返回： 1->2->5->4->3->8->7->6
***/

/***
 * 思路: 跟从前往后以k个为一组进行翻转类似，可以进行预处理：

例子：1->2->3->4->5->6->7->8, k = 3
翻转链表得到：8->7->6->5->4->3->2->1
以k为一组翻转： 6->7->8->3->4->5->2->1
翻转步骤#2链表： 1->2->5->4->3->8->7->6
 */


// // 内部的翻转链表
// const myReverse = (head) => {
//     let prev = null;
//     let curr = head;
//     let next = head;
//     while (curr !== null) {
//         next = curr.next;
//         curr.next = prev;
//         prev = curr;
//         curr = next;
//     }
//     return prev;
// }

// var reverseKGroup = function (head, k) {
//     let dummy = new ListNode();
//     dummy.next = myReverse(head);  //一上来就给他翻转过来！！！
//     let pre = dummy;
//     let end = dummy;

//     if (head === null && head.next === null) {
//         return head;
//     }

//     while (end.next !== null) {
//         for (let i = 0; i < k && end !== null; i++){
//             end = end.next;
//         }
//         if (end === null) {
//             break;
//         }

//         let next = end.next;
//         end.next = null;
//         let start = pre.next;
//         pre.next = myReverse(start); // 每个小组内反转
//         start.next = next;
//         pre = start;
//         end = start;

//     }

//     return myReverse(dummy.next) // 最后把结果反转！！
    

// }
// @lc code=end
