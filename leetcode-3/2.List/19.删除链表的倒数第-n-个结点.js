/*
 * @Description:
 * @Autor: Blueheart
 * @Date: 2022-01-31 00:00:59
 * @LastEditTime: 2022-01-31 00:11:22
 * @FilePath: \DataStructures_Algorithm_Leetcode_JavaScript\leetcode-3\2.List\19.删除链表的倒数第-n-个结点.js
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

// 这题有技巧：双指针经典应用
// 如果是删除倒数第n个节点，先让fast移动n步，然后fast与slow同时向后移，fast指向链表末尾，删除slow指向的节点就可以了。

function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val);
    this.next = (next === undefined ? null : next)

}
var removeNthFromEnd = function (head, n) {
    let dummy = new ListNode();
    dummy.next = head;
    let fast = slow = dummy;
    for (let i = 0; i <= n; i++) {
        fast = fast.next;
    }

    while (fast !== null) {
        slow = slow.next;
        fast = fast.next;
    }

    slow.next = slow.next.next;
    return dummy.next;

};
// @lc code=end


// 把注释版也放进来
var removeNthFromEnd = function (head, n) {
    // 首先创建dummy节点，让它指向第一个节点(head节点)
    let dummy = new ListNode();
    dummy.next = head;

    // 本题用双指针方法，创建两个指针让他们在dummy节点的位置
    let n1 = dummy;
    let n2 = dummy;

    // 举个例子：假设删除倒数第2个节点，那么n=2, 那么n2就向后移动了3次（i=0、1、2），这样n1与n2之间的间隔就是3了。
    for (let i = 0; i <= n; i++) {
        n2 = n2.next;
    }

    // 当n2移动到数组结尾的后一个位置（也就是空位置）时结束。
    // 所以，只要n2不为空，n1 n2就一直往后移动就可以。
    while (n2 !== null) {
        n1 = n1.next;
        n2 = n2.next;
    }

    // 当n2移动到数组结尾的后一个位置（也就是空位置）时。移动结束，
    // 现在要删除的元素就是n1.next。所以将n1.next的指针指向n1.next.next就可以了
    n1.next = n1.next.next;
    // 最后将链表返回
    return dummy.next;

};

