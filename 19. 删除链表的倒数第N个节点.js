/*
 * @Description: 
 * @Autor: Blueheart
 * @Date: 2021-01-07 14:49:25
 * @LastEditTime: 2021-01-07 15:16:09
 * @FilePath: \Algorithm_Leetcode\1.js
 */

// > 给定一个链表，删除链表的倒数第 n 个节点，并且返回链表的头结点。
// 示例：
// 给定一个链表: 1->2->3->4->5, 和 n = 2.
// 当删除了倒数第二个节点后，链表变为 1->2->3->5.

// 说明：
// 给定的 n 保证是有效的。


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
var removeNthFromEnd = function(head, n) {
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

    // 当n2移动到数组结尾的后一个位置（也就是空位置）时。移动结束，
    // 现在要删除的元素就是n1.next。所以将n1.next的指针指向n1.next.next就可以了
    n1.next = n1.next.next;
    // 最后将链表返回
    return dummy.next;
       
};

