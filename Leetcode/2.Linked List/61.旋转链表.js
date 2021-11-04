/*
 * @Description: 
 * @Autor: Blueheart
 * @Date: 2021-11-04 17:42:19
 * @LastEditTime: 2021-11-04 17:53:25
 * @FilePath: \DataStructures_Algorithm_Leetcode_JavaScript\Leetcode\2.Linked List\61.旋转链表.js
 */
/*
 * @lc app=leetcode.cn id=61 lang=javascript
 *
 * [61] 旋转链表
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
var rotateRight = function (head, k) {
    if (!head || !head.next || !k) return head;
    let length = 1, curr = head;

    // 这部就是计算链表长度
    while (curr.next) {
        curr = curr.next;
        length++; // 拿到总长度
    }

    // 形成闭环，最后找到位置，截断就可以
    curr.next = head; // 形成环形链表

    //假设 k = 2，我们就会从 3 这里处截断，然后 3 的 next 指向 null 即可
    let move = length - (k % length) //取模计算实际移动的步数
    while (move) {
        curr = curr.next; //根据move移动指针寻找截断点
        move--;
    }

    let newHead = curr.next; //保存截断点之后的点newHead（也就是新链表的头结点）
    curr.next = null;  //截断成普通链表 
    
    return newHead; //返回新链表的头结点

};
// @lc code=end

