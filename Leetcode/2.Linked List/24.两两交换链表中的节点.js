/*
 * @Description: 两两交换链表元素
 * @Autor: Blueheart
 * @Date: 2021-05-20 10:28:50
 * @LastEditTime: 2021-05-20 15:24:10
 * @FilePath: \DataStructures_Algorithm_Leetcode_JavaScript\Leetcode\2.Linked List\24.两两交换链表中的节点.js
 */
/*
 * @lc app=leetcode.cn id=24 lang=javascript
 *
 * [24] 两两交换链表中的节点
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
var swapPairs = function (head) {
    let dummy = new ListNode();  //新建一个dummy节点
    dummy.next = head; //将这个dummy指向head
    let curr = dummy; //curr是遍历数组用的

    //如果链表的节点小于两个元素，就不用交换了
    while (curr.next !== null && curr.next.next !== null) {
        let n1 = curr.next;
        let n2 = curr.next.next;
        curr.next = n2;
        n1.next = n2.next;
        n2.next = n1;
        curr = n1; //把curr节点后移
    }
    return dummy.next;
    
};
// @lc code=end

