/*
 * @Description: 
 * @Autor: Blueheart
 * @Date: 2021-11-03 11:12:24
 * @LastEditTime: 2021-11-03 12:03:32
 * @FilePath: \DataStructures_Algorithm_Leetcode_JavaScript\Leetcode\2.Linked List\19.删除链表的倒数第-n-个结点.js
 */
/*
 * @lc app=leetcode.cn id=19 lang=javascript
 *
 * [19] 删除链表的倒数第 N 个结点
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
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function (head, n) {
   // 首先创建dummy节点，让它指向第一个节点(head节点)
   let dummy = new ListNode();
   dummy.next = head;

   // 本题用双指针方法，创建两个指针让他们在dummy节点的位置
   let n1 = dummy;
   let n2 = dummy;
   
   // 举个例子：假设删除倒数第2个节点，那么n=2, 那么n2就向后移动了3次（i=0、1、2），这样n1与n2之间的间隔就是3了。
   for (let i=0; i<=n; i++){
       n2 = n2.next;
   }

   // 当n2移动到数组结尾的后一个位置（也就是空位置）时结束。
   // 所以，只要n2不为空，n1 n2就一直往后移动就可以。
   while(n2 !== null){
       n1 = n1.next;
       n2 = n2.next;
   }

// // *************这一步，有一点差别*************
//     // 举个例子：假设删除倒数第2个节点，那么n=2, 那么n2就向后移动了3次（i=0、1、2），这样n1与n2之间的间隔就是3了。
//     for (let i=0; i<n; i++){
//         n2 = n2.next;
//     }

//     // 当n2移动到数组结尾的后一个位置（也就是空位置）时结束。
//     // 所以，只要n2不为空，n1 n2就一直往后移动就可以。
//     while(n2.next !== null){
//         n1 = n1.next;
//         n2 = n2.next;
//     }

//     // *************这一步，有一点差别*************

    n1.next = n1.next.next;
    return dummy.next;


};
// @lc code=end

