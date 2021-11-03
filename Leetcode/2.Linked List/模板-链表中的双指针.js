/*
 * @Description: 
 * @Autor: Blueheart
 * @Date: 2021-11-03 16:34:28
 * @LastEditTime: 2021-11-03 16:42:00
 * @FilePath: \DataStructures_Algorithm_Leetcode_JavaScript\Leetcode\2.Linked List\模板-链表中的双指针.js
 */

let dummy = new ListNode()
dummy.next = head;

let n1 = dummy;
let n2 = dummy;

// *********************************************



var ListNodexx = function (head) {
    if (head === null) {
        return null;
    }

    let fast = head;
    let slow = head;

    while (slow.next !== null && fast.next !== null && fast.next.next !== null) {
        fast = fast.next.next;
        slow = slow.next;
        if (fast === slow) {
            return true;
        }
    }
}


// 1. 在调用next 字段之前，需要始终检查节点是都为空
// 例如，在我们运行 fast = fast.next.next 之前，需要检查 fast 和 fast.next 不为空。


// 2. 仔细定义循环的结束条件



// 复杂度：
// 空间复杂度将是 O(1)
// 时间复杂度：分析  运行循环的次数：
// 在前面的查找循环示例中，假设我们每次移动较快的指针 2 步，每次移动较慢的指针 1 步。
//     如果没有循环，快指针需要 N/2 次才能到达链表的末尾，其中 N 是链表的长度。
//     如果存在循环，则快指针需要 M 次才能赶上慢指针，其中 M 是列表中循环的长度。
// 显然，M <= N 。所以我们将循环运行 N 次。对于每次循环，我们只需要常量级的时间。因此，该算法的时间复杂度总共为 O(N)。

